//dynamically add values to database
require('dotenv').config()

const connectDB = require('./db/connect')
const Product = require('./models/product')

const jsonProducts = require('./products.json')

//connect to DB so we can add data
const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        await Product.deleteMany()  //delete all products, start over
        await Product.create(jsonProducts)
        process.exit(0)
        console.log('Success!!!!')
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}

start()