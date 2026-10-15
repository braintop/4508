import express from 'express';
const app = express();
import dotenv from 'dotenv';
dotenv.config();
let port = process.env.PORT || 3000;
let appname = process.env.APP_NAME
console.log(appname);
const tasks = [
  { id: 1, title: 'Install Docker', done: true },
  { id: 2, title: 'Write a Dockerfile', done: false },
];
 
app.get('/', (req, res) => {
  res.json({ message: 'tasks-api is running', node: process.version });
});
 
app.get('/api/tasks', (req, res) => {
  res.json(tasks);
});
 
app.listen(port, () => console.log(`Server on port ${port}`));
