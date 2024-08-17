import { ValidationError } from "../errors/validation-error.js";

export const validationMiddlewar = (schema) => {
  return (req, _, next) => {
    const data = req.body;
    const { value, error } = schema.validate(data);
    if (error) {
        throw new ValidationError("Validation error")
    }
    req.body = value;
    next();
  };
};
