import mongoose from "mongoose"


const Schema = mongoose.Schema

const appointmentSchema = new Schema({
    date: {
        type: Date,
        required: [true, 'Date is required']
    },
    doctorId: {
        type: String,
        required: [true, 'Doctor Id is required']
    },
    patientId: {
        type: String,
        required: [true, 'Patient Id is required']
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

const appointment = mongoose.model('Appointment', appointmentSchema)

export default appointment