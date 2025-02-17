import dotenv from "dotenv";
import { app } from "./app.js";
import connectDB from "./db/connection.js";

dotenv.config({
  path: "./.env",
});

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log(`Server is listening at port ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.error("MongoDB Connection Failed!!!", err);
  });

