const mongoose = require('mongoose')

const connectDB = (url) => {
  return mongoose.connect(url, {
    // useNewUrlParser: true,
    // useCreateIndex: true, // deprecated, crashes if used
    // useFindAndModify: false, // deprecated, crashes if used
    // useUnifiedTopology: true,
  })
}

module.exports = connectDB
