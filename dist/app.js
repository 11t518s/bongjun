"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var cats_router_1 = require("./cats/cats.router");
var app = express();
var port = 8000;
app.use(function (req, res, next) {
    console.log(req.rawHeaders[1]);
    console.log("middleware");
    next();
});
app.use(express.json());
app.use(cats_router_1.default);
app.use(function (req, res, next) {
    res.send({ error: "404 not found error" });
});
app.listen(port, function () {
    console.log("server port is " + port);
});
//# sourceMappingURL=app.js.map