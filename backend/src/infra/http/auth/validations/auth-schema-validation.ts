import { celebrate, Joi } from "celebrate";

const authSchema = celebrate({
  body: Joi.object().keys({
    email: Joi.string().max(100).required().email().messages({
      "string.empty": `"email" should be a type of 'text'`,
      "string.base": `"email" cannot be an empty field`,
      "string.max": `"email" have a maximum length of 100`,
      "any.required": `"email" is required`
    }),
    password: Joi.string().max(100).required().messages({
      "string.empty": `"password"  should be a type of 'text'`,
      "string.base": `"password" cannot be an empty field`,
      "string.max": `"password" have a maximum length of 100`,
      "any.required": `"password" is required`
    })
  })
}, { abortEarly: false });

export { authSchema };
