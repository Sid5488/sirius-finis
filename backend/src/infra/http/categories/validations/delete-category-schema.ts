import { celebrate, Joi } from "celebrate";

const deleteCategorySchema = celebrate({
  params: Joi.object().keys({
    id: Joi.string().required().messages({
      "string.empty": `"id" should be a type of 'text'`,
      "strign.base": `"id" cannot be an empty field`,
      "any.required": `"id" is required`
    }),
  })
}, { abortEarly: false });

export { deleteCategorySchema };
