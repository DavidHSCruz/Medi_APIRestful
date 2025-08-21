import express from 'express'
import appointmentController from '../controllers/AppointmentController.js'
import doctorController from '../controllers/DoctorController.js'
import patientController from '../controllers/PatientController.js'
import prescriptionController from '../controllers/PrescriptionController.js'

const router = express.Router()

router.get('/', (req, res) => {
    res.status(200).json({
         Medi_APP: {
            descricao: 'Olá, este é um exemplo de API RESTful usando Express.js e mongoDB. Com ela você pode acessar e manipular dados de médicos, pacientes, consultas e prescrições.',
            endPoints: '/appointments, /doctors, /patients, /prescriptions',
            exemplos: {
                GET: '/appointments - Retorna todas as consultas agendadas.',
                GET: '/doctors/:id - Retorna os dados de um médico específico.',
                POST: '/doctors - Cria um novo médico.',
                PUT: '/patients/:id - Atualiza os dados de um paciente específico.',
                DELETE: '/prescriptions/:id - Remove uma prescrição específica.',
            },
            autor: 'David Henrique da Silva Cruz'
         }
    })
})

router.use('/', appointmentController)
router.use('/', doctorController)
router.use('/', patientController)
router.use('/', prescriptionController)


export default router