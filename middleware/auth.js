import jwt from 'jsonwebtoken';
import { UnAuthenticatedError } from '../errors/index.js';

const auth = async (req, res, next) => {
  const token = req.cookies.token;
  if (!token) {
    throw new UnAuthenticatedError('Authentication Invalid');
  }
  try {
    console.log("reach2",token);
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    console.log("reach3",payload);
    const testUser = payload.userId === '63628d5d178e918562ef9ce8';
    req.user = { userId: payload.userId, testUser };
    next();
  } catch (error) {
    throw new UnAuthenticatedError('Authentication Invalid');
  }
};

export default auth;
