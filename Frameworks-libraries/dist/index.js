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
    try {
        const incomingTodo = req.body;
        if (incomingTodo.description == undefined ||
            incomingTodo.status == undefined) {
            res
                .status(400)
                .send("The todo id, description or status is missing or the type todo attribute(s) type is wrong.");
        }
        else {
            const newTodo = {
                id: serverData.length + 1,
                description: incomingTodo.description,
                status: incomingTodo.status,
            };
            serverData.push(newTodo);
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
