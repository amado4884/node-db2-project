const express = require("express");
const server = express();
const PORT = 5000;
const cars = require("./routes/cars");

server.use(express.json());
server.use("/api/cars", cars);

server.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});
