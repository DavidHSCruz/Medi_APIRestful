import Doctor from '../models/Doctor.js'

const getAllDoctors = async () => {
  return await Doctor.find()
}

const getDoctorById = async (id) => {
  try {
    return await Doctor.findById(id)
  } catch (error) {
    throw new Error(error)
  }
}

const saveDoctor = async ({ name, medicalSpecialty, medicalRegistration, login, email, password, phone }) => {
  try {
    const doctor = new Doctor({ name, medicalSpecialty, medicalRegistration, login, email, password, phone })
    return await doctor.save()
  } catch (error) {
    throw new Error(error)
  }
}

const updateDoctor = async (id, { name, medicalSpecialty, medicalRegistration, login, email, password, phone }) => {
  try {
    return await Doctor.findByIdAndUpdate(id, { name, medicalSpecialty, medicalRegistration, login, email, password, phone }, { new: true })
  } catch (error) {
    throw new Error(error)
  }
}

const deleteDoctor = async (id) => {
  try {
    return await Doctor.findByIdAndDelete(id)
  } catch (error) {
    throw new Error(error)
  }
}

const doctorRepository = {
  getAllDoctors,
  getDoctorById,
  saveDoctor,
  updateDoctor,
  deleteDoctor
}

export default doctorRepository
