// https://blog.alexanderkaran.com/errors-in-typescript
import { CustomError } from "./custom-error"
import { ValidationError } from 'express-validator'

export class RequestValidationError extends CustomError {
  statusCode = 400
  // If you omit public, TypeScript will not automatically create a property for the parameter. 
  constructor(public errors: ValidationError[]) {
    super()

    Object.setPrototypeOf(this, RequestValidationError.prototype)
  }
  serializeErrors() {
    return this.errors.map((err) => {
      if (err.type === 'field') {
        return { message: err.msg, field: err.path };
      }
      return { message: err.msg };
    });
  }
}