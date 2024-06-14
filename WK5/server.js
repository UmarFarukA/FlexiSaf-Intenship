// Built-in modules
const http = require('http');
const fs = require('fs');
const path = require('path');

// const uc = require("upper-case")

// Importing user defined modules
const my_date = require("./utils");
console.log(my_date.date())

// A variable that store the port number
const port = 8080;

// Asynchronous file Operations

// Creating a Directory for storing files
// fs.mkdir("./files", (err) => {
//     if (err) console.log(`Error in creating directory: ${err.message}`);
// });

// Writing content to file
// fs.writeFile("./files/first.txt", "This is the content of the file", (err) => {
//     if (err) console.log(`Error in creating file. ${err.message}`)
// });

// Reading content to file
// fs.readFile("./files/first.txt", {encoding: "utf-8"}, (err, data) => {
//     if (err) {
//         console.log('Error reading content of file')
//     } else {
//         console.log(data)
//     }
// });


// Synchronous File Operation
fs.mkdir("./Syncfiles", (err) => {
    if (err) console.log(`Error in creating directory: ${err.message}`);
});

// // Async write operation
try {
    fs.writeFileSync("./Syncfiles/sync_file.txt", "This is synchronous file Operations");
    console.log("Data successfully written to file")

    console.log("\n");

    const readData = fs.readFileSync("./Syncfiles/sync_file.txt", {encoding: "utf-8"});
    console.log(`Data Successfuully read \n ${readData}`);

} catch (error) {
    
}


console.log("\n")

// Creating the server
server = http.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('Welcome to the world of Node JS');
    res.end();
});


// Listening to the server via the port number
server.listen(port, function(){
    console.log(`Server started at port ${port}`)
})