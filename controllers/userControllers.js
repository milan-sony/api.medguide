// search medicine
export const getMedicineInfo = (req, res) => {
    try {
        res.status(200).json({
            status: 200,
            message: "Med info"
        })

    } catch (error) {
        console.error("Error in getting med info, ", error.message)
    }
}
