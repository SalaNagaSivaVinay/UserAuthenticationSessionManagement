const errorHandler = (err, req, res, next) => {
    console.error(`[Error]: ${err.message}`);

    // Handle specific error types
    if (err.name === 'ValidationError') {
        return res.status(400).json({ error: err.message });
    }

    if (err.name === 'MongoServerError' && err.code === 11000) {
        return res.status(409).json({ error: 'Duplicate entry detected' });
    }

    if (err.name === 'JsonWebTokenError') {
        return res.status(401).json({ error: 'Invalid token, authorization denied' });
    }

    // Default to server error
    res.status(500).json({ error: 'Internal Server Error' });
};

module.exports = errorHandler;
