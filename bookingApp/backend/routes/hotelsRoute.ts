import express from "express";
import {addHotel, updateHotel, deleteHotel, findHotel,findAllHotels, findHotelsByCity} from "../controls/hotelsCont"
import { isAdmin } from "../verify/verify";

const router = express.Router();

//Create
router.post("/add-hotel",isAdmin, addHotel)

//Update
router.put("/update-hotel/:id",isAdmin, updateHotel)

//Delete
router.delete("/delete-hotel/:id",isAdmin, deleteHotel)

//Get
router.post("/get-hotel/:id", findHotel)


//GetAll
router.post("/", findAllHotels)

//GetByCity
router.post("/getbycity", findHotelsByCity)








export default router