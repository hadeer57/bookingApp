"use strict";
exports.__esModule = true;
var express_1 = require("express");
var adminCont_1 = require("../controls/adminCont");
var router = express_1["default"].Router();
router
    .post("/register", adminCont_1.register)
    .post("/login", adminCont_1.login);
exports["default"] = router;
