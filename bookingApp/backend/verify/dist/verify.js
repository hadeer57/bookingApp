"use strict";
exports.__esModule = true;
exports.isWriter = exports.isUser = exports.isAdmin = void 0;
var express_1 = require("express");
var jwt_simple_1 = require("jwt-simple");
var router = express_1["default"].Router();
function isAdmin(req, res, next) {
    try {
        var user = req.cookies.user;
        if (!user)
            throw new Error('no cookie on path');
        var secret = process.env.JWT_SECRET;
        if (!secret)
            throw new Error('no secret');
        var decodedCookie = jwt_simple_1["default"].decode(user, secret);
        console.log(decodedCookie);
        var role = decodedCookie.role;
        if (!isAdmin) {
            res.status(403).send({ error: 'Not authorized' });
        }
        else {
            next();
        }
    }
    catch (error) {
        res.send({ error: error });
    }
}
exports.isAdmin = isAdmin;
function isUser(req, res, next) {
    try {
        var user = req.cookies.user;
        if (!user)
            throw new Error('no cookie on path');
        var secret = process.env.JWT_SECRET;
        if (!secret)
            throw new Error('no secret');
        var decodedCookie = jwt_simple_1["default"].decode(user, secret);
        console.log(decodedCookie);
        var role = decodedCookie.role;
        if (role !== 'user') {
            res.status(403).send({ error: 'Not authorized' });
        }
        else {
            next();
        }
    }
    catch (error) {
        res.send({ error: error });
    }
}
exports.isUser = isUser;
function isWriter(req, res, next) {
    try {
        var user = req.cookies.user;
        if (!user)
            throw new Error('no cookie on path');
        var secret = process.env.JWT_SECRET;
        if (!secret)
            throw new Error('no secret');
        var decodedCookie = jwt_simple_1["default"].decode(user, secret);
        console.log(decodedCookie);
        var role = decodedCookie.role;
        if (role !== 'writer') {
            res.status(403).send({ error: 'Not authorized' });
        }
        else {
            next();
        }
    }
    catch (error) {
        res.send({ error: error });
    }
}
exports.isWriter = isWriter;
exports["default"] = router;
