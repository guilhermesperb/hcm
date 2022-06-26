import { ValidationData } from "../../types/validation-data";

export interface Validator<T = any> {
  validate: (data: T) => ValidationData
}