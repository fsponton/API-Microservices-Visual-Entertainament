const express = require("express");
const { createProxyMiddleware } = require("http-proxy-middleware");

const app = express();

app.use('/user/*', createProxyMiddleware({
    target: "http://auth:8001",
    changeOrigin: true
}));

app.use("/", createProxyMiddleware({
    target: "http://api-services:8002",
    changeOrigin: true
}));

app.listen(8000, () => {
    console.log(`Gateway  Visual Entertainment listening on port 8000`)
})