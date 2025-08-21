import { Router } from 'express'
import bcrypt from 'bcrypt'
import doctorService from '../services/DoctorService.js'

const router = Router()

router.get('/doctors', async (req, res) => {
  try {
    const doctors = await doctorService.getAllDoctors()
    res.send(doctors)
  } catch (error) {
    console.error(error)
    res.status(500).send(error)
  }
})

router.get('/doctors/:id', async (req, res) => {
  const { id } = req.params
  try {
    const doctor = await doctorService.getDoctorById(id)
    res.send(doctor)
  } catch (error) {
    console.error(error)
    res.status(500).send(error)
  }
})

router.post('/doctors', async (req, res) => {
  const { name, medicalSpecialty, medicalRegistration, login, email, password, phone } = req.body
  try {
    // 🔑 gera o hash da senha antes de salvar
    const hashedPassword = await bcrypt.hash(password, 10)

    const doctor = await doctorService.saveDoctor({
      name,
      medicalSpecialty,
      medicalRegistration,
      login,
      email,
      password: hashedPassword,
      phone
    })
    res.status(201).send(doctor)
  } catch (error) {
    console.error(error)
    res.status(500).send(error)
  }
})

router.put('/doctors/:id', async (req, res) => {
  const { id } = req.params
  const { name, medicalSpecialty, medicalRegistration, login, email, password, phone } = req.body
  try {
    let updatedData = { name, medicalSpecialty, medicalRegistration, login, email, phone }

    // só re-hash se o usuário enviou nova senha
    if (password) {
      updatedData.password = await bcrypt.hash(password, 10)
    }

    const doctor = await doctorService.updateDoctor(id, updatedData)
    res.send(doctor)
  } catch (error) {
    console.error(error)
    res.status(500).send(error)
  }
})

router.delete('/doctors/:id', async (req, res) => {
  const { id } = req.params
  try {
    const doctor = await doctorService.deleteDoctor(id)
    res.send(doctor)
  } catch (error) {
    console.error(error)
    res.status(500).send(error)
  }
})

export default router
