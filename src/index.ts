import * as dotenv from "dotenv";
import "reflect-metadata";
import { createConnection } from "typeorm";
import * as express from "express";
import * as bodyParser from "body-parser";
// import { Routes } from "./routes";
import { User } from "./entity/User";
import { Photo } from "./entity/Photo";
import router from "./routes/route";

dotenv.config({ path: "./.env" });

const server = express();

server.use(express.json());
server.use(bodyParser.json());
server.use("/", router);


// Creates connection to the database
createConnection({
  type: "postgres",
  host: process.env.PGHOST,
  port: parseInt(process.env.PGPORT, 10),
  username: process.env.PGUSERNAME,
  password: process.env.PGPASSWORD,
  database: process.env.PGDATABASE,
  entities: [User, Photo],
  // sync only for dev mode
  synchronize: true,
})
  .then((connection) => {
    console.log("TypeORM connected to socialmediaDB.");
  })
  .catch((error) => console.log(error));

// Starts the server
server.listen(process.env.SERVER_PORT, () => {
  console.log(
    `Server is listening on port ${process.env.SERVER_PORT}, http://localhost:${process.env.SERVER_PORT}`
  );
});

//     // await connection.manager.save(connection.manager.create(User, {
//     //     firstName: "Timber",
//     //     lastName: "Saw",
//     //     age: 27
//     // }));
//     // await connection.manager.save(connection.manager.create(User, {
//     //     firstName: "Phantom",
//     //     lastName: "Assassin",
//     //     age: 24
//     // }));

//   })
//   .catch((error) => console.log(error));
