module.exports = (res, statusCode, data) => {
    console.log(data)
    res.status(statusCode).json({ data })
}

