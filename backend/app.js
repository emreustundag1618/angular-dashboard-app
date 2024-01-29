import express from "express";
import cors from "cors";
import usersRoutes from './routes/usersRoutes.js';
import productsRoutes from './routes/productsRoutes.js';

const app = express();
const port = 3030;

app.use(cors());
app.use(express.json());

// Users Routes
app.use('/api/users', usersRoutes);

// Products Routes
app.use('/api/products', productsRoutes);

app.listen(port, () => {
    console.log('App running on port:', port)
})