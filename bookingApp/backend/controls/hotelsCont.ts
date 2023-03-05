import HotelModel from "../models/hotelModel";

export async function addHotel(req: any, res: any) {
  const newHotel = req.body;
  try {

    const newHotelDB = await HotelModel.create(newHotel);
    const savedHotel = await newHotel.save();
    res.send(savedHotel);
  }

  catch (error) {
    res.send(error);
  }
}

export async function updateHotel(req: any, res: any) {

  try {

    const updateHotelDB = await HotelModel.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true });
    res.send({ success: true, updateHotelDB });
  }

  catch (error) {
    res.send(error);
  }
}

export async function deleteHotel(req: any, res: any) {

  try {

    const deleteHotelDB = await HotelModel.findByIdAndDelete(req.params.id);
    res.send({ success: true });
  }

  catch (error) {
    res.send(error);
  }
}

export async function findHotel(req: any, res: any) {

  try {

    const findHotelDB = await HotelModel.findById(req.params.id);
    res.send( findHotelDB);
  }

  catch (error) {
    res.send(error);
  }
}

export async function findAllHotels(req: any, res: any) {
  try {
    const hotels = await HotelModel.find();
    res.send({ success: true, hotels });
  }  catch (error) {
    res.send(error);
  }
}


export async function findHotelsByCity(req:any, res:any) {
  try {
      // const { city } = req.body
      const cityHotelDB = await HotelModel.find(req.query)
      res.send(cityHotelDB)
  } catch (error) {
      res.send(error)
  }
}




