import { ClockingData } from "../types/clocking-data";
import { ClockingRepository } from "../protocols/repository/clocking-repository";
import { Kafka, Producer } from "kafkajs";

export class KafkaClockingRepository implements ClockingRepository{
    private kafka: Kafka;
    
    constructor(){
        this.kafka = new Kafka({ clientId: "hcm", brokers: ["kafka:9092"] })
    }
    
    async add(data: ClockingData): Promise<ClockingData> {
        const producer = this.kafka.producer()
        await producer.connect()
        console.log('kafka repository here')
        console.log(data)
console.log('producer')
console.log(producer)
    try {
        const teste = await producer.send({
            topic: "hcm-register",
            messages: [
                {
                    key: "1",
                    value: JSON.stringify(data)
                },
            ],
        })
        console.log("kafka answer")
        console.log(teste)
    } catch (err) {
        console.error("could not write message " + err)
    }
        return {} as ClockingData
    }
}

// //ka cluster ID 'Z-DI4aYMTEKpaZouJDDrkA'


// // import the `Kafka` instance from the kafkajs library


// // the client ID lets kafka know who's producing the messages
// const clientId = "my-app"
// // we can define the list of brokers in the cluster
// const brokers = ["localhost:9092"]
// // this is the topic to which we want to write messages
// const topic = "message-log"

// // initialize a new kafka client and initialize a producer from it

//soasi3IISKua4an4uda9NQ