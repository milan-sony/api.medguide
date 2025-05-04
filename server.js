import express from "express"
import dotenv from "dotenv"
import routes from "./routes/index.js"
import bodyParser from "body-parser"
import cors from 'cors'

// config .env
dotenv.config()

// creates an express app
const app = express()

// cors
app.use(cors());

// body parser
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

// base URL
app.use("/", routes)

app.listen((process.env.PORT || 5000), () => {
    console.log(`\n🚀 Server listening on port: ${process.env.PORT || 5000}`)
})