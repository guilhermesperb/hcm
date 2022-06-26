import { kafkaConsumer } from './services/kafka-consumer';
import { legacyClockingSend } from './services/legacy-clocking';

kafkaConsumer(legacyClockingSend);