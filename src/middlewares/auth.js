import { verifyJWT } from "../utils/jwt.js";

export default async function authorize(req, res, next) {
  const authorizationHeader = req.headers.authorization;

  if (!authorizationHeader) {
    return res
      .status(401)
      .json({ message: "Unauthorized to access private zone." });
  }

  const accessToken = authorizationHeader.split(" ")[1];

  try {
    const user = await verifyJWT(accessToken);
    req.user = user;
    next();
  } catch (error) {
    return res.status(401).json(error.message);
  }
}
