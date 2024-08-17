import Joi from "joi";
export const updateCategorySchema = Joi.object({
  name: Joi.object(),
  description: Joi.object(),
});
