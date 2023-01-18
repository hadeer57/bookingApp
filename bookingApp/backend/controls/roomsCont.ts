import RoomModel from "../models/roomModel";
import HotelModel from "../models/hotelModel";


export async function createRoom(req:any,res:any) {
    
    const hotelId = req.params.hotelid;
    const newRoom = new RoomModel(req.body)

 try {

    const savedRoom = await newRoom.save()
    try {
        await HotelModel.findByIdAndUpdate(hotelId, {$push: {rooms: savedRoom._id}})
    } catch (error) {
        res.send(error);
    }
    res.send({ success: true, savedRoom });
  } 
  
  catch (error) {
    res.send(error);
  }
}

export async function updateRoom(req:any,res:any) {

  try { 

     const updateRoomDB = await RoomModel.findByIdAndUpdate(req.params.id, {$set: req.body}, {new:true});
     res.send({ success: true, updateRoomDB });
   } 
   
   catch (error) {
     res.send(error);
   }
 }

 export async function deleteRoom(req:any,res:any) {

  const hotelId = req.params.hotelid;
  try {
    await RoomModel.findByIdAndDelete(req.params.id);
    try {
      await HotelModel.findByIdAndUpdate(hotelId, {
        $pull: { rooms: req.params.id },
      });
    }
   catch (error) {
     res.send(error);
   }
   res.send({ok:true})
 }
 catch(error){
  res.send(error);
 }
}
 
 export async function findRoom(req:any,res:any) {

  try { 

     const findRoomDB = await RoomModel.findById(req.params.id);
     res.send({ success: true, findRoomDB });
   } 
   
   catch (error) {
     res.send(error);
   }
 }

 export async function findAllRooms(req:any,res:any) {

  try { 

     const rooms = await RoomModel.find();
     res.send({ success: true ,rooms});
   } 
   
   catch (error) {
     res.send(error);
   }
  }
