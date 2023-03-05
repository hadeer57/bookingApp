"use strict";
exports.__esModule = true;
var express_1 = require("express");
var hotelsCont_1 = require("../controls/hotelsCont");
var verify_1 = require("../verify/verify");
var router = express_1["default"].Router();
//Create
router.post("/add-hotel", verify_1.isAdmin, hotelsCont_1.addHotel);
//Update
router.put("/update-hotel/:id", verify_1.isAdmin, hotelsCont_1.updateHotel);
//Delete
router["delete"]("/delete-hotel/:id", verify_1.isAdmin, hotelsCont_1.deleteHotel);
//Get
router.post("/get-hotel/:id", hotelsCont_1.findHotel);
//GetAll
router.post("/", hotelsCont_1.findAllHotels);
//GetByCity
router.post("/getbycity", hotelsCont_1.findHotelsByCity);
exports["default"] = router;
