import EventEmitter from 'events';
import { v4 as uuidv4 } from 'uuid';

class Logger extends EventEmitter {
    log(msg: string) {
        // Call event with a message and a new UUID v4
        this.emit('message', { id: uuidv4(), msg });
    }
}

// Logger is a class so we need to instantiate it.
const logger = new Logger;

logger.on('message', (data) => console.log('Called Listiner:', data));

logger.log('Hello World');
