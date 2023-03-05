import mongoose from "mongoose";
  

const HotelSchema = new mongoose.Schema({
    name: { 
        type: String, 
        required: true 
        },
    type: { 
        type: String, 
        required: true 
    },
    country: {
        type:String, 
        required:true
    },

    city: {
        type:String, 
        required:true
    },
    address:{
        type:String, 
        required:true
    },
    distanceFromCenter: { 
        type: String, 
        required: true 
    },
    images: {
        type: [String], 
    },
    description: {
         type: String, 
         required: true 
    },
    rating: { 
        type: Number, 
        min:0 , 
        max:10 
    },
    rooms: { 
        type: [String], 
        required: true 
    },
    cheapestPrice: { 
        type: Number, 
        required: true 
    },
    featured: { 
        type: Boolean, 
        default:false 
    },
})

const HotelModel = mongoose.model("hotel", HotelSchema);

export default HotelModel;