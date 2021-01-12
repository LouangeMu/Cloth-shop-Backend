import express from 'express';
import AuthRoute from './auth.route';
import ProductRoute from './product.route'



const app = express();


app.use('/api/auth', AuthRoute);
app.use('/api/product', ProductRoute)


export default app;
