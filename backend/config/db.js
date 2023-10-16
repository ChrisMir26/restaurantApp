import mongoose from "mongoose";
const uri = "mongodb+srv://christian:christian@cluster0.hwxypqv.mongodb.net/?retryWrites=true&w=majority";

export async function run() {
  try {
    await mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    console.log("Successfully connected to MongoDB using Mongoose!");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
}

run().catch(console.dir);
