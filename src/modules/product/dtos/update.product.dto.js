import Joi from "joi";

export const updateProductSchema = Joi.object({
  name: Joi.object().required(),
  cost: Joi.string(),
  count: Joi.string(),
  categoryId: Joi.string().required()
});
