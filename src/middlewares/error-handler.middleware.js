export const ErrorHandlerMiddleware = (err, _, res, __) => {
    if (err.isError) {
        res.status(err.status).send({
            message: err.message,
            name: err.name
        })
        return;
    }

    res.status(500).send({
        message:"Error with server"
    })
}