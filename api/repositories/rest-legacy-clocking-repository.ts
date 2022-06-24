import { ClockingData } from "../types/clocking-data";
import { LegacyClockingResponseData } from "../types/legacy-clocking-response-data";
import { LegacyClockingRepository } from "../protocols/repository/legacy-clocking-repository";
import axios, { Axios } from "axios";
import environment from "../config/environment";

export class RestCLockingRepository implements LegacyClockingRepository{
    private httpClient: Axios;
    constructor() {    
        this.httpClient = axios.create({
            baseURL: environment.LEGACY_CLOCKING_URL
        });
    }

    async send(data: ClockingData): Promise<LegacyClockingResponseData | null> {
        try {
            return await this.httpClient.post('wwwwwwwwwwwwwwww', data);  
          } catch (error) {
            return null;
          }
        // return {} as LegacyClockingResponseData;
    }
}