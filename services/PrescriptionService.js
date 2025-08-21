import PrescriptionRepository from "../repositories/PrescriptionRepository.js"

const getAllPrescriptions = async () => {
    return PrescriptionRepository.getAllPrescriptions()
}

const getPrescriptionById = async (id) => {
    return PrescriptionRepository.getPrescriptionById(id)
}

const savePrescription = async ({ date, appointmentId, medicine, dosage, instructions }) => {
    return PrescriptionRepository.savePrescription({ date, appointmentId, medicine, dosage, instructions })
}

const updatePrescription = async (id, { date, appointmentId, medicine, dosage, instructions }) => {
    return PrescriptionRepository.updatePrescription(id, { date, appointmentId, medicine, dosage, instructions })
}

const deletePrescription = async (id) => {
    return PrescriptionRepository.deletePrescription(id)
}

const prescriptionService = {
    getAllPrescriptions,
    getPrescriptionById,
    savePrescription,
    updatePrescription,
    deletePrescription
}

export default prescriptionService
