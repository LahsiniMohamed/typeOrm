import 'reflect-metadata';
import express from 'express';
import productRoutes from './src/routes/product.routes';
import { createConnection } from 'typeorm';


const app = express();
createConnection();

app.use(express.json());

app.get('/',(req,res)=>{
    res.send('hello world')
})

//route
app.use(productRoutes);

const port = 5000;  
app.listen(port, ()=> {
    console.log(`server is running on http://localhost:${port}/`);
})