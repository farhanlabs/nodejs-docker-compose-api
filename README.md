# 🚀 Node.js Dockerized API

A simple Node.js API application fully containerized using Docker and Docker Compose.
This project demonstrates basic DevOps practices including containerization, service orchestration, and API deployment.

---

## 📌 Features

* ⚡ Express.js REST API
* 🐳 Dockerized application
* ⚙️ Docker Compose setup
* 🌐 Exposed API endpoint
* 📊 Health & status dashboard
* 🔄 Auto restart container

---

## 🛠️ Tech Stack

* Node.js
* Express.js
* Docker
* Docker Compose

---

## 📂 Project Structure

```
.
├── Dockerfile
├── docker-compose.yml
├── index.js
├── package.json
└── README.md
```

---

## 🚀 Getting Started

### 1️⃣ Clone the repository

```
git clone https://github.com/your-username/node-docker-api.git
cd node-docker-api
```

---

### 2️⃣ Run using Docker Compose

```
docker compose up --build
```

---

### 3️⃣ Access the application

👉 Open browser:
http://localhost:8080

---

## 📡 API Endpoints

| Method | Endpoint | Description   |
| ------ | -------- | ------------- |
| GET    | `/`      | Dashboard UI  |
| GET    | `/api`   | JSON response |

---

## 🐳 Docker Commands

### Build Image

```
docker build -t api .
```

### Run Container

```
docker run -p 8080:8080 api
```

---

## ⚙️ Docker Compose

```
docker compose up -d
```

---

## 📊 Sample Response

```
{
  "status": "success",
  "message": "API is working"
}
```

---

## 💡 DevOps Concepts Used

* Containerization using Docker
* Service orchestration with Docker Compose
* Port mapping & environment configuration
* Application deployment workflow

---

## 👨‍💻 Author

**Md Farhan Rza**

---

## ⭐ Support

If you like this project, give it a ⭐ on GitHub!
