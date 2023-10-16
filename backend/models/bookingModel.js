import mongoose from "mongoose";


const bookingSchema = mongoose.Schema({
    date: { type: String, required: true, default: Date.now },
    time: { type: String, required: true },
    guest: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Guests",
      required: false,
    },
    amount: { type: Number, required: true },
    tables: { type: Number, required: true },
    message: { type: String, required: false },  
})


const Booking = mongoose.model("Booking",bookingSchema)

export default Booking