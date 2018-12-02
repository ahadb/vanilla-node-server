# Vanilla Node Server   

Bootstrap for a vanilla node.js server without Express so you can see how it works. 

## What this Repo Has to Offer
Too many tutorials out there for Express, Hapi, etc, it's always better to learn the fundamentals of Node.js which is often
overlooked by developers as they continue to npm, npm away.

* Everything in one file without modularization
* Vanilla Node Server with `http` and `https` support
* As vanilla JS as possible, some ES6 syntax for arrow fn
* Support for http & https
* Config for NODE_ENV supporting dev, prod, staging
* Basic Routing & Handling
* Returns a response with empty object if no payload
* No package.json :)

## Start Server
* Start `node index.js`
* Start with NODE_ENV: `NODE_ENV=production node index.js`
* Check to see if server is running: 
  ```bash
   NODE_ENV=staging node index.js
   POSTMAN > localhost:3000/status
   ```
* Stop Server: `Ctrl + C`
