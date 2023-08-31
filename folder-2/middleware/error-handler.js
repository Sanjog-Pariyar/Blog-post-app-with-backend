const errorHandlerMiddleWare = (err, req, res, send) => {
    return res.status(500).json({ errorMessage: 'Something is not right' })
}

module.exports = errorHandlerMiddleWare