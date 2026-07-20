"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
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
app.use(express_1.default.json());
app.get('/', (req, res) => {
    res.send('Hello from Express!');
});
app.get('/api/users', (req, res) => {
    res.json(users);
});
app.get('/api/users/:id', (req, res) => {
    const user = users.find((user) => user.id == Number(req.params.id));
    if (!user) {
        return res.status(404).json({ message: 'User not found' });
    }
    res.json(user);
});
app.post('/api/users', (req, res) => {
    if (!req.body.name) {
        return res.status(400).json({ message: 'Name is required' });
    }
    if (!req.body.email) {
        return res.status(400).json({ message: 'Email is required' });
    }
    const user = {
        id: users[users.length - 1].id + 1,
        name: req.body.name,
        email: req.body.email,
    };
    users.push(user);
    res.json(user);
});
app.delete('/api/users/:id', (req, res) => {
    const user = users.find((user) => user.id == Number(req.params.id));
    if (!user) {
        return res.status(404).json({ message: 'User not found' });
    }
    users = users.filter((user) => user.id != Number(req.params.id));
    res.json({ message: 'User deleted' });
});
app.put('/api/users/:id', (req, res) => {
    const user = users.find((user) => user.id == Number(req.params.id));
    if (!user) {
        return res.status(404).json({ message: 'User not found' });
    }
    user.name = req.body.name;
    user.email = req.body.email;
    res.json(user);
});
app.get('/api/books', (req, res) => {
    res.json(books);
});
app.get('/api/books/:id', (req, res) => {
    const book = books.find((book) => book.id == Number(req.params.id));
    if (!book) {
        return res.status(404).json({ message: 'Book not found' });
    }
    res.json(book);
});
app.post('/api/books', (req, res) => {
    if (!req.body.title) {
        return res.status(400).json({ message: 'Title is required' });
    }
    if (!req.body.author) {
        return res.status(400).json({ message: 'Author is required' });
    }
    if (!req.body.pages) {
        return res.status(400).json({ message: 'Pages is required' });
    }
    const book = {
        id: books[books.length - 1].id + 1,
        title: req.body.title,
        author: req.body.author,
        pages: req.body.pages,
    };
    books.push(book);
    res.json(book);
});
app.delete('/api/books/:id', (req, res) => {
    const book = books.find((book) => book.id == Number(req.params.id));
    if (!book) {
        return res.status(404).json({ message: 'Book not found' });
    }
    books = books.filter((book) => book.id != Number(req.params.id));
    res.json({ message: 'Book deleted' });
});
app.put('/api/books/:id', (req, res) => {
    const book = books.find((book) => book.id == Number(req.params.id));
    if (!book) {
        return res.status(404).json({ message: 'Book not found' });
    }
    book.title = req.body.title;
    book.author = req.body.author;
    book.pages = req.body.pages;
    res.json(book);
});
// Start the server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
