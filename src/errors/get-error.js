import { BaseError } from "./base-error.js";

export class GetDataError extends BaseError{
    constructor(message){
        super()
        this.status = 400
        this.message = message
        this.name = "Get data error"
    }
}