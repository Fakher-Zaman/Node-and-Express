require('dotenv').config();
// async error handler
require('express-async-errors');

const express = require('express');
const app = express();

const notFoundMiddleware = require('./middleware/not-found');
const errorMiddleware = require('./middleware/error-handler');

const connectDB = require('./db/connect');
const productsRouter = require('./routes/products');

// middleware
app.use(express.json());

// routes
app.get('/', (req, res) => {
    res.send('<h1>Store API</h1><a href="/api/v1/products">products route</a>');
});

app.use('/api/v1/products', productsRouter);

// products route


app.use(notFoundMiddleware);
app.use(errorMiddleware);

// connect to db
const port = process.env.PORT || 3000;

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI);
        app.listen(port, console.log(`Server is listening on port ${port}...`));
    } catch (error) {
        console.log(error);
    }
}
start();