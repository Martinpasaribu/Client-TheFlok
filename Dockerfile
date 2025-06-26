# Menggunakan image Node.js sebagai dasar
FROM node:18-alpine

# Set working directory di dalam container
WORKDIR /app

# Menyalin package.json dan package-lock.json ke container
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Menyalin seluruh file proyek ke container
COPY . .

# Membangun aplikasi (misalnya untuk React)
RUN npm run build

# Mengekspos port yang digunakan oleh aplikasi
EXPOSE 3000

# Menjalankan aplikasi
CMD ["npm", "start"]
