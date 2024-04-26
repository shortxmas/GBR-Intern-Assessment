# Understanding of Frameworks/Libraries task

## Objective

Choose a popular PHP framework (e.g., Laravel) or a Node.js framework (e.g., Express.js) and implement a simple CRUD (Create, Read, Update, Delete) application using the chosen framework.

## Project structure

- The chosen technologies are TypeScript Node.js with Express.js
- The mock database will be an serverside array of ToDo objects

## Running the project

**This project uses TypeScript for static typing and Nodemon NPM dependency for automatic development server restarting.**
1. Install project dependencies with ``npm install`` (Make sure you're CD'd into the Frameworks-libraries directory)
2. Open two terminals both CD'd into the Problem-solving task subfolder, one terminal for nodemon server restarting and one for TypeScript automatic compiling
3. In terminal one, run ``npm run dev`` which will start the automatic TypeScript compilation upon saves to source TypeScript files
4. In terminal two, run ``npm run start`` which will start the server and restart the server upon change to compiled TypeScript source files

**Postman was used to send requests and test the endpoint CRUD functionalities of the application**
The download and infromation for Postmon software can be found [here](https://www.postman.com)