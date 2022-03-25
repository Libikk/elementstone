import * as express from "express";
import routes from "./routes";
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.static("public"));
app.use(express.json());
app.use(routes);

export default app;
