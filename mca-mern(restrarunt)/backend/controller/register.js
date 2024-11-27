import ErrorHandler from "../middlewares/error.js";
import { Users } from "../models/user.js";


const register_user = async (req, res, next) => {
  const { email,password } = req.body;
  if (!email || !password) {
    return next(new ErrorHandler("Please Fill Full Reservation Form!", 400));
  }

  try {
    await Users.create({ email,password });
    res.status(201).json({
      success: true,
      message: "Registeration Success",
    });
  } catch (error) {
    // Handle Mongoose validation errors
    if (error.name === 'ValidationError') {
      const validationErrors = Object.values(error.errors).map(err => err.message);
      return next(new ErrorHandler(validationErrors.join(', '), 400));
    }

    // Handle other errors
    return next(error);
  }
};


export default register_user;