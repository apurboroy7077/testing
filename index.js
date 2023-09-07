let the_http = require("http");
let the_fs = require("fs");
let PORT = process.env.PORT || 5000;
let the_server = the_http.createServer((request, response) => {
  let file_server = (file_location, status_code) => {
    the_fs.readFile(file_location, (error, data) => {
      response.writeHead(status_code, { "Content-Type": "text/html" });
      response.write(data);
      response.end();
    });
  };
  if (request.url == "/") {
    file_server("files/index.html", 200);
  } else if (request.url == "/about") {
    file_server("files/about.html", 200);
  } else if (request.url == "/contact") {
    file_server("files/contact.html", 200);
  } else {
    file_server("files/error.html", 404);
  }
});
the_server.listen(PORT, () => {
  console.log(`Server is running successfully at http://localhost:${PORT}`);
});
