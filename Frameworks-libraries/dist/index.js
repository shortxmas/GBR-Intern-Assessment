"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
// Create Express app
const app = (0, express_1.default)();
// Use body parser in express app
app.use(body_parser_1.default.json());
// Initialize mock database with an array of todo objects
let serverData = [];
// Define home route
app.get("/", (req, res) => {
    res.status(200).send("Hello world!");
});
// Get all todos endpoint
app.get("/todos", (req, res) => {
    res.status(200).json(serverData);
});
// Post a new todo endpoint
app.post("/todos", (req, res) => {
    // Error catch, return status code 500 if error is thrown
    try {
        // Set incoming todo object
        const incomingTodo = req.body;
        // Check if description and status are undefined and if the types are not strings and return status 400 if true, otherwise continue to adding the todo
        if (incomingTodo.description == undefined ||
            incomingTodo.status == undefined ||
            typeof req.body.description !== "string" ||
            typeof req.body.status !== "string") {
            res
                .status(400)
                .send("The todo id, description or status is missing or the type todo attribute(s) type is wrong.");
        }
        else {
            // Create the todo object to be added with incoming todo object description and status and automatic id setting
            const newTodo = {
                id: serverData.length + 1,
                description: incomingTodo.description,
                status: incomingTodo.status,
            };
            // Push todo object to fake database
            serverData.push(newTodo);
            // Send status code 201 resource created
            res.status(201).send("Todo has been added!");
        }
    }
    catch (error) {
        res.status(500).send("A server error has occured!");
    }
});
// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
