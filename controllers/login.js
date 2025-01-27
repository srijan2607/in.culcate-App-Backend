const User = require("../models/User");
const { StatusCodes } = require("http-status-codes");
const { BadRequestError, UnauthenticatedError } = require("../errors");

const login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    throw new BadRequestError("Email and password are required.");
  }

  const foundUser = await User.findOne({ email });
  if (!foundUser) {
    throw new UnauthenticatedError("Invalid email or password.");
  }

  const isPasswordCorrect = await foundUser.comparePassword(password);
  if (!isPasswordCorrect) {
    throw new UnauthenticatedError("Invalid email or password.");
  }

  const token = await foundUser.createJWT();
  res.status(StatusCodes.OK).json({ user: foundUser.getname(), token });
};

module.exports = login;