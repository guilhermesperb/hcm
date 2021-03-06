import { config } from 'dotenv';
config();

const environment = () => {
  return {
    PORT: process.env.PORT,
    KAFKA_HOST: process.env.KAFKA_HOST,
    KAFKA_ID: process.env.KAFKA_ID,
    KAFKA_TOPIC: process.env.KAFKA_TOPIC,
  }
}

export default environment();