import { ClockingData } from "../../types/clocking-data";

export interface ClockingRepository<T = any> {
  add: (data: ClockingData) => Promise<ClockingData>
}