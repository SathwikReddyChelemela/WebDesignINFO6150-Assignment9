## CSR Tech Review Website

## Overview
This project consists of a React front-end application for user authentication and a Node.js back-end server. The React app communicates with the server to authenticate users. It includes a login page where users can enter their email and password to authenticate.


## Prerequisites
Before you begin, make sure you have the following software installed on your machine:

Node.js: JavaScript runtime for executing code on the server side.
npm: Node Package Manager for managing project dependencies.
MongoDB: A NoSQL database used for storing user data.

Database
Ensure that MongoDB is running, and a database named Assignment8DB is available for the application. The backend server will connect to this database to store and retrieve user data.


## Routes and Components
/login: Login page for user authentication.
/home: Home page.
/about: About page.
/job: Job page.
/contact: Contact page.

## Project Structure
App.js: Main component defining the routes and layout.
Components:
Home, Layout, About, Contact, Job, ChildHome, Login
CSS:
App.css for styling.
Bootstrap.min.css for Bootstrap styles.


## BACKEND 

Technologies Used
Node.js: A JavaScript runtime used for building scalable network applications.
Express.js: A web application framework for Node.js used to build the RESTful API.
MongoDB: A NoSQL database used to store user data.
Mongoose: An ODM (Object Data Modeling) library for MongoDB and Node.js.
bcrypt: A library used for hashing passwords securely.
cors: Middleware for enabling Cross-Origin Resource Sharing.
http: A module to create an HTTP server.
body-parser: Middleware for parsing incoming request bodies.
Project Structure
The project is organized into the following main components:

Controllers: Located in the controllers directory, it contains the UserController responsible for handling user-related operations such as user creation, authentication, editing, deletion, and retrieval.

Routes: The routing for different endpoints is defined in the routers/router.js file. It maps the API endpoints to the corresponding controller methods.

Backend API Routes
User Authentication:
Endpoint: POST /user/authenticate
Payload: JSON with email and password
Response:
Success: Status 200 with { message: "User authenticated successfully" }
Failure: Status 401 with { message: "User not found" } or { message: "Incorrect password" }

Models: The model/users.model.js file defines the structure of the user data stored in MongoDB. It uses Mongoose for schema definition.

Services: The service/service.js file contains the UserService, which encapsulates the business logic related to user operations.

Server Setup: The app.js file sets up the Express application, connects to the MongoDB database, and defines routes. The server is created using the http module.

## Frontend

Technologies Used
React: A JavaScript library for building user interfaces.
React Router: A library for handling navigation in a React application.
Bootstrap: A popular CSS framework for building responsive and stylish user interfaces.
axios: A promise-based HTTP client for making requests to the backend API.
Project Structure
The project is organized into the following main components:

Components: Located in the Component directory, it contains various components such as Home, Layout, About, Contact, Job, ChildHome, and Login. Each component corresponds to a different page or section of the application.

App.js: The main entry point for the React application. It sets up the React Router for handling navigation and defines the routes for different components.

Login Component: The Login component handles user authentication. It includes a form with email and password fields, and upon submission, it sends a request to the backend API for authentication.

Usage:
Login Page:

Navigate to http://localhost:3000/login to access the login page. Enter valid credentials, and upon successful authentication, you will be redirected to the home page.

Home Page:

Navigate to http://localhost:3000/home to access the home page.

Navigation:

The application uses React Router for navigation. You can use the navigation links in the Layout component or the URLs to switch between different pages.




