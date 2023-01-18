import express from 'express';
import jwt from 'jwt-simple';
const router = express.Router();

export function isAdmin(req:any, res:any, next:any){
    try {
        const {user} = req.cookies;
        if(!user) throw new Error('no cookie on path');

        const secret = process.env.JWT_SECRET;
    if(!secret) throw new Error('no secret')
        var decodedCookie = jwt.decode(user, secret);

        console.log(decodedCookie)

        const {role} = decodedCookie;

        if(!isAdmin){
            res.status(403).send({error:'Not authorized'})
        } else{
            next()
        }
    } catch (error) {
        res.send({error})
    }
}

export function isUser(req:any, res:any, next:any){
    try {
        const {user} = req.cookies;
        if(!user) throw new Error('no cookie on path');

        const secret = process.env.JWT_SECRET;
    if(!secret) throw new Error('no secret')
        var decodedCookie = jwt.decode(user, secret);

        console.log(decodedCookie)

        const {role} = decodedCookie;

        if(role !== 'user'){
            res.status(403).send({error:'Not authorized'})
        } else{
            next()
        }
    } catch (error) {
        res.send({error})
    }
}

export function isWriter(req:any, res:any, next:any){
    try {
        const {user} = req.cookies;
        if(!user) throw new Error('no cookie on path');

        const secret = process.env.JWT_SECRET;
    if(!secret) throw new Error('no secret')
        var decodedCookie = jwt.decode(user, secret);

        console.log(decodedCookie)

        const {role} = decodedCookie;

        if(role !== 'writer'){
            res.status(403).send({error:'Not authorized'})
        } else{
            next()
        }
    } catch (error) {
        res.send({error})
    }
}

export default router;