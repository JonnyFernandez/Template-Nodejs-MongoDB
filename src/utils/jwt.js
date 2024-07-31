const jwt = require('jsonwebtoken')
require('dotenv').config()
const { TOKEN_SECRET } = process.env;

module.exports = {

    createAccesToken: (payload) => {
        return new Promise((resolve, reject) => {
            jwt.sign(
                payload,
                TOKEN_SECRET,
                // { expiresIn: "1m" },
                { expiresIn: "1d" },
                (error, token) => {
                    if (error) reject(error)
                    resolve(token)
                }
            )
        });
    },
    refreshAccesToken: (payload) => {
        return new Promise((resolve, reject) => {
            jwt.sign(
                payload,
                TOKEN_SECRET,
                { expiresIn: "1m" },
                // { expiresIn: "1d" },
                (error, token) => {
                    if (error) reject(error)
                    resolve(token)
                }
            )
        });
    }

}

