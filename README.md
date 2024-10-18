# Hệ thống HRM với kiến trúc Micro Frontend

## Tổng quan
Hệ thống HRM này được phát triển bằng kiến trúc Micro Frontend, bao gồm các module độc lập được tích hợp vào ứng dụng tổng thể. Hệ thống được xây dựng với mục tiêu có khả năng phát triển và triển khai độc lập cho từng module, đồng thời cung cấp trải nghiệm điều hướng mượt mà giữa các phần của ứng dụng.

## Kiến trúc Micro Frontend
- **Webpack Module Federation**: Được sử dụng để tích hợp các module phụ vào ứng dụng HRM tổng thể.
- **Mỗi module**: Mỗi module frontend có cấu trúc và hệ thống build riêng biệt, có khả năng phát triển và triển khai độc lập.
- **HRM-main**: Là module chính quản lý toàn bộ ứng dụng, có menu để điều hướng tới các module "Tuyển dụng" và "Hồ sơ nhân viên".

## Frontend
- **Ngôn ngữ lập trình**: Sử dụng **React** để phát triển các module frontend.
- **Các module**:
  - **HRM-main**: Module chính quản lý ứng dụng, chứa menu và điều hướng tới các module phụ.
  -  **Tuyển dụng**: Module phụ để quản lý thông tin tuyển dụng nhân viên.
  - **Hồ sơ nhân viên**: Module phụ để quản lý hồ sơ nhân viên.

## Yêu cầu UI
- **Giao diện đơn giản** với các biểu mẫu cơ bản để nhập thông tin ứng viên trong module **"Tuyển dụng"**.
- **Hiển thị danh sách nhân viên** trong module **"Hồ sơ nhân viên"**.
- **Menu trong HRM-main** để điều hướng tới các module tương ứng.

## Backend
- **Ngôn ngữ lập trình**: Sử dụng **Java** cho backend, và giả lập backend bằng **Spring Boot**.
- **API**: Mỗi module sẽ gọi API tới backend để lấy dữ liệu. API sẽ trả về dữ liệu giả như danh sách nhân viên, danh sách ứng viên với các thông tin cơ bản như tên, email và số điện thoại.

## Yêu cầu kỹ thuật
1. **Tích hợp Micro Frontend**:
   - Tích hợp thành công các module frontend bằng **Webpack Module Federation**.

2. **Giả lập API Backend**:
   - Sử dụng **Spring Boot** để giả lập các API và trả về dữ liệu cần thiết cho các module phụ.

3. **Chạy ứng dụng từ HRM-main**:
   - Toàn bộ ứng dụng nên chạy từ module **HRM-main**, đảm bảo điều hướng mượt mà giữa các module phụ.
