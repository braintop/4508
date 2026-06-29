import express, { Request, Response, NextFunction } from 'express';
const app = express();
let posts = [{ id: 1, title: 'Ari potet', description: 'Good story about,...' }, { id: 2, title: 'Post 2', description: 'Description 2' }, { id: 3, title: 'Post 3', description: 'Description 3' }];
// Define a route
app.get('/', (req: Request, res: Response) => {
    res.send('Hello from Express!');
});

app.get('/friends', (req: Request, res: Response) => {
    res.send('sharon and ortal and meir!');
});

app.get('/posts', (req: Request, res: Response) => {
    res.json(posts);
});
// Start the server
const PORT = 3000;
app.listen(3000, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});