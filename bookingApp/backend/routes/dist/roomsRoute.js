"use strict";
exports.__esModule = true;
var express_1 = require("express");
var roomsCont_1 = require("../controls/roomsCont");
var verify_1 = require("../verify/verify");
var router = express_1["default"].Router();
//Create
router.post("/create-room/:hotelid", verify_1.isAdmin, roomsCont_1.createRoom);
//Update
router.put("/update-room/:id", verify_1.isAdmin, roomsCont_1.updateRoom);
//Delete
router["delete"]("/delete-room/:id/:hotelid", verify_1.isAdmin, roomsCont_1.deleteRoom);
//Get
router.get("/get-room/:id", roomsCont_1.findRoom);
//GetAll
router.get("/", roomsCont_1.findAllRooms);
exports["default"] = router;
