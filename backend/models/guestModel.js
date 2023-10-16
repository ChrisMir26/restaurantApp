import mongoose from "mongoose"


const guestSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    phone:{
        type:Number,
        required:true
    }
})


const Guest = mongoose.model("Patients", patientsSchema)

export default Guest