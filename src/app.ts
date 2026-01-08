import express from "express";
import router from "./routes/api";

const app = express();

app.use(express.json());

app.use('/api/v1', router);

export default app