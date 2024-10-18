import React, { useState, useEffect } from "react";
import {
  addEmployee,
  addApplicant,
  deleteApplicant,
  getApplicants,
} from "./api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

const RecruitmentApp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [applicants, setApplicants] = useState([]);

  // Lấy danh sách ứng viên khi component được render
  useEffect(() => {
    const fetchApplicants = async () => {
      const data = await getApplicants();
      setApplicants(data);
    };
    fetchApplicants();
  }, []);

  // Xử lý thêm ứng viên mới
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addApplicant({ name, email, phoneNumber });
      toast.success("Thêm ứng viên thành công!");
      setName("");
      setEmail("");
      setPhoneNumber("");
      const data = await getApplicants();
      setApplicants(data);
    } catch (error) {
      toast.error("Có lỗi xảy ra khi thêm ứng viên.");
    }
  };

  // Xử lý đồng ý tuyển dụng
  const handleAccept = async (applicant) => {
    try {
      // Thêm ứng viên vào danh sách nhân viên
      await addEmployee({
        name: applicant.name,
        email: applicant.email,
        phoneNumber: applicant.phoneNumber,
      });
      // Xóa ứng viên khỏi danh sách ứng viên
      await deleteApplicant(applicant.id);
      toast.success("Đồng ý tuyển dụng ứng viên và thêm vào hồ sơ nhân viên!");
      const data = await getApplicants();
      setApplicants(data);
    } catch (error) {
      toast.error("Có lỗi xảy ra khi đồng ý tuyển dụng.");
    }
  };

  // Xử lý từ chối tuyển dụng
  const handleReject = async (id) => {
    try {
      await deleteApplicant(id);
      toast.success("Đã từ chối tuyển dụng ứng viên!");
      const data = await getApplicants();
      setApplicants(data);
    } catch (error) {
      toast.error("Có lỗi xảy ra khi từ chối tuyển dụng.");
    }
  };

  return (
    <div className="container">
      <ToastContainer />
      <h2 className="recruitment-title">Recruitment Module - Thông Tin Ứng Viên</h2>
      <form onSubmit={handleSubmit} className="recruitment-form">
        <div className="form-group">
          <label>Họ và tên Ứng viên:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>Số Điện Thoại:</label>
          <input
            type="tel"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            required
            className="form-control"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Thêm Ứng Viên
        </button>
      </form>

      <h2 className="mt-4">Danh sách Ứng Viên</h2>
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
          {applicants.map((applicant) => (
            <tr key={applicant.id}>
              <td>{applicant.id}</td>
              <td>{applicant.name}</td>
              <td>{applicant.email}</td>
              <td>{applicant.phoneNumber}</td>
              <td>
                <button
                  onClick={() => handleAccept(applicant)}
                  className="btn btn-success mr-2"
                >
                  Đồng Ý Tuyển Dụng
                </button>
                <button
                  onClick={() => handleReject(applicant.id)}
                  className="btn btn-danger"
                >
                  Từ Chối Tuyển Dụng
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RecruitmentApp;
