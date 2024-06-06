import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";

dotenv.config();
const app = express();

app.use(express.json());
app.use(bodyParser.json());
app.use(cors());

app.get("/", (req, res) => {
    res.send({
      message: "Welcome to the Reply Mind Dashboard",
    });
  });

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`The server is running on http://localhost:${port}`);
  });
  
