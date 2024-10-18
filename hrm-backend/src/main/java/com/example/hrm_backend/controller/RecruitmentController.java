package com.example.hrm_backend.controller;

import com.example.hrm_backend.model.Applicant;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/applicants")
public class RecruitmentController {

    private List<Applicant> applicants = new ArrayList<>();

    // Khởi tạo danh sách ứng viên mẫu
    public RecruitmentController() {
        applicants.add(new Applicant(1L, "Lê Văn C", "levanc@example.com", "0901234567"));
        applicants.add(new Applicant(2L, "Hoàng Thị D", "hoangthid@example.com", "0932123456"));
    }

    // 1. Create (Thêm ứng viên mới)
    @PostMapping
    public Applicant addApplicant(@RequestBody Applicant applicant) {
        applicant.setId((long) (applicants.size() + 1)); // Tạo id mới
        applicants.add(applicant);
        return applicant;
    }

    // 2. Read (Lấy danh sách ứng viên)
    @GetMapping
    public List<Applicant> getAllApplicants() {
        return applicants;
    }

    // 3. Read (Lấy thông tin một ứng viên cụ thể theo ID)
    @GetMapping("/{id}")
    public Applicant getApplicantById(@PathVariable Long id) {
        Optional<Applicant> applicant = applicants.stream()
                .filter(a -> a.getId().equals(id))
                .findFirst();
        return applicant.orElse(null); // Trả về null nếu không tìm thấy
    }

    // 4. Update (Cập nhật thông tin ứng viên)
    @PutMapping("/{id}")
    public Applicant updateApplicant(@PathVariable Long id, @RequestBody Applicant updatedApplicant) {
        for (int i = 0; i < applicants.size(); i++) {
            Applicant app = applicants.get(i);
            if (app.getId().equals(id)) {
                app.setName(updatedApplicant.getName());
                app.setEmail(updatedApplicant.getEmail());
                app.setPhoneNumber(updatedApplicant.getPhoneNumber());
                return app;
            }
        }
        return null; // Trả về null nếu không tìm thấy ứng viên
    }

    // 5. Delete (Xóa ứng viên)
    @DeleteMapping("/{id}")
    public String deleteApplicant(@PathVariable Long id) {
        Optional<Applicant> applicant = applicants.stream()
                .filter(a -> a.getId().equals(id))
                .findFirst();
        if (applicant.isPresent()) {
            applicants.remove(applicant.get());
            return "Ứng viên với ID " + id + " đã được xóa.";
        }
        return "Không tìm thấy ứng viên với ID " + id + ".";
    }
}
