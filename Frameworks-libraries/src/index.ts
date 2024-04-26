import express from 'express';

// Create Express app
const app = express();

// Todo interface
interface ToDo{
  id:number;
  description:string
  status:string
}

// Initialize mock database with an array of todo objects
let serverData: ToDo[] = []

// Define home route
app.get('/', (req, res) => {
  res.send('Hello world!');
});

// Get all todos endpoint
app.get('/todos',(req,res)=>{
  res.json(serverData).status(200)
})

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});