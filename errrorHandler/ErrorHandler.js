const erorrHandler = (err, req, res, next) => {
    const error = err.message || 'Internal Server Error'
    res.status(500).send(error)
}
module.exports = {
    erorrHandler
}