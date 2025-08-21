import PatientRepository from "../repositories/PatientRepository.js"

const getAllPatients = async () => {
    return PatientRepository.getAllPatients()
}

const getPatientById = async (id) => {
    return PatientRepository.getPatientById(id)
}

const savePatient = async ({ name, birthDate, email, phone }) => {
    return PatientRepository.savePatient({ name, birthDate, email, phone })
}

const updatePatient = async (id, { name, birthDate, email, phone }) => {
    return PatientRepository.updatePatient(id, { name, birthDate, email, phone })
}

const deletePatient = async (id) => {
    return PatientRepository.deletePatient(id)
}

const patientService = {
    getAllPatients,
    getPatientById,
    savePatient,
    updatePatient,
    deletePatient
}

export default patientService
