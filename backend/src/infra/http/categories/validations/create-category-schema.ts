import { celebrate, Joi } from "celebrate";

const createCategorySchema = celebrate({
  body: Joi.object().keys({
    name: Joi.string().max(33).required().messages({
      "string.empty": `"name" should be a type of 'text'`,
      "strign.base": `"name" cannot be an empty field`,
      "string.max": `"name" have a maximum length of 33`,
      "any.required": `"name" is required`
    }),
  })
}, { abortEarly: false });

export { createCategorySchema };
