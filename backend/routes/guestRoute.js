import express from "express"
import { deleteGuest, getGuests } from "../controllers/guestControllers.js"


const router = express.Router()


router
        .get("/",getGuests)
        .delete("/:id",deleteGuest)




export default router