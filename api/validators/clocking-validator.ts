import { Validator } from "../protocols/validator/validator";
import { ValidationData } from "../types/validation-data";

export class ClockingValidator implements Validator{
    validate(data: any): ValidationData{
        if (!data.includeAt) {
            return {status: false, message: 'includeAt missing'}
        }
        if (!data.employeeId) {
            return {status: false, message: 'employeeId missing'}
        }
        if (!data.employerId) {
            return {status: false, message: 'employerId missing'}
        }

        return {status: true, message: 'ok'}
    }
}