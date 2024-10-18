import axios from 'axios';

const APPLICANT_API_BASE_URL = 'http://localhost:8080/api/applicants';
const EMPLOYEE_API_BASE_URL = 'http://localhost:8080/api/employees';

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
    return response.data;
  } catch (error) {
    console.error('Error adding applicant:', error);
    throw error; // Ném lỗi để có thể xử lý ở bên gọi hàm
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
