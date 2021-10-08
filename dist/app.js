"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var cats_router_1 = require("./cats/cats.router");
var Server = (function () {
    function Server(app) {
        if (app === void 0) { app = express(); }
        this.port = 8000;
        this.app = app;
    }
    Server.prototype.setRoute = function () {
        this.app.use(cats_router_1.default);
    };
    Server.prototype.setMiddleware = function () {
        this.app.use(function (req, res, next) {
            next();
        });
        this.app.use(express.json());
        this.setRoute();
        this.app.use(function (req, res, next) {
            res.send({ error: "404 not found error" });
        });
    };
    Server.prototype.listen = function () {
        var _this = this;
        this.setMiddleware;
        this.app.listen(this.port, function () {
            console.log("server port is " + _this.port);
        });
    };
    return Server;
}());
function init() {
    var server = new Server();
    server.listen();
}
init();
//# sourceMappingURL=app.js.map