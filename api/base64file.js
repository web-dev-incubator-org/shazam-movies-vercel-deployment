import express from "express"
import bodyParser from "body-parser"
import cors from "cors"
import axios from "axios"

const app = express();
app.use(bodyParser.json({limit: "50mb"}))
app.use(bodyParser.urlencoded({extended: true}))
app.use(cors({
    origin: '*'
}));

app.use(bodyParser.json({limit: "50mb"}));
app.use(bodyParser.urlencoded({limit: "50mb", extended: true}))

app.post("/base64file", async (req, res, next) => {
  res.setHeader('Content-Type', 'text/html');
  res.setHeader('Cache-Control', 's-max-age=1, stale-while-revalidate');
  res.end(`received bytes:` + req.headers['content-length']);
})

module.exports = app;