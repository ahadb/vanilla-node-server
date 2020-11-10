# Vanilla Node Server   
Bootstrap for a vanilla Node.js server without Express so you can see how it works. Often it's tough weeding throug the many tutorials and blog posts out there for Express, Hapi, etc IMO, it's always better to learn the fundamentals of Node.js (...they are baked in!) which is often overlooked by developers and then move onto the libraries.

## What this Repo Has to Offer
* Everything in one file without modularization
* Vanilla Node Server with `http` and `https` support
* Standard err/callback pattern, no promises or `async`, `await`
* As vanilla JS as possible, only ES6 syntax for arrow functions and template literals
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
