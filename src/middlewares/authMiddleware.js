const jwt = require("jsonwebtoken");
require("dotenv").config();
const { TOKEN_SECRET } = process.env;

module.exports = {
    validateSchema: (schema) => (req, res, next) => {
        try {
            schema.parse(req.body)
            next()
        } catch (error) {
            return res.status(400).json({ error: error.errors.map(error => error.message) })
        }
    },
    authRequire: (req, res, next) => {
        const { token } = req.cookies;
        try {
            if (!token)
                return res.status(401).json({ error: "Unauthorized/Not token" });

            jwt.verify(token, TOKEN_SECRET, (err, user) => {
                if (err) return res.status(403).json({ error: "Invalid Token" });
                req.user = user;
            });
            next();
        } catch (error) {
            console.log(error);
        }
    },
}