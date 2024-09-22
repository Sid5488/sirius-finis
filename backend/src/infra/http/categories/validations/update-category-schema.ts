import { celebrate, Joi } from "celebrate";

const updateCategorySchema = celebrate({
  params: Joi.object().keys({
    id: Joi.string().required().messages({
      "string.empty": `"id" should be a type of 'text'`,
      "string.base": `"id" cannot be an empty field`,
      "any.required": `"id" is required`
    }),
  }),
  body: Joi.object().keys({
    name: Joi.string().max(33).required().messages({
      "string.empty": `"name" should be a type of 'text'`,
      "string.base": `"name" cannot be an empty field`,
      "string.max": `"name" have a maximum length of 33`,
      "any.required": `"name" is required`
    }),
  })
}, { abortEarly: false });

export { updateCategorySchema };
