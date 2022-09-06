const express = require("express");
const app = express();

const cors = require('cors')
app.use(cors()) 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

require("./server/config/mongoose.config")

const petRoutes = require("./server/routes/pet.routes");
petRoutes(app);

const server=app.listen(8000, () => console.log("Our application is running on port 8000"));

 
// To initialize the socket, we need to
// invoke the socket.io library
// and pass it our Express server
const io = require('socket.io')(server, { cors: true });


io.on("connection" , socket => { // connection is event , required that we must have before we can create our own event listeners  
  //every client have his own socket 
  socket.emit("welcome" , "welcome client !" );
 
});
