import React, { useEffect, useState } from 'react';
import { getEmployees, updateEmployee, deleteEmployee } from './api';
import Modal from 'react-modal';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';

Modal.setAppElement('#root');

const EmployeeProfilesApp = () => {
  const [employees, setEmployees] = useState([]);
  const [editEmployee, setEditEmployee] = useState(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [selectedEmployeeId, setSelectedEmployeeId] = useState(null);

  // Lấy danh sách nhân viên khi component được render
  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const data = await getEmployees();
        setEmployees(data);
      } catch (error) {
        toast.error('Có lỗi xảy ra khi lấy danh sách nhân viên.');
      }
    };
    fetchEmployees();
  }, []);

  // Mở modal để sửa nhân viên
  const handleEdit = (employee) => {
    setEditEmployee(employee);
    setIsEditModalOpen(true);
  };

  // Đóng modal chỉnh sửa
  const closeEditModal = () => {
    setEditEmployee(null);
    setIsEditModalOpen(false);
  };

  // Xử lý cập nhật nhân viên
  const handleSaveChanges = async () => {
    try {
      await updateEmployee(editEmployee.id, editEmployee);
      toast.success('Cập nhật nhân viên thành công!');
      closeEditModal();
      const data = await getEmployees();
      setEmployees(data);
    } catch (error) {
      toast.error('Có lỗi xảy ra khi cập nhật nhân viên.');
    }
  };

  // Mở modal xác nhận xóa nhân viên
  const handleDeleteConfirmation = (id) => {
    setSelectedEmployeeId(id);
    setIsDeleteModalOpen(true);
  };

  // Đóng modal xóa
  const closeDeleteModal = () => {
    setSelectedEmployeeId(null);
    setIsDeleteModalOpen(false);
  };

  // Xử lý xóa nhân viên
  const handleDelete = async () => {
    try {
      await deleteEmployee(selectedEmployeeId);
      toast.success('Xóa nhân viên thành công!');
      closeDeleteModal();
      const data = await getEmployees();
      setEmployees(data);
    } catch (error) {
      toast.error('Có lỗi xảy ra khi xóa nhân viên.');
    }
  };

  return (
    <div className="container">
      <ToastContainer />
      <h2 className="title">Danh sách Nhân Viên</h2>
      <table className="table table-striped mt-4">
        <thead>
          <tr>
            <th>ID</th>
            <th>Tên</th>
            <th>Email</th>
            <th>Số Điện Thoại</th>
            <th>Hành Động</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.id}</td>
              <td>{employee.name}</td>
              <td>{employee.email}</td>
              <td>{employee.phoneNumber}</td>
              <td>
                <button onClick={() => handleEdit(employee)} className="btn btn-warning mr-2">
                  Sửa
                </button>
                <button onClick={() => handleDeleteConfirmation(employee.id)} className="btn btn-danger">
                  Xóa
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Modal chỉnh sửa nhân viên */}
      <Modal isOpen={isEditModalOpen} onRequestClose={closeEditModal} className="modal">
        <h2>Chỉnh sửa thông tin nhân viên</h2>
        <div className="form-group">
          <label>Tên:</label>
          <input
            type="text"
            value={editEmployee?.name || ''}
            onChange={(e) => setEditEmployee({ ...editEmployee, name: e.target.value })}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            value={editEmployee?.email || ''}
            onChange={(e) => setEditEmployee({ ...editEmployee, email: e.target.value })}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>Số Điện Thoại:</label>
          <input
            type="tel"
            value={editEmployee?.phoneNumber || ''}
            onChange={(e) => setEditEmployee({ ...editEmployee, phoneNumber: e.target.value })}
            className="form-control"
          />
        </div>
        <button onClick={handleSaveChanges} className="btn btn-primary">
          Lưu Thay Đổi
        </button>
        <button onClick={closeEditModal} className="btn btn-secondary ml-2">
          Hủy
        </button>
      </Modal>

      {/* Modal xác nhận xóa nhân viên */}
      <Modal isOpen={isDeleteModalOpen} onRequestClose={closeDeleteModal} className="modal">
        <h2>Xác nhận xóa</h2>
        <p>Bạn có chắc chắn muốn xóa nhân viên này không?</p>
        <button onClick={handleDelete} className="btn btn-danger">
          Xóa
        </button>
        <button onClick={closeDeleteModal} className="btn btn-secondary ml-2">
          Hủy
        </button>
      </Modal>
    </div>
  );
};

export default EmployeeProfilesApp;
