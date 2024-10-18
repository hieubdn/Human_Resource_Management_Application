package com.example.hrm_backend.controller;

import com.example.hrm_backend.model.Applicant;
import com.example.hrm_backend.service.ApplicantService;
import com.example.hrm_backend.service.EmailService;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/sendemail")
@CrossOrigin(origins = {"http://localhost:3000", "http://localhost:3001", "http://localhost:3002"})
public class ApplicantController {

    private final ApplicantService applicantService;
    private final EmailService emailService;

    // Constructor injection
    public ApplicantController(ApplicantService applicantService, EmailService emailService) {
        this.applicantService = applicantService;
        this.emailService = emailService;
    }

   @PostMapping
public ResponseEntity<Applicant> addApplicant(@RequestBody Applicant applicant) {
    try {
        // Thêm ứng viên mới
        Applicant newApplicant = applicantService.addApplicant(applicant);

        // Gửi email thông báo khi có ứng viên mới
        emailService.sendNewApplicantNotification(newApplicant.getName(), newApplicant.getEmail());

        return ResponseEntity.ok(newApplicant);
    } catch (Exception e) {
        e.printStackTrace();
        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
    }
}

}
