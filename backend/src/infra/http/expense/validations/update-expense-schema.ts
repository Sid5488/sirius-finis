import { celebrate, Joi } from "celebrate";

const updateExpenseSchema = celebrate({
  params: Joi.object().keys({
    id: Joi.string().required().messages({
      "string.empty": `"id" should be a type of 'text'`,
      "string.base": `"id" cannot be an empty field`,
      "any.required": `"id" is required`
    }),
  }),
  body: Joi.object().keys({
    price: Joi.number().messages({
      "number.empty": `"price" should be a type of 'text'`,
      "number.base": `"price" cannot be an empty field`,
      "any.required": `"price" is required`
    }),
    categoryId: Joi.string().messages({
      "string.empty": `"categoryId" should be a type of 'text'`,
      "string.base": `"categoryId" cannot be an empty field`,
      "any.required": `"categoryId" is required`
    })
  })
}, { abortEarly: false });

export { updateExpenseSchema };
