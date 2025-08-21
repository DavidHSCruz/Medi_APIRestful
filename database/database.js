import mongoose from "mongoose"
import dotenv from 'dotenv'
dotenv.config()
dotenv.config({ path: './.env' })

const MONGO_URI = process.env.MONGO_URI
const clientOptions = { serverApi: { version: '1', strict: true, deprecationErrors: true } }

async function connectDB() {
  try {
    await mongoose.connect(MONGO_URI, clientOptions)
    console.log("Connected to MongoDB!")
  } catch (error) {
    console.error("Error connecting to MongoDB:", error)
  }
}

export default connectDB

