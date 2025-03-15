import express from "express"
import { getMedicineInfo } from "../../controllers/userControllers.js"

const userRoutes = express.Router()

userRoutes.get("/getmedsinfo", getMedicineInfo)

export default userRoutes