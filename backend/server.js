const express = require("express");
const dotenv = require("dotenv").config();
const colors = require("colors")
const routes = require("./routes/goalRoutes");
const connectDB = require("./config/db")
const {errorHandler} = require("./middleware/errorMiddleware")

const port = process.env.PORT || 5000;

const app = express();

connectDB();
app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use('/api/goals', routes)
app.use(errorHandler)

app.listen(port, () => {
   console.log(`Server started on port ${port}`);
})