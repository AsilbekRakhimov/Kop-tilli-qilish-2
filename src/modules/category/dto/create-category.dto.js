import Joi from "joi";
export const createCategorySchema = Joi.object({
    name:Joi.object(),
    description: Joi.object()
})