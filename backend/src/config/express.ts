import express from "express";
import * as  bodyParser from 'body-parser'
import cors from 'cors'

export const app = express();

// const corsOptions = {
//     origin: ["http://localhost:3000", "http://104.197.118.193:8081"],
//   };

const corsOptions = {}
app.use(cors(corsOptions));

// for parsing application/json
app.use(bodyParser.json());

// for parsing application/xwww-
app.use(bodyParser.urlencoded({ extended: true }));
// form-urlencoded