const http = require("http");
const fs = require('fs');

const hostname = '127.0.0.1';
const port = 3000;

// Defines a response want to give to the person making a request to our web server
const server = http.createServer((req, res) => {
  try {
    const data = fs.readFileSync('users.json', 'utf8');
    console.log(data)
  // request, response
  res.statusCode = 200; //Status Code on response
  res.setHeader("Content-Type", "text/json"); //Header on response. Response type is text/plain.
  res.end(data);
  } catch(err) {
    console.log('error', err.message)
  }
});

// Listens for a request. 3000 is typical for testing on the web. 127.0.0.1 is our host name which is our local machine.
// Then a function to invoke once the server is running.
server.listen(port, hostname, () => {
  console.log(`Server running on http://${hostname}:${port}`);
});
