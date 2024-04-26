"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
// Create express router instance for todos
const todoRouter = express_1.default.Router();
// Initialize mock database with an array of todo objects
let serverData = [];
// Initialize todo id tracker for adding and deleting todos, preventing duplicate todo ids
let todoId = 1;
// Get length of todos data endpoint
todoRouter.get("/length", (req, res) => {
    try {
        console.log("Hello?");
        res.status(200).json({ length: serverData.length });
    }
    catch (error) {
        res.status(500).send("A server error has occurred!" + error);
    }
});
// Get all todos endpoint
todoRouter.get("/", (req, res) => {
    res.status(200).json(serverData);
});
// Get todo by id endpoint
todoRouter.get("/:id", (req, res) => {
    try {
        // Get  todo ID from the URL parameters
        const todoId = parseInt(req.params.id);
        // Try to find todo with ID and set to todo variable
        const todo = serverData.find((todo) => todo.id === todoId);
        // If todo with the ID isn't found, send 404 status code not found
        if (!todo) {
            return res.status(404).send("Todo not found");
        }
        // Otherwise, send todo object as json
        else {
            res.status(200).json({ todo });
        }
    }
    catch (error) {
        res.status(500).send("A server error has occured!" + error);
    }
});
// Post a new todo endpoint
todoRouter.post("/", (req, res) => {
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
                id: todoId,
                description: incomingTodo.description,
                status: incomingTodo.status,
            };
            // Push todo object to fake database
            serverData.push(newTodo);
            // Increment todoId tracker
            todoId++;
            // Send status code 201 resource created
            res.status(201).send("Todo has been added!");
        }
    }
    catch (error) {
        res.status(500).send("A server error has occured!" + error);
    }
});
// Update todo by id endpoint
todoRouter.put("/:id", (req, res) => {
    try {
        // Get todo ID from the URL parameters
        const todoId = parseInt(req.params.id);
        // Try to find index of todo object by given ID
        const todoIndex = serverData.findIndex((todo) => todo.id === todoId);
        // If todo with the ID isn't found, send 404 status code not found
        if (todoIndex === -1) {
            return res.status(404).send("Todo not found");
        }
        else {
            // Set incoming todo object
            const incomingTodo = req.body;
            // Check if description and status are undefined and if the types are not strings and return status 400 if true, otherwise continue to updating the todo
            if (incomingTodo.description == undefined ||
                incomingTodo.status == undefined ||
                typeof req.body.description !== "string" ||
                typeof req.body.status !== "string") {
                res
                    .status(400)
                    .send("The todo id, description or status is missing or the type todo attribute(s) type is wrong.");
            }
            else {
                // Update the todo in serverdata
                serverData[todoIndex].description = incomingTodo.description;
                serverData[todoIndex].status = incomingTodo.status;
                // Send status code 200, todo successfully updated
                res.status(200).send("Todo successfully updated!");
            }
        }
    }
    catch (error) {
        res.status(500).send("A server error has occured!" + error);
    }
});
todoRouter.delete("/:id", (req, res) => {
    try {
        // Get todo ID from the URL parameters
        const todoId = parseInt(req.params.id);
        // Try to find index of todo object by given ID
        const todoIndex = serverData.findIndex((todo) => todo.id === todoId);
        // If todo with the ID isn't found, send 404 status code not found
        if (todoIndex === -1) {
            return res.status(404).send("Todo not found");
        }
        else {
            // Delete the todo in serverdata
            serverData.splice(todoIndex, 1);
            // Send status code 201
            res.status(200).send("Todo successfully deleted!");
        }
    }
    catch (error) {
        res.status(500).send("A server error has occured!" + error);
    }
});
exports.default = todoRouter;
