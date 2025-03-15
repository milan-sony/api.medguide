import express from "express"
import apiV1 from "./apiV1/index.js"

const router = express.Router()

router.use("/api/v1", apiV1)

const routes = router.use("/api", (req, res) => {
    res.status(200).json({
        status: 200,
        message: "API works properly"
    })
})

export default routes;