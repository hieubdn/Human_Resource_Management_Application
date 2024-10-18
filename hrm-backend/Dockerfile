# Sử dụng image của Maven để build ứng dụng
FROM maven:3.8.5-openjdk-17 AS build
WORKDIR /app
COPY . .
RUN mvn clean package -DskipTests

# Sử dụng image của OpenJDK để chạy ứng dụng
FROM openjdk:17
WORKDIR /app
COPY --from=build /app/target/hrm-backend-0.0.1-SNAPSHOT.jar hrm-backend.jar
EXPOSE 8080
ENTRYPOINT ["java", "-jar", "hrm-backend.jar"]
