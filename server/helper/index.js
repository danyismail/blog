const crypto = require('crypto')

class Helper {
    static auth(password) {
        return crypto.createHmac('sha256','5tr0ng').update(password).digest('hex')
    }

    static generateToken(email) {
        return jwt.sign( email, 'mustbesecret')
    }
}

module.exports = Helper

