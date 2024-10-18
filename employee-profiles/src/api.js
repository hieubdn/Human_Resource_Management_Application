import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080/api/employees';

// Lấy danh sách nhân viên từ backend
export const getEmployees = async () => {
  try {
    const response = await axios.get(API_BASE_URL);
    return response.data;
  } catch (error) {
    console.error('Error fetching employees:', error);
    return [];
  }
};

// Cập nhật thông tin của nhân viên
export const updateEmployee = async (id, updatedEmployee) => {
  try {
    const response = await axios.put(`${API_BASE_URL}/${id}`, updatedEmployee);
    return response.data;
  } catch (error) {
    console.error('Error updating employee:', error);
    throw error;
  }
};

// Xóa nhân viên theo ID
export const deleteEmployee = async (id) => {
  try {
    await axios.delete(`${API_BASE_URL}/${id}`);
  } catch (error) {
    console.error('Error deleting employee:', error);
    throw error;
  }
};
