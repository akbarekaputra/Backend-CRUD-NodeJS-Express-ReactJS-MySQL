import express from "express";
import cors from "cors";

import UserRoute from "./routes/UserRoute.js";

const app = express();
app.use(express.json());
app.use(cors());
app.use(UserRoute);

const port = 3333;
app.listen(port, () => console.log(`running on port ${port}`));