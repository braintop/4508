import { Request, Response } from 'express';
import { BookModel } from '../models/BookModel';

export const createBook = async (req: Request, res: Response) => {
    console.log('role:', (req as any).role);//req.role 
    const { title, author, price, pages, category, instock } = req.body;
    if (!title || !author || !price || !pages || !category || !instock) {
        return res.status(400).json({ message: 'All fields are required' });
    }
    const book = await BookModel.create({ title, author, price, pages, category, instock });
    res.status(201).json(book);
}

export const getBooks = async (req: Request, res: Response) => {
    const books = await BookModel.find();
    res.status(200).json(books);
}

export const deleteBook = async (req: Request, res: Response) => {
    const { id } = req.params;
    const book = await BookModel.findByIdAndDelete(id);
    if (!book) {
        return res.status(404).json({ message: 'Book not found' });
    }
    res.status(200).json(book);
}

export const getBookById = async (req: Request, res: Response) => {
    const { id } = req.params;
    const book = await BookModel.findById(id);
    if (!book) {
        return res.status(404).json({ message: 'Book not found' });
    }
    res.status(200).json(book);
}
export const updateBook = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { title, author, price, pages, category, instock } = req.body;
    const book = await BookModel.findByIdAndUpdate(id, { title, author, price, pages, category, instock }, { new: true });
    if (!book) {
        return res.status(404).json({ message: 'Book not found' });
    }
    res.status(200).json(book);
}

export const getBooksByCategory = async (req: Request, res: Response) => {
    const { category } = req.params;
    const books = await BookModel.find({ category });
    if (!books) {
        return res.status(404).json({ message: 'Books not found' });
    }
    res.status(200).json(books);
}