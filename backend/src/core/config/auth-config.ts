import { env } from "@/env";

export default {
  secret: env.JWT_SECRET,
  expiresIn: env.EXPIRES_IN
};
