import { ClockingData } from "../types/clocking-data";
import { ClockingRepository } from "../protocols/repository/clocking-repository";
import { Kafka, Producer } from "kafkajs";
import { v4 as uuidv4 } from 'uuid';

export class KafkaClockingRepository implements ClockingRepository{
    private kafka: Kafka;
    
    constructor(){
        this.kafka = new Kafka({ clientId: "hcm", brokers: ["kafka:9092"] })
    }
    
    async add(data: ClockingData): Promise<ClockingData> {
        const producer = this.kafka.producer()
        await producer.connect()
        try {
            const teste = await producer.send({
                topic: "hcm-register",
                messages: [
                    {
                        key: uuidv4(),
                        value: JSON.stringify(data)
                    },
                ],
            })
            return data as ClockingData
        } catch (err) {
            console.error("could not write message " + err)
        }
        return {} as ClockingData
    }
}