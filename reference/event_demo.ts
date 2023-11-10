import EventEmitter from "events";

// Create class
class MyEmittor extends EventEmitter { }

// Init object
const myEmittor = new MyEmittor();

// Event listener
myEmittor.on('event', () => { console.log("Event fired"); });

// Init event
myEmittor.emit("event");