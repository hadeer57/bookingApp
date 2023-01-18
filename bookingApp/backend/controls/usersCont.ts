import { UserModel } from "../models/userModel";

export async function updateUser(req:any,res:any) {

  try { 

     const updateUserDB = await UserModel.findByIdAndUpdate(req.params.id, {$set: req.body}, {new:true});
     res.send({ success: true, updateUserDB });
   } 
   
   catch (error) {
     res.send(error);
   }
 }

 export async function deleteUser(req:any,res:any) {

  try { 

     const deleteUserDB = await UserModel.findByIdAndDelete(req.params.id);
     res.send({ success: true });
   } 
   
   catch (error) {
     res.send(error);
   }
 }
 
 export async function findUser(req:any,res:any) {

  try { 

     const findUserDB = await UserModel.findById(req.params.id);
     res.send({ success: true, findUserDB });
   } 
   
   catch (error) {
     res.send(error);
   }
 }

 export async function findAllusers(req:any,res:any) {

  try { 

     const users = await UserModel.find();
     res.send({ success: true ,users});
   } 
   
   catch (error) {
     res.send(error);
   }
 }

