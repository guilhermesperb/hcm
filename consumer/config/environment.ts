import { config } from 'dotenv';
config();

const environment = () => {
  return {
    LEGACY_CLOCKING_URL: process.env.LEGACY_CLOCKING_URL,
    KAFKA_HOST: process.env.KAFKA_HOST,
    KAFKA_ID: process.env.KAFKA_ID,
    KAFKA_TOPIC: process.env.KAFKA_TOPIC,
  }
}

export default environment();