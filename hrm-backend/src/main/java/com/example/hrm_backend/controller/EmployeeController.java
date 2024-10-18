package com.example.hrm_backend.controller;

import com.example.hrm_backend.model.Employee;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/employees")
public class EmployeeController {

    private List<Employee> employees = new ArrayList<>();

    // Khởi tạo danh sách nhân viên mẫu
    public EmployeeController() {
        employees.add(new Employee(1L, "Nguyễn Văn A", "nguyenvana@example.com", "0123456789"));
        employees.add(new Employee(2L, "Trần Thị B", "tranthib@example.com", "0987654321"));
    }

    // 1. Create (Thêm nhân viên mới)
    @PostMapping
    public Employee addEmployee(@RequestBody Employee employee) {
        employee.setId((long) (employees.size() + 1)); 
        employees.add(employee);
        return employee;
    }

    // 2. Read (Lấy danh sách nhân viên)
    @GetMapping
    public List<Employee> getAllEmployees() {
        return employees;
    }

    // 3. Read (Lấy thông tin một nhân viên cụ thể theo ID)
    @GetMapping("/{id}")
    public Employee getEmployeeById(@PathVariable Long id) {
        Optional<Employee> employee = employees.stream()
                .filter(e -> e.getId().equals(id))
                .findFirst();
        return employee.orElse(null); 
    }

    // 4. Update (Cập nhật thông tin nhân viên)
    @PutMapping("/{id}")
    public Employee updateEmployee(@PathVariable Long id, @RequestBody Employee updatedEmployee) {
        for (int i = 0; i < employees.size(); i++) {
            Employee emp = employees.get(i);
            if (emp.getId().equals(id)) {
                emp.setName(updatedEmployee.getName());
                emp.setEmail(updatedEmployee.getEmail());
                emp.setPhoneNumber(updatedEmployee.getPhoneNumber());
                return emp;
            }
        }
        return null;
    }

    // 5. Delete (Xóa nhân viên)
    @DeleteMapping("/{id}")
    public String deleteEmployee(@PathVariable Long id) {
        Optional<Employee> employee = employees.stream()
                .filter(e -> e.getId().equals(id))
                .findFirst();
        if (employee.isPresent()) {
            employees.remove(employee.get());
            return "Nhân viên với ID " + id + " đã được xóa.";
        }
        return "Không tìm thấy nhân viên với ID " + id + ".";
    }
}
