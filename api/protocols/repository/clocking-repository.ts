import { ClockingData } from "../../data/clocking-data";

export interface ClockingRepository<T = any> {
  add: (data: ClockingData) => Promise<ClockingData>
}