require("dotenv").config();

//async errors

const express = require("express");
const app = express();
const connectDB = require('./db/connect')
const productsRouter = require('./routes/products')

const notFoundMiddleWare = require("./middleware/not-found");
const errorMiddleWare = require("./middleware/error-handler");



//middleware
app.use(express.json());

//routes
app.get("/", (req, res) => {
  res.send('<h1>Store API</h1><a href="/api/v1/products">products route</a>');
});

//products route
app.use("/api/v1/products", productsRouter)

app.use(notFoundMiddleWare)
app.use(errorMiddleWare)

const port = process.env.PORT  || 3000
const host = process.env.HOST

const start = async () => {
    try {
        //connect DB
        await connectDB(process.env.MONGO_URI)
        app.listen(port, console.log(`Server is listening on ${host} port ${port}...`))
    } catch (error) {
        console.log(error)
    }
}

start()