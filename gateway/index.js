const express = require("express");
const { createProxyMiddleware } = require("http-proxy-middleware");

const app = express();
//no usar bodyparser y express.json

app.use('/User/*', createProxyMiddleware({
    target: "http://localhost:8001",
    changeOrigin: true
}));

//test

app.use("/", createProxyMiddleware({
    target: "http://localhost:8002",
    changeOrigin: true
}));


app.listen(999, () => {
    console.log(`Gateway  Visual Entertainment listening on port 999`)
})