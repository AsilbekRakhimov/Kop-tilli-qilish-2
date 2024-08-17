import { BaseError } from "./base-error.js";

export class UpdateError extends BaseError{
    constructor(message){
        super()
        this.message = message
        this.status = 409
        this.name = "Update error"
    }
}