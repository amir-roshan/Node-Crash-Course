import http from 'http';

//Create server object
http.createServer((reg, res) => {
    // Write response
    res.write('Hello World');
    res.end();
}).listen(5000, () => console.log("Server is running..."));

// Press CTRL C to stop the server from running