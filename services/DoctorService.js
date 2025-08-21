import DoctorRepository from "../repositories/DoctorRepository.js"

const getAllDoctors = async () => {
    return DoctorRepository.getAllDoctors()
}

const getDoctorById = async (id) => {
    return DoctorRepository.getDoctorById(id)
}

const saveDoctor = async ({ name, medicalSpecialty, medicalRegistration, login, email, password, phone }) => {
    return DoctorRepository.saveDoctor({ name, medicalSpecialty, medicalRegistration, login, email, password, phone })
}

const updateDoctor = async (id, { name, medicalSpecialty, medicalRegistration, login, email, password, phone }) => {
    return DoctorRepository.updateDoctor(id, { name, medicalSpecialty, medicalRegistration, login, email, password, phone })
}

const deleteDoctor = async (id) => {
    return DoctorRepository.deleteDoctor(id)
}

const doctorService = {
    getAllDoctors,
    getDoctorById,
    saveDoctor,
    updateDoctor,
    deleteDoctor
}

export default doctorService
