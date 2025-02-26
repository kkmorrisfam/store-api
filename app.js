require("dotenv").config();

//async errors

const express = require("express");
const app = express();
const notFoundMiddleWare = require("./middleware/not-found");
const errorMiddleWare = require("./middleware/error-handler");
const notFound = require("./middleware/not-found");

//middleware
app.use(express.json());

//routes
app.get("/", (req, res) => {
  res.send('<h1>Store API</h1><a href="/api/v1/products">products route</a>');
});

//products route

app.use(notFoundMiddleWare)
app.use(errorMiddleWare)

const port = process.env.PORT  || 3000
const host = process.env.HOST

const start = async () => {
    try {
        //connect DB
        app.listen(port, console.log(`Server is listening on ${host} port ${port}`))
    } catch (error) {
        console.log(error)
    }
}

start()