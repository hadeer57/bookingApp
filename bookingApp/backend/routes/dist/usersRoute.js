"use strict";
exports.__esModule = true;
var express_1 = require("express");
var usersCont_1 = require("../controls/usersCont");
var verify_1 = require("../verify/verify");
var router = express_1["default"].Router();
//Update
router.put("/update-user/:id", verify_1.isUser, usersCont_1.updateUser);
//Delete
router["delete"]("/delete-user/:id", verify_1.isAdmin, verify_1.isUser, usersCont_1.deleteUser);
//Get
router.get("/get-user/:id", verify_1.isAdmin, usersCont_1.findUser);
//GetAll
router.get("/", verify_1.isAdmin, usersCont_1.findAllusers);
exports["default"] = router;
