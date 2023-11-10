import Logger from "./logger";

// Logger is a class so we need to instantiate it.
const logger = new Logger;

logger.on('message', (data) => console.log('Called Listiner:', data));

logger.log('Hello World');