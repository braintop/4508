import express, { Request, Response, NextFunction } from 'express';
const app = express();
const PORT = 3000;

// Define a route
let users = [
    {
        id: 1,
        name: 'John Doe',
        email: 'john.doe@example.com',
    },
    {
        id: 2,
        name: 'Jane Doe',
        email: 'jane.doe@example.com',
    },
];

let books = [
    {
        id: 1,
        title: 'The Great Gatsby',
        author: 'F. Scott Fitzgerald',
        pages: 180,
    },

    {
        id: 2,
        title: '1984',
        author: 'George Orwell',
        pages: 328,
    },
];

app.use(express.json());
app.get('/', (req: Request, res: Response) => {
    res.send('Hello from Express!');
});

app.get('/api/users', (req: Request, res: Response) => {
    res.json(users);
});
app.get('/api/users/:id', (req: Request, res: Response) => {
    const user = users.find((user) => user.id == Number(req.params.id));
    if (!user) {
        return res.status(404).json({ message: 'User not found' });
    }
    res.json(user);
});

//(book)=>{book.id == Number(req.params.id)}
app.get('/api/books/:id/:page', (req: Request, res: Response) => {

    const book = books.find((book) => book.id == Number(req.params.id));
    if (!book) {
        return res.status(404).json({ message: 'Book not found' });
    }
    if (Number(req.params.page) > book.pages) {
        return res.status(404).json({ message: 'Page not found' });
    }
    res.json(book);
});


app.post('/api/users', (req: Request, res: Response) => {//{id:3}
    if (!req.body.name) {
        return res.status(400).json({ message: 'Name is required' });
    }
    if (!req.body.email) {
        return res.status(400).json({ message: 'Email is required' });
    }

    const user = {
        id: users[users.length-1].id + 1,
        name: req.body.name,
        email: req.body.email,
    };
    users.push(user);
    res.json(user);
});
app.delete('/api/users/:id', (req: Request, res: Response) => {
    const user = users.find((user) => user.id == Number(req.params.id));
    if (!user) {
        return res.status(404).json({ message: 'User not found' });
    }
    users = users.filter((user) => user.id != Number(req.params.id));
    res.json({ message: 'User deleted' });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
