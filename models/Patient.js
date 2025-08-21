import mongoose from "mongoose"


const Schema = mongoose.Schema

const patientSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Name is required']
    },
    birthDate: {
        type: Date,
        required: [true, 'Birth Date is required']
    },
    email: {
        type: String,
        required: [true, 'Email is required']
    },
    phone: {
        type: String,
        required: [true, 'Phone is required']
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

const patient = mongoose.model('Patient', patientSchema)

export default patient