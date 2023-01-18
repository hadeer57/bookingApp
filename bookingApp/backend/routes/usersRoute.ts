import express from "express";
import { deleteUser, findAllusers, findUser, updateUser } from "../controls/usersCont";
import {isAdmin, isUser} from "../verify/verify";

const router = express.Router();

//Update
router.put("/update-user/:id",isUser, updateUser)

//Delete
router.delete("/delete-user/:id", isAdmin ,isUser,deleteUser)

//Get
router.get("/get-user/:id", isAdmin ,findUser)

//GetAll
router.get("/",isAdmin, findAllusers)

export default router;