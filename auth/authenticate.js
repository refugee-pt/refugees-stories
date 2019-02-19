const jwt = require("jsonwebtoken");

const jwtKey = process.env.JWT_SECRET;

module.exports = {
    authenticate,
    generateToken
};

function authenticate(req, res, next) {
    const token = req.get("Authorization");
    if (token) {
        jwt.verify(token, jwtKey, (err, decoded) => {
            if(err != null){
                return res.status(401).json({
                    error: err.message
                })
            }
            
            req.decoded = decoded;

            next()
        });
    } else {
        return res.status(401).json({
            error: "No token"
        });
    }
}

function generateToken(user) {
    const payload = {
        username: user.username
    };
    const options = {
        expiresIn: "1h",
        jwtid: "12345",
       
    }
    return jwt.sign(payload, jwtKey, options);
}