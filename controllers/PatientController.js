import { Router } from 'express'
import patientService from '../services/PatientService.js'

const router = Router()

router.get('/patients', async (req, res) => {
  try {
    const patients = await patientService.getAllPatients()
    res.send(patients)
  } catch (error) {
    console.error(error)
    res.status(500).send(error)
  }
})

router.get('/patients/:id', async (req, res) => {
  const { id } = req.params
  try {
    const patient = await patientService.getPatientById(id)
    res.send(patient)
  } catch (error) {
    console.error(error)
    res.status(500).send(error)
  }
})

router.post('/patients', async (req, res) => {
  const { name, birthDate, email, phone } = req.body
  try {
    const patient = await patientService.savePatient({ name, birthDate, email, phone })
    res.send(patient)
  } catch (error) {
    console.error(error)
    res.status(500).send(error)
  }
})

router.put('/patients/:id', async (req, res) => {
  const { id } = req.params
  const { name, birthDate, email, phone } = req.body
  try {
    const patient = await patientService.updatePatient(id, { name, birthDate, email, phone })
    res.send(patient)
  } catch (error) {
    console.error(error)
    res.status(500).send(error)
  }
})

router.delete('/patients/:id', async (req, res) => {
  const { id } = req.params
  try {
    const patient = await patientService.deletePatient(id)
    res.send(patient)
  } catch (error) {
    console.error(error)
    res.status(500).send(error)
  }
})

export default router
