const environments = {}

environments.development = {
  'httpPort': 8080,
  'httpsPort': 8081,
  'environmentName': 'development'
}

environments.staging = {
  'httpPort': 3000,
  'httpsPort': 3001,
  'environmentName': 'staging'
}

environments.production = {
  'httpPort': 5000,
  'httpsPort': 5001,
  'environmentName': 'production'
}

const currentEnv = typeof(process.env.NODE_ENV) === 'string' ? process.env.NODE_ENV.toLowerCase() : ''
const exportedEnvironment = typeof(environments[currentEnv]) === 'object' ? environments[currentEnv] : environments.staging

module.exports = exportedEnvironment
