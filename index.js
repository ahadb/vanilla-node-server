const http = require('http')
const https = require('https')
const url = require('url')
const fs = require('fs')
const StringDecoder = require('string_decoder').StringDecoder
const config = require('./utils/config')

const handlers = {}
const router = {
  'stats': handlers.stats
}

const httpServer = http.createServer((request, response) => {
  universalServer(request, response)
})

httpServer.listen(config.httpPort, () => {
  console.log(`httpServer is listening on ${config.httpPort} in ${config.environmentName} mode`)
})

const httpsServerOptions = {
  'key': fs.readFileSync('./https/key.pem'),
  'cert': fs.readFileSync('./https/cert.pem')
}

const httpsServer = https.createServer(httpsServerOptions, (request, response) => {
  universalServer(request, response)
})

httpsServer.listen(config.httpsPort, function() {
  console.log(`httpsServer is listening on ${config.httpsPort} in ${config.environmentName} mode`)
})

const universalServer = (request, response) => {
  const parsedUrl = url.parse(request.url, true)
  const path = parsedUrl.pathname
  const trimmedPath = path.replace(/^\/+|\/+$/g, '')
  const queryString = parsedUrl.query
  const method = request.method.toLowerCase()
  const headers = request.headers
  const decoder = new StringDecoder('utf-8')
  let buffer = ''

  request.on('data', (data, err) => {
    if (err) {

    }
    buffer += decoder.write(data)
  })

  request.on('end', () => {
    buffer += decoder.end()
    const handler = typeof(router[trimmedPath]) !== 'undefined' ? router[trimmedPath] : handlers.notFound
    const data = {
      'trimmedPath' : trimmedPath,
      'querySrringObject': queryString,
      'method': method,
      'headers': headers,
      'payload': buffer
    }

    handler(data, (statusCode, payload) => {
      statusCode = typeof(statusCode) === 'number' ? statusCode : 200
      payload = typeof(payload) === 'object' ? payload : {}
      const payloadString = JSON.stringify(payload)

      response.setHeader('Content-Type', 'application/json')
      response.writeHead(statusCode)
      response.end(payloadString)
    })
  })
}

handlers.stats = (data, cb) => {
  cb(200, {'status': 'success'})
}

handlers.notFound = (data, cb) => {
  cb(404)
}
