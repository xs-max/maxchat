const AuthService = require("../services/auth.service");

class AuthCtrl {

    async signup (req, res, next) {
        console.log(process.env.NODE_ENV);
        const result = await AuthService.signUp(req.body, next);
        res.status(201).json({
            result
        })
    }

    async signin (req, res, next) {
        const result = await AuthService.signin(req.body, next);
        console.log(result);
        res.status(200).json({
          result,
        });
    }
    


}

module.exports = new AuthCtrl();