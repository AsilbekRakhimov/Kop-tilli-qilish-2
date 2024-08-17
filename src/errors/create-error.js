import { BaseError } from "./base-error.js";

export class CreateError extends BaseError{
    constructor(message){
        super()
        this.message = message
        this.name = "Create qilishda xatolik"
        this.status = 409
        this.isError = true
    }
}