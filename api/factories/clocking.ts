import { ClockingController } from "../controllers/clockiing"
import { Controller } from "../protocols/controller/controller"
import { PostgresCLockingRepository } from "../repositories/postgres-clocking-repository"
import { RestCLockingRepository } from "../repositories/rest-legacy-clocking-repository"
import { ClockingValidator } from "../validators/clocking-validator"

export const makeClockingController = (): Controller => {
    const clockingRepository = new PostgresCLockingRepository();
    const legacyClockingRepository = new RestCLockingRepository();
    const clockingValidator = new ClockingValidator();

    const clockingController = new ClockingController(
        clockingRepository,
        legacyClockingRepository,
        clockingValidator
    );

    return clockingController;
}