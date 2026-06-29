import express, { Request, Response } from 'express';
const app= express(); 
app.get('/', (req: Request, res: Response) => {
  res.send('Hello, World!');
});

app.get('/firstname', (req: Request, res: Response) => {
    res.send('Hello, Asaf!');
  });

app.get('/students', (req: Request, res: Response) => {
    res.send('Hello, Sharon elad!');
});

app.get('/home', (req: Request, res: Response) => {
    res.send('Hello, Home!');
});
//100.0.167.0  
//120.0.0.1:3000

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});