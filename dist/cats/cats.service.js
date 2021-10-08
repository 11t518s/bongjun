"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteCat = exports.updatePartialCat = exports.updateAllCat = exports.createCat = exports.readPartialCat = exports.readAllcat = void 0;
var cats_model_1 = require("./cats.model");
var readAllcat = function (req, res) {
    try {
        var cats = cats_model_1.Cat;
        res.status(200).send({
            success: true,
            data: {
                cats: cats,
            },
        });
    }
    catch (error) {
        res.status(400).send({
            success: false,
            error: error,
        });
    }
};
exports.readAllcat = readAllcat;
var readPartialCat = function (req, res) {
    try {
        var params_1 = req.params;
        console.log(params_1);
        var cats = cats_model_1.Cat.filter(function (cat) {
            return cat.name === params_1.name;
        });
        res.status(200).send({
            success: true,
            data: {
                cats: cats,
            },
        });
    }
    catch (error) {
        res.status(400).send({
            success: false,
            error: error,
        });
    }
};
exports.readPartialCat = readPartialCat;
var createCat = function (req, res) {
    try {
        var data = req.body;
        console.log(data);
        res.status(200).send({
            success: true,
            data: { data: data },
        });
    }
    catch (error) {
        res.send({
            success: false,
            error: error,
        });
    }
};
exports.createCat = createCat;
var updateAllCat = function (req, res) {
    try {
        var params_2 = req.params;
        var body_1 = req.body;
        var result_1;
        cats_model_1.Cat.map(function (cat) {
            cat.name === params_2.name && (result_1 = body_1);
        });
        res.status(200).send({
            success: true,
            data: {
                cats: result_1,
            },
        });
    }
    catch (error) {
        res.status(400).send({
            success: false,
            error: error,
        });
    }
};
exports.updateAllCat = updateAllCat;
var updatePartialCat = function (req, res) {
    try {
        var params_3 = req.params;
        var body_2 = req.body;
        cats_model_1.Cat.map(function (cat) {
            cat.name === params_3.name && (cat = __assign(__assign({}, cat), body_2));
        });
        res.status(200).send({
            success: true,
            data: {
                cats: body_2,
            },
        });
    }
    catch (error) {
        res.status(400).send({
            success: false,
            error: error,
        });
    }
};
exports.updatePartialCat = updatePartialCat;
var deleteCat = function (req, res) {
    try {
        var params_4 = req.params;
        var body = req.body;
        var newCat = cats_model_1.Cat.filter(function (cat) { return cat.name !== params_4.name; });
        res.status(200).send({
            success: true,
            data: {
                cats: body,
            },
        });
    }
    catch (error) {
        res.status(400).send({
            success: false,
            error: error,
        });
    }
};
exports.deleteCat = deleteCat;
//# sourceMappingURL=cats.service.js.map