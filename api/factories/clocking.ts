import { ClockingController } from "../controllers/clockiing"
import { Controller } from "../protocols/controller/controller"
import { KafkaClockingRepository } from "../repositories/kafka-clocking-repository"
// import { RestCLockingRepository } from "../repositories/rest-legacy-clocking-repository"
import { ClockingValidator } from "../validators/clocking-validator"

export const makeClockingController = (): Controller => {
    const clockingRepository = new KafkaClockingRepository();
    // const legacyClockingRepository = new RestCLockingRepository();
    const clockingValidator = new ClockingValidator();

    const clockingController = new ClockingController(
        clockingRepository,
        // legacyClockingRepository,
        clockingValidator
    );

    return clockingController;
}