# Sử dụng image của Node.js để build và chạy ứng dụng
FROM node:18
WORKDIR /app
COPY . .
RUN npm install
EXPOSE 3002
CMD ["npm", "start"]
