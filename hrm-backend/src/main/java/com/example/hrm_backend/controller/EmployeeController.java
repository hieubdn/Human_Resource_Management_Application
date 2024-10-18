package com.example.hrm_backend.controller;

import com.example.hrm_backend.model.Employee;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/employees")
@CrossOrigin(origins = {"http://localhost:3000", "http://localhost:3001", "http://localhost:3002"})
public class EmployeeController {

    private List<Employee> employees = new ArrayList<>();

    // Khởi tạo danh sách nhân viên mẫu
    public EmployeeController() {
        employees.add(new Employee(1L, "Nguyễn Văn A", "nguyenvana@example.com", "0123456789"));
        employees.add(new Employee(2L, "Trần Thị B", "tranthib@example.com", "0987654321"));
    }

    // 1. Create (Thêm nhân viên mới)
    @PostMapping
    public ResponseEntity<Employee> addEmployee(@RequestBody Employee employee) {
        employee.setId((long) (employees.size() + 1));
        employees.add(employee);
        return ResponseEntity.status(HttpStatus.CREATED).body(employee);
    }

    // 2. Read (Lấy danh sách nhân viên)
    @GetMapping
    public ResponseEntity<List<Employee>> getAllEmployees() {
        return ResponseEntity.ok(employees);
    }

    // 3. Read (Lấy thông tin một nhân viên cụ thể theo ID)
    @GetMapping("/{id}")
    public ResponseEntity<Employee> getEmployeeById(@PathVariable Long id) {
        Optional<Employee> employee = employees.stream()
                .filter(e -> e.getId().equals(id))
                .findFirst();
        return employee.map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.status(HttpStatus.NOT_FOUND).body(null));
    }

    // 4. Update (Cập nhật thông tin nhân viên)
    @PutMapping("/{id}")
    public ResponseEntity<Employee> updateEmployee(@PathVariable Long id, @RequestBody Employee updatedEmployee) {
        for (int i = 0; i < employees.size(); i++) {
            Employee emp = employees.get(i);
            if (emp.getId().equals(id)) {
                emp.setName(updatedEmployee.getName());
                emp.setEmail(updatedEmployee.getEmail());
                emp.setPhoneNumber(updatedEmployee.getPhoneNumber());
                return ResponseEntity.ok(emp);
            }
        }
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
    }

    // 5. Delete (Xóa nhân viên)
    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteEmployee(@PathVariable Long id) {
        Optional<Employee> employee = employees.stream()
                .filter(e -> e.getId().equals(id))
                .findFirst();
        if (employee.isPresent()) {
            employees.remove(employee.get());
            return ResponseEntity.ok("Nhân viên với ID " + id + " đã được xóa.");
        }
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Không tìm thấy nhân viên với ID " + id + ".");
    }
}
