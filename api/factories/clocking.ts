import { ClockingController } from "../controllers/clockiing"
import { Controller } from "../protocols/controller/controller"
import { KafkaClockingRepository } from "../repositories/kafka-clocking-repository"
import { ClockingValidator } from "../validators/clocking-validator"

export const makeClockingController = (): Controller => {
    const clockingRepository = new KafkaClockingRepository();
    const clockingValidator = new ClockingValidator();

    const clockingController = new ClockingController(
        clockingRepository,
        clockingValidator
    );

    return clockingController;
}