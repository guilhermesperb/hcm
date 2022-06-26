import { Validator } from "../protocols/validator/validator";
import { ValidationData } from "../types/validation-data";

export class ClockingValidator implements Validator{
    validate(data: any): ValidationData{
        // return {status: false, message: 'not implemented'}
        return {status: true, message: 'not implemented'}
    }
}