import express from "express";
import bodyParser from "body-parser";

// Create Express app
const app = express();

// Use body parser in express app
app.use(bodyParser.json());

// Todo interface
interface ToDo {
  id: number;
  description: string;
  status: string;
}

// Initialize mock database with an array of todo objects
let serverData: ToDo[] = [];

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
    const incomingTodo: ToDo = req.body;
    if (
      incomingTodo.description == undefined ||
      incomingTodo.status == undefined
    ) {
      res
        .status(400)
        .send(
          "The todo id, description or status is missing or the type todo attribute(s) type is wrong."
        );
    } else {
      const newTodo: ToDo = {
        id: serverData.length + 1,
        description: incomingTodo.description,
        status: incomingTodo.status,
      };
      serverData.push(newTodo);
      res.status(201).send("Todo has been added!");
    }
  } catch (error: any) {
    res.status(500).send("A server error has occured!");
  }
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
