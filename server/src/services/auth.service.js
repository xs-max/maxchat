const jwt = require('jsonwebtoken');
const User = require('./../models/user.model');
const AppError = require('./../utils/appError');

class AuthService {
  signToken (id) {
      
    return jwt.sign({ id }, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRES_IN,
    });
  };

  createSendToken (user) {
    const token = this.signToken(user);

    user.password = undefined;

    return {
      status: "success",
      token,
      data: {
        user: user,
      },
    };

  };

  async signUp (data, next) {
    let user = await User.findOne({ email: data.email });
    if (user) next( new AppError("Email already exists", 400));
    const newUser = await User.create({
      name: data.name,
      email: data.email,
      password: data.password,
      role: data.role,
    });

    return this.createSendToken(newUser);
  };

  async signin (data, next){
    const { email, password } = data;

    // 1 check if email and password exists
    if (!email || !password) {
      return next(new AppError("Please provide email and password", 400));
    }

    //2 check if user exists and password is correct
    const user = await User.findOne({ email: email }).select("+password");
    if (!user || !(await user.correctPassword(password, user.password))) {
      return next(new AppError("Incorrect email or password", 401));
    }

    // 3 Send token
    return this.createSendToken(user);
  };

  
}


module.exports = new AuthService();