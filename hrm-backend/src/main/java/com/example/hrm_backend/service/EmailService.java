package com.example.hrm_backend.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
public class EmailService {

    @Autowired
    private JavaMailSender mailSender;

    public void sendNewApplicantNotification(String name, String email) {
        try {
            // Tạo email thông báo
            String subject = "Thông báo: Ứng viên mới đã được thêm vào hệ thống";
            String body = "Kính gửi,\n\n" +
                          "Một ứng viên mới đã được thêm vào hệ thống với thông tin sau:\n" +
                          "- Họ và tên: " + name + "\n" +
                          "- Email: " + email + "\n\n" +
                          "Trân trọng,\n" +
                          "Hệ thống HRM";
    
            SimpleMailMessage message = new SimpleMailMessage();
            message.setTo("test.alphagenv@gmail.com");
            message.setSubject(subject);
            message.setText(body);
    
            // Gửi email
            System.out.println("Đang gửi email tới: " + email);
            mailSender.send(message);
            System.out.println("Email đã được gửi thành công tới: " + email);
        } catch (Exception e) {
            e.printStackTrace();
            System.out.println("Có lỗi xảy ra khi gửi email: " + e.getMessage());
        }
    }
}
