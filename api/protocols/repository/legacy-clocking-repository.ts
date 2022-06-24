import { ClockingData } from "../../types/clocking-data";
import { LegacyClockingResponseData } from "../../types/legacy-clocking-response-data";

export interface LegacyClockingRepository<T = any> {
  send: (data: ClockingData) => Promise<LegacyClockingResponseData | null>
}