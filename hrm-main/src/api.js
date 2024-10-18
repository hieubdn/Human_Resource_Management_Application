import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080/api';

export const getEmployees = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/employees`);
    return response.data;
  } catch (error) {
    console.error('Error fetching employees:', error);
  }
};

export const addEmployee = async (employee) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/employees`, employee);
    return response.data;
  } catch (error) {
    console.error('Error adding employee:', error);
  }
};

export const updateEmployee = async (id, employee) => {
  try {
    const response = await axios.put(`${API_BASE_URL}/employees/${id}`, employee);
    return response.data;
  } catch (error) {
    console.error('Error updating employee:', error);
  }
};

export const deleteEmployee = async (id) => {
  try {
    await axios.delete(`${API_BASE_URL}/employees/${id}`);
  } catch (error) {
    console.error('Error deleting employee:', error);
  }
};
