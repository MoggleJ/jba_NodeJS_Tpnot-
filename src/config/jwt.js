const jwt = require('jsonwebtoken');
require('dotenv').config();

class JWTService {
    // Générer un token JWT
    static generateToken(payload, expiresIn = JWT_EXPIRES_IN) {
        return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn });
    }

    // Vérifier un token JWT
    static verifyToken(token) {
        try {
            return jwt.verify(token, process.env.JWT_SECRET);
        } catch (error) {
            throw new Error('Token invalide ou expiré');
        }
    }
}

module.exports = JWTService;
