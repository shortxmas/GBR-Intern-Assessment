# Problem solving task

## Objective

Provide a solution to a basic programming problem using PHP or Node.js. The problem may involve data manipulation, string operations, or basic algorithmic tasks.

## Problem

Searching for a specific piece of data by ID when fetching large amounts of data from a Rest API (https://jsonplaceholder.typicode.com/photos)

## Solution

Create a binary search function that given and int ID as a paramter, will search through data fetched from a rest API and print the index of the data object with that ID

## Running the project

**This project uses TypeScript for static typing and Nodemon NPM dependency for automatic development server restarting.**
1. Install project dependencies with ``npm install`` (Make sure you're CD'd into the Problem-solving directory)
2. Open two terminals both CD'd into the Problem-solving task subfolder, one terminal for nodemon server restarting and one for TypeScript automatic compiling
3. In terminal one, run ``npm run dev`` which will start the automatic TypeScript compilation upon saves to source TypeScript files
4. In terminal two, run ``npm run start`` which will start the server and restart the server upon change to compiled TypeScript source files