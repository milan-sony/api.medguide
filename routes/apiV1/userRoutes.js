import express from "express"
import { medicineInfo } from "../../controllers/userControllers.js"

const userRoutes = express.Router()

userRoutes.post("/getmedsinfo", medicineInfo)

export default userRoutes