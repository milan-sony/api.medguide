import express from "express"

const router = express.Router()

const apiV1 = router.get("/", (req, res) => {
    res.status(200).json({
        status: 200,
        message: "Medi Desc API V1"
    })
})

export default apiV1