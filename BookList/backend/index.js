// import express from "express";
// import { PORT, mongoDBURL } from "./config.js";
// import mongoose from "mongoose";
// import { Book } from "./models/bookModel.js";
// import booksRoute from "./routes/booksRoutes.js";
// import cors from "cors";

// const app = express();

// // app.use((req, res, next) => {
// //   res.header("Access-Control-Allow-Origin", "http://localhost:5173");
// //   // Other CORS headers may be required depending on your needs
// //   res.header(
// //     "Access-Control-Allow-Headers",
// //     "Origin, X-Requested-With, Content-Type, Accept"
// //   );
// //   next();
// // });
// app.use(cors());
// app.use(express.json());

// app.use("/books", booksRoute);

// // app.use(
// //   cors({
// //     origin: "http://localhost:3000",
// //     methods: ["GET", "POST", "PUT", "DELETE"],
// //     allowedHeaders: ["Content-Type"],
// //   })
// // );
// // const corsOptions = {
// //   origin: "http://localhost:5173",
// //   methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
// // };

// // Enable CORS
// // app.use(cors(corsOptions));

// app.get("/", (req, res) => {
//   res.status(234).send("heyy!! you're at homepage.");
// });

// mongoose
//   .connect(
//     "mongodb+srv://khushii:khushiipwd@cluster0.rwfubsy.mongodb.net/bookscollection?retryWrites=true&w=majority&appName=Cluster0"
//   )
//   .then(() => {
//     console.log("BookStore is connect to Database");

//     app.listen(PORT, () => {
//       console.log("everythign is ok..server is running at setted port");
//     });
//   })
//   .catch((error) => {
//     console.log(error);
//   });

import express from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import { Book } from "./models/bookModel.js";
import booksRoute from "./routes/booksRoutes.js";
import cors from "cors";

const app = express();

// Enable CORS for all routes
app.use(cors());

// Parse JSON request body
app.use(express.json());

// Route for books
app.use("/books", booksRoute);

// Route for homepage
app.get("/", (req, res) => {
  res.status(200).send("Welcome to the BookStore homepage.");
});

mongoose
  .connect(
    "mongodb+srv://khushii:khushiipwd@cluster0.rwfubsy.mongodb.net/bookscollection?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => {
    console.log("BookStore is connect to Database");

    app.listen(PORT, () => {
      console.log("everythign is ok..server is running at setted port");
    });
  })
  .catch((error) => {
    console.log(error);
  });
