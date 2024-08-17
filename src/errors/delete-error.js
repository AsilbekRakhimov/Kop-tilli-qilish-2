import { BaseError } from "./base-error.js";

export class DeleteError extends BaseError{
    constructor(message){
        super()
        this.message = message
        this.name = "Delete error"
        this.status = 409
    }
}