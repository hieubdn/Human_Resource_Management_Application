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


# HRM Application Setup Guide

This guide will help you set up the HRM Application on your local machine step by step, including cloning the repository, installing required dependencies, and running the application using Docker.

## Prerequisites

Before starting, make sure you have the following software installed on your machine:

- **Git**: [Install Git](https://git-scm.com/downloads)
- **Docker Desktop**: [Install Docker](https://www.docker.com/products/docker-desktop/)
- **VS Code (Optional)**: [Download VS Code](https://code.visualstudio.com/)

## Step-by-Step Setup Guide

### Step 1: Clone the Repository

1. Open a terminal or command prompt.
2. Clone the repository from GitHub using the following command:

   ```sh
   git clone https://github.com/hieubdn/HRM-Application.git
   ```
3. Navigate into the cloned repository:

   ```sh
   cd HRM-Application
   ```

### Step 2: Start Docker Desktop

1. **Open Docker Desktop** on your machine.
2. Wait until Docker Engine has started successfully. You should see a green "Running" indicator on Docker Desktop.

### Step 3: Build and Start the Application with Docker

1. In the terminal (still inside the `HRM-Application` directory), run the following command to build and start all services defined in the `docker-compose.yml` file:

   ```sh
   docker-compose up --build
   ```

2. Docker will pull necessary images, build the containers, and start the services for the HRM Application. This may take a few minutes.

### Step 4: Access the Application

- Once all services are up and running, you can access different modules of the application in your web browser:
  - **HRM Main Application**: [http://localhost:3000](http://localhost:3000)
  - **Recruitment Module**: [http://localhost:3001](http://localhost:3001)
  - **Employee Profiles Module**: [http://localhost:3002](http://localhost:3002)

### Step 5: Stopping the Application

1. To stop the application, go to your terminal where `docker-compose` is running and press `Ctrl + C` to stop the running containers.
2. If you want to remove all containers, networks, and volumes created by Docker, run:

   ```sh
   docker-compose down
   ```

## Notes

- **Docker Desktop** must be running before you attempt to start the application with Docker.
- Make sure no other services are using ports `3000`, `3001`, `3002`, or `8080` to avoid conflicts.
- If you face any issues, make sure to check the Docker logs for troubleshooting.

## Common Issues

- **Port Conflicts**: If any of the above ports are already in use, either stop the service using that port or modify the `docker-compose.yml` file to use different ports.
- **Docker Engine Not Running**: Ensure Docker Desktop is open and running before running the `docker-compose` command.

## Future Updates

- If you update the code and want to run the updated version, run:
  ```sh
  git pull
  docker-compose up --build





# Hướng Dẫn Cài Đặt HRM Application

Hướng dẫn này sẽ giúp bạn thiết lập HRM Application trên máy tính của bạn từng bước một, bao gồm việc clone repo, cài đặt các phụ thuộc cần thiết, và chạy ứng dụng bằng Docker.

## Yêu Cầu Trước Khi Bắt Đầu

Trước khi bắt đầu, hãy đảm bảo rằng bạn đã cài đặt các phần mềm sau trên máy tính của mình:

- **Git**: [Cài Đặt Git](https://git-scm.com/downloads)
- **Docker Desktop**: [Cài Đặt Docker](https://www.docker.com/products/docker-desktop/)
- **VS Code (Không bắt buộc)**: [Tải VS Code](https://code.visualstudio.com/)

## Hướng Dẫn Chi Tiết

### Bước 1: Clone Repo

1. Mở terminal hoặc command prompt.
2. Clone repo từ GitHub bằng lệnh sau:

   ```sh
   git clone https://github.com/hieubdn/HRM-Application.git
   ```
3. Di chuyển vào thư mục vừa clone:

   ```sh
   cd HRM-Application
   ```

### Bước 2: Khởi Động Docker Desktop

1. **Mở Docker Desktop** trên máy của bạn.
2. Đợi đến khi Docker Engine khởi động thành công. Bạn sẽ thấy chỉ báo màu xanh lá với trạng thái "Running" trên Docker Desktop.

### Bước 3: Build và Chạy Ứng Dụng Với Docker

1. Trong terminal (vẫn đang ở thư mục `HRM-Application`), chạy lệnh sau để build và chạy tất cả các dịch vụ được định nghĩa trong file `docker-compose.yml`:

   ```sh
   docker-compose up --build
   ```

2. Docker sẽ tải các image cần thiết, build các container, và khởi động các dịch vụ cho HRM Application. Quá trình này có thể mất vài phút.

### Bước 4: Truy Cập Ứng Dụng

- Khi tất cả các dịch vụ đã khởi động, bạn có thể truy cập các module của ứng dụng trong trình duyệt:
  - **HRM Main Application**: [http://localhost:3000](http://localhost:3000)
  - **Recruitment Module**: [http://localhost:3001](http://localhost:3001)
  - **Employee Profiles Module**: [http://localhost:3002](http://localhost:3002)

### Bước 5: Dừng Ứng Dụng

1. Để dừng ứng dụng, vào terminal nơi đang chạy `docker-compose` và nhấn `Ctrl + C` để dừng các container đang chạy.
2. Nếu bạn muốn xóa tất cả các container, network, và volume được tạo bởi Docker, chạy lệnh:

   ```sh
   docker-compose down
   ```

## Lưu Ý

- **Docker Desktop** phải được khởi động trước khi bạn chạy ứng dụng với Docker.
- Hãy chắc chắn rằng không có dịch vụ nào khác đang sử dụng các cổng `3000`, `3001`, `3002`, hoặc `8080` để tránh xung đột.
- Nếu gặp phải vấn đề, hãy kiểm tra log của Docker để khắc phục sự cố.

## Các Vấn Đề Thường Gặp

- **Xung Đột Cổng**: Nếu một trong các cổng trên đã được sử dụng, hãy dừng dịch vụ đang sử dụng cổng đó hoặc sửa file `docker-compose.yml` để sử dụng các cổng khác.
- **Docker Engine Không Chạy**: Đảm bảo Docker Desktop đã được mở và đang chạy trước khi thực hiện lệnh `docker-compose`.

## Cập Nhật Mới

- Nếu bạn cập nhật mã và muốn chạy phiên bản đã cập nhật, hãy chạy:
  ```sh
  git pull
  docker-compose up --build
  ```

