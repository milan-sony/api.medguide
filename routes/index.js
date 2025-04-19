import express from "express"
import searchRoute from "./apiV1/search.js"

const router = express.Router()

router.use("/api/v1", searchRoute)

const routes = router.use("/api", (req, res) => {
    res.status(200).json({
        status: 200,
        message: "API works properly"
    })
})

export default routes;