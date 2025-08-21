import { Router } from 'express'
import appointmentService from '../services/AppointmentService.js'

const router = Router()

router.get('/appointments', async (req, res) => {
    try {
        const appointments = await appointmentService.getAllAppointments()

        res.send(appointments)
    }catch (error) {
        console.error(error)
        res.status(500).send(error)
    }
})

router.get('/appointments/:id', async (req, res) => {
    const { id } = req.params
    try {
        const appointment = await appointmentService.getAppointmentById(id)

        res.send(appointment)
    }catch (error) {
        console.error(error)
        res.status(500).send(error)
    }
})

router.post('/appointments', async (req, res) => {
    const { date, doctorId, patientId } = req.body
    try {
        const appointment = await appointmentService.saveAppointment({ date, doctorId, patientId })

        res.send(appointment)
    }catch (error) {
        console.error(error)
        res.status(500).send(error)
    }
})

router.put('/appointments/:id', async (req, res) => {
    const { id } = req.params
    const { date, doctorId, patientId } = req.body
    try {
        const appointment = await appointmentService.updateAppointment(id, { date, doctorId, patientId })

        res.send(appointment)
    } catch (error) {
        console.error(error)
        res.status(500).send(error)
    }
})

router.delete('/appointments/:id', async (req, res) => {
    const { id } = req.params
    try {
        const appointment = await appointmentService.deleteAppointment(id)

        res.send(appointment)
    }catch (error) {
        console.error(error)
        res.status(500).send(error)
    }
})

export default router
