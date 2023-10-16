import express from "express"
import { deleteBooking, editBooking, getBookings, saveBooking, searchAvailability } from "../controllers/bookingControllers.js"



const router = express.Router()

router
        .get("/",getBookings)
        .post("/",saveBooking)
        .put("/:id",editBooking)
        .delete("/:id",deleteBooking)
        .post("/check",searchAvailability)






export default router