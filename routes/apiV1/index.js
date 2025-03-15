import express from "express"
import userRoutes from "./userRoutes.js"

const router = express.Router()

// user routes
router.use("/users", userRoutes)

const apiV1 = router.get("/", (req, res) => {
    res.status(200).json({
        status: 200,
        message: "Medi Desc API V1"
    })
})

export default apiV1