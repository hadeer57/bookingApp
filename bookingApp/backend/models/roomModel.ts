import mongoose from "mongoose";
  

const RoomSchema = new mongoose.Schema({
    title: { 
        type: String, 
        required: true 
        },
    price: { 
        type: Number, 
        required: true 
    },
    maxPeople: { 
        type: Number, 
        required: true 
    },
    images: {
        type: [String], 
    },
    description: {
         type: String, 
         required: true 
    },
    roomNumbers:[{
        number:Number,
        unavailabeDates:{type:[Date]}
    }]
})

const RoomModel = mongoose.model("room", RoomSchema);

export default RoomModel;