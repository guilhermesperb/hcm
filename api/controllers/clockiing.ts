import { ClockingData } from "../types/clocking-data";
import { Controller } from "../protocols/controller/controller";
import { HttpRequest, HttpResponse, ok, badRequest } from "../protocols/http/http";
import { ClockingRepository } from "../protocols/repository/clocking-repository"
import { LegacyClockingRepository } from "../protocols/repository/legacy-clocking-repository"
import { Validator } from "../protocols/validator/validator";
import { ValidationData } from "../types/validation-data";

export class ClockingController implements Controller{
    constructor(
        private readonly clockingRepository: ClockingRepository,
        // private readonly legacyClockingRepository: LegacyClockingRepository,
        private readonly validator: Validator
    ){}
    
    async handle(request: HttpRequest): Promise<HttpResponse> {
        const validation: ValidationData = this.validator.validate(request.body);
        if (!validation.status){
            return badRequest({name: 'error', 'message': validation.message})
        }

        this.clockingRepository.add(request.body as ClockingData);
        // this.legacyClockingRepository.send(request.body as ClockingData)
        return await ok({});

    }
}