const http = require("http");

const server = http.createServer((req, res) => {
  const pathName = req.url;

  if (pathName === "/" || pathName === "/overview") {
    res.end("This is the OVERVIEW");
  } else if (pathName === "/product") {
    res.end("This is the PRODUCT");
  } else {
    res.writeHead(404, {
      "Content-Type": "text/html",
      "my-own-header": "hello world!",
    });
    res.end("<h1>Page not found</h1>");
  }
});

server.listen(3000, () => {
  console.log("Listening to requests on port 3000");
});
