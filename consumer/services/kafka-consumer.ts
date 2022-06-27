import { Kafka, EachMessagePayload } from "kafkajs";

export const kafkaConsumer = async (legacyClockingSender: any) => {
    const kafka: Kafka = new Kafka({
        clientId: 'hcm', 
        // brokers: ["localhost:29092"],
        brokers: ["kafka:9092"],
        retry: {
            maxRetryTime: 30000,
            initialRetryTime: 300,
            retries: 12
        }
    })
    const consumer = kafka.consumer({ groupId: 'hcm' })        
    
    await consumer.connect()
    await consumer.subscribe({ topic: 'hcm-register' })
    await consumer.run({
        eachMessage: async (payload: EachMessagePayload) => {
            try {
                legacyClockingSender(payload.message.value)
            } catch (e) {
                if (e) {
                    consumer.pause([{ topic: 'hcm-register' }])
                    setTimeout(() => {
                        consumer.resume([{ topic: 'hcm-register' }])
                    }, 1000)
                }
    
                throw e
            }
        },
    })
}