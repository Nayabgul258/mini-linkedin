import express from "express";
import connectDb from "./Connect/db.js";
import dotenv from "dotenv";
import cors from "cors";
import authRoute from "./routes/authRoute.js";
import portRoute from "./routes/portRoute.js";


const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/auth",authRoute);
app.use("/api/posts",portRoute);



const PORT = process.env.PORT || 5000;

dotenv.config();

app.listen(PORT, () => {
  connectDb();
  console.log(`server Started ${PORT}`);
});
