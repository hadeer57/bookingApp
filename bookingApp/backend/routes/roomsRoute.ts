import express from "express";
import { createRoom, deleteRoom, findAllRooms, findRoom, updateRoom } from "../controls/roomsCont";
import { isAdmin } from "../verify/verify";

const router = express.Router();

//Create
router.post("/create-room/:hotelid",isAdmin ,createRoom)

//Update
router.put("/update-room/:id",isAdmin, updateRoom)

//Delete
router.delete("/delete-room/:id/:hotelid",isAdmin, deleteRoom)

//Get
router.get("/get-room/:id", findRoom)

//GetAll
router.get("/", findAllRooms)



export default router