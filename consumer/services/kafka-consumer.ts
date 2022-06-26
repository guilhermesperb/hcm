import { Kafka, EachMessagePayload } from "kafkajs";
import { legacyClockingSend } from './legacy-clocking';

export const kafkaConsumer = async (legacyClockingSender: any) => {
    const kafka: Kafka = new Kafka({clientId: 'hcm',  brokers: ["localhost:29092"]})
    const consumer = kafka.consumer({ groupId: 'hcm' })        
    
    await consumer.connect()
    await consumer.subscribe({ topic: 'hcm-register' })
    await consumer.run({
        eachMessage: async (payload: EachMessagePayload) => {
            // console.log(`received message: ${payload.message.value}`)
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