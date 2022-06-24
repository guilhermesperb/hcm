import { Validator } from "../protocols/validator/validator";

export class ClockingValidator implements Validator{
    validate(data: any): boolean{
        return false
    }
}