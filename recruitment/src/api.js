import axios from 'axios';

const APPLICANT_API_BASE_URL = 'http://localhost:8080/api/applicants';
const EMPLOYEE_API_BASE_URL = 'http://localhost:8080/api/employees';
const SEND_EMAIL_API_BASE_URL = 'http://localhost:8080/api/sendemail';

// API cho ứng viên
export const getApplicants = async () => {
  try {
    const response = await axios.get(APPLICANT_API_BASE_URL);
    return response.data;
  } catch (error) {
    console.error('Error fetching applicants:', error);
    return [];
  }
};

export const addApplicant = async (applicant) => {
  try {
    const response = await axios.post(APPLICANT_API_BASE_URL, applicant);
    // Gọi API để gửi email sau khi thêm ứng viên thành công
    await axios.post(SEND_EMAIL_API_BASE_URL, response.data);
    return response.data;
  } catch (error) {
    console.error('Error adding applicant:', error);
    throw error;
  }
};

export const deleteApplicant = async (id) => {
  try {
    await axios.delete(`${APPLICANT_API_BASE_URL}/${id}`);
  } catch (error) {
    console.error('Error deleting applicant:', error);
    throw error;
  }
};

// API cho nhân viên
export const addEmployee = async (employee) => {
  try {
    const response = await axios.post(EMPLOYEE_API_BASE_URL, employee);
    return response.data;
  } catch (error) {
    console.error('Error adding employee:', error);
    throw error;
  }
};

export const getEmployees = async () => {
  try {
    const response = await axios.get(EMPLOYEE_API_BASE_URL);
    return response.data;
  } catch (error) {
    console.error('Error fetching employees:', error);
    return [];
  }
};
