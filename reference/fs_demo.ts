import fs from 'fs';
import path from 'path';

// Create folder
fs.mkdir(path.join(__dirname, '/test'), {}, err => {
    if (err) throw err;
    console.log('Folder Created...');
});

// Create and write to file
fs.writeFile(path.join(__dirname, '/test', 'hello.txt'), "Hello world \n", err => {
    if (err) throw err;
    console.log('File written to...');

    // File Append 
    fs.appendFile(path.join(__dirname, '/test', 'hello.txt'), " I love Node.ts \n", err => {
        if (err) throw err;
        console.log('File written to...');
    });
});

// Read file
fs.readFile(path.join(__dirname, '/test', "hello.txt"), "utf8", (err, data) => {
    if (err) throw err;
    console.log(data);
});

// Rename file
fs.rename(path.join(__dirname, '/test', "hello.txt"), path.join(__dirname, '/test', "helloworld.txt"), err => {
    if (err) throw err;
    console.log("File renamed");
});