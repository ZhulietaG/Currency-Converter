import express = require("express");
import {currentDateOfExecution} from "./common";
const cors = require("cors");
const app = express();
import {userRoutes} from "./routes";
import {v4} from "uuid";

app.use(cors());
app.use(express.json());
app.use(currentDateOfExecution);

app.use(userRoutes);

app.listen(3001, () => console.log("Listening on port 3001"));

