import express from "express"
import { medicineInfo } from "../../controllers/userControllers.js"

const searchRoute = express.Router()

// search routes
searchRoute.post("/getmedinfos", medicineInfo)


export default searchRoute