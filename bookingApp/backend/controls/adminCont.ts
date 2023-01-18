import { UserModel } from "../models/userModel";
import bcrypt from "bcrypt";
import jwt from "jwt-simple";
import mongoose from "mongoose";
const saltRounds = 10;


export async function register(req: any, res: any) {
  try {
    const { firstName, lastName, email, password } = req.body;

    //validaion

    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);

    await UserModel.create({ firstName, lastName, email, password: hash });
    res.send({ ok: true });
  } catch (error: any) {
    console.error(error);
    res.send({ error: error.message });
  }
}


export async function login(req: any, res: any) {
  try {
    const { email, password } = req.body;

    const userDB = await UserModel.findOne({ email });
  
    if (!userDB) throw new Error("User name or password do not match");

     //@ts-ignore
    const isMatch = await bcrypt.compare(password, userDB.password)

    console.log(isMatch)

    if (!isMatch) throw new Error('Password do not match')

    //send cookie
    const cookie = { userId: userDB._id };
    const secret: any = process.env.JWT_SECRET;
    const JWTCookie = jwt.encode(cookie, secret);
    res.cookie("user", JWTCookie);

    res.send({ ok: true });
  } catch (error: any) {
    console.error(error);
    res.send({ error: error.message });
  }
}

