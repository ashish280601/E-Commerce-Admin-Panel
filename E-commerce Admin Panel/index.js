// importing an express library
import express from "express"
// importing an router file
import router from "./router.js";
// import an library to conver the body data into json format
import bodyParser from "body-parser";
// importing an env library to creating an environment variable
import "./env.js";
import ConnectToMongoose from "./src/config/mogooseConfig.js";

const server = express();
// creating an unqiue port for server to rnu on it.
const port = process.env.PORT;
server.use(bodyParser.json({ limit: "5000mb" }));
server.use(express.json());
server.use(express.urlencoded({ extended: true }));

server.use(router);

server.listen(port, async() => {
    try {
        console.log(`Server is listening on port ${port}`);
    await ConnectToMongoose();
    } catch (error) {
        console.log("Error While Connecting to database");
    }
})