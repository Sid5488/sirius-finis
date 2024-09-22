import { celebrate, Joi } from "celebrate";

const createExpenseSchema = celebrate({
  body: Joi.object().keys({
    price: Joi.number().required().messages({
      "number.empty": `"price" should be a type of 'text'`,
      "number.base": `"price" cannot be an empty field`,
      "any.required": `"price" is required`
    }),
    categoryId: Joi.string().required().messages({
      "string.empty": `"categoryId" should be a type of 'text'`,
      "string.base": `"categoryId" cannot be an empty field`,
      "any.required": `"categoryId" is required`
    }),
    userId: Joi.string().required().messages({
      "string.empty": `"userId" should be a type of 'text'`,
      "string.base": `"userId" cannot be an empty field`,
      "any.required": `"userId" is required`
    }),
  })
}, { abortEarly: false });

export { createExpenseSchema };
