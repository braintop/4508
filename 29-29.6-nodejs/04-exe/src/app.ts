import express, { Request, Response } from 'express';
const app= express(); 
app.get('/', (req: Request, res: Response) => {
  res.send('Sharon and Meir!');
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});