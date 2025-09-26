const http = require("http");

const hostname = "localhost";
const port = 3000;

const server = http.createServer((req, res) => {
  if (req.url === "/json") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.end(
      JSON.stringify({
        message: "Hello AI Backend",
      })
    );
  } else {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.end("AI Backend Ready 🚀");
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running on http://${hostname}:${port}`);
});
