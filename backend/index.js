import express  from "express";
import dotenv from "dotenv"
import cors from "cors"
import { run } from "./config/db.js";

const app = express()

app.use(express.json())

dotenv.config()


app.use(cors())


const PORT = 4001

async function startApp() {
    try {
      // Conecta con MongoDB Atlas
      await run();
      console.log("Connected to MongoDB Atlas!");
      
      // Inicia el servidor Express
      app.listen(PORT, () => {
        console.log(`Server listening on port ${PORT}`);
      });
    } catch (error) {
      console.error("Error connecting to MongoDB Atlas:", error);
    }
  }
  
  startApp();
  