import os, { freemem } from 'os';

// Platform 
console.log(os.platform());

// CPU Architecture 
console.log(os.arch());

// CPU Core Info
console.log(os.cpus().length);

// Free Memory
console.log(os.freemem());

// Total Memory
console.log(os.totalmem());

// Home dir
console.log(os.homedir());

// Uptime 
console.log(os.uptime());

