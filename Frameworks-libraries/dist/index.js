"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const todos_1 = __importDefault(require("./routes/todos"));
// Create Express app
const app = (0, express_1.default)();
// Use body parser in express app
app.use(body_parser_1.default.json());
// Use todos router in express app
app.use("/todos", todos_1.default);
// Define home route
app.get("/", (req, res) => {
    res.status(200).send("Hello world!");
});
// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
