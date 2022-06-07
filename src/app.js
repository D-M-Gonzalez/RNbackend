import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import ProductsRoutes from './routes/productsRoutes';
import UserRoutes from './routes/userRoutes';
import MessageRoutes from './routes/messageRoutes';
import 'dotenv/config'

require('dotenv').config();
const app = express();
const corsOptions = {
    origin: false,
}

//Port settings
app.set('port',process.env.PORT);
app.set("view engine", "ejs");

//Middlewares used
app.use(cors(corsOptions));

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use(express.static('public')); 
app.use('/images',cors(corsOptions), express.static('images'));

app.use('/api/products',cors(corsOptions),ProductsRoutes); //Goes to products
app.use('/api/users',cors(corsOptions),UserRoutes); //Goes to users
app.use('/api/messages',cors(corsOptions),MessageRoutes); //Goes to messages

export default app;