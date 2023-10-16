import mongoose from "mongoose";


const bookingSchema = mongoose.Schema({
    date: { type: String, required: true, default: Date.now },
    time: { type: String, required: true },
    amount: { type: Number, required: true },
    tables: { type: Number, required: true },
    message: { type: String, required: false },  
    guest: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Guest",
      required: false,
    }
})


const Booking = mongoose.model("Booking",bookingSchema)

export default Booking