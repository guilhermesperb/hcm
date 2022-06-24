import { ClockingData } from "../data/clocking-data";
import { ClockingRepository } from "../protocols/repository/clocking-repository";

export class PostgresCLockingRepository implements ClockingRepository{
    async add(data: ClockingData): Promise<ClockingData> {
        return {} as ClockingData
    }
}