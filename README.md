# nodejs-angular-crud-app
This is a NodeJS - Angular CRUD app

## This applicaton has a NodJS backend and Angular JS front end

### NodeJS RESTful API

NodeJS RESTful API has following endpoints
  
  /users
    GET HTTP method - Get all users
    POST HTTP method - Create a User
    
 /users/:userId
  GET HTTP method - Get single user record
  PUT HTTP method - Update a userrecord
  DELETE HTTP method - Delete a User
 
 ### App Entry Script
  app.js is entry point for the app. this script connects to the datbase server and creats an HTTP server that listens on port 3000
  
 ### Backend Directory structure:
  Controllers
    Contains - UserController.js
    This file contains application logic for different RESTful routes
  
  Models
    Contains - UserModel.js
      This file contains mongoose user schema
  Routes 
    Contains - routes.js
    This file contains the HTTP routes for CRUD operations
  
  --------------------------------------------------------
  
  ## Front End
  
  Front end application is developed using Angular and Material CSS. With core component app has a 
  
  ### User Component
    User compnent has 4 files
    1. user.component.ts
    2. user component html file
    3. user component styles file
    4. user component spec file
    
   ### User Service
      A user service is added to connect with the backend. This service has number of methods that connect to the server RESTful endpoints
      
  
  ## Database
     MongoDB DBMS is used as data store for thsi application.
     Before running this app make sure:
      1. MongoDB is running
      2. A database named: db-users is created
      
   ## Running the applicaton
   
    1. Do a git clone of application
    2. CD into Server: do `npm install`
    3. Type `nodemon app.js`
    4. Server is running
    
    5. CD into front-end directory
    6. type`npm install`
    7. type `ng build`
    8. type `ng serve --port 4201`
    
    Both front and backend are running
    
    
      
  
  
