import express from "express";
import * as  bodyParser from 'body-parser'
import cors from 'cors'

export const app = express();


const corsOptions = {}
app.use(cors(corsOptions));

// for parsing application/json
app.use(bodyParser.json());

// for parsing application/xwww-
app.use(bodyParser.urlencoded({ extended: true }));
// form-urlencoded