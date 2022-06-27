import { Kafka, EachMessagePayload } from "kafkajs";
import environment from "../config/environment";

export const kafkaConsumer = async (legacyClockingSender: any) => {
    const kafka: Kafka = new Kafka({
        clientId: environment.KAFKA_ID,
        brokers: [environment.KAFKA_HOST || ''],
        retry: {
            maxRetryTime: 30000,
            initialRetryTime: 300,
            retries: 12
        }
    })
    const consumer = kafka.consumer({ groupId: environment.KAFKA_ID || '' })
    
    await consumer.connect()
    await consumer.subscribe({ topic: environment.KAFKA_TOPIC || '' })
    await consumer.run({
        eachMessage: async (payload: EachMessagePayload) => {
            try {
                legacyClockingSender(payload.message.value)
            } catch (e) {
                if (e) {
                    consumer.pause([{ topic: environment.KAFKA_TOPIC || '' }])
                    setTimeout(() => {
                        consumer.resume([{ topic: environment.KAFKA_TOPIC || '' }])
                    }, 1000)
                }
    
                throw e
            }
        },
    })
}