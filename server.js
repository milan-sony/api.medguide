import express from "express"

// creates an express app
const app = express()

app.listen((process.env.PORT || 5000), () => {
    console.log(`\n🚀 Server listening on port: ${process.env.PORT || 5000}`)
})