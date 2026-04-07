# 🚀 Node.js Dockerized API

A production-ready Node.js API application fully containerized using Docker and Docker Compose, deployed on AWS EC2 with NGINX reverse proxy, secured using HTTPS, and automated using GitHub Actions CI/CD.

---

## 📌 Features

* ⚡ Express.js REST API
* 🐳 Dockerized application
* ⚙️ Docker Compose orchestration
* ☁️ Deployed on AWS EC2
* 🌐 NGINX reverse proxy (port 80 → 8080)
* 🔒 HTTPS enabled using Let's Encrypt
* 🌍 Free domain using DuckDNS
* 🔄 Automated CI/CD using GitHub Actions
* 📊 Health & status dashboard
* 🔁 Auto restart container

---

## 🛠️ Tech Stack

* Node.js
* Express.js
* Docker
* Docker Compose
* AWS EC2 (Ubuntu)
* NGINX
* Certbot (Let's Encrypt)
* DuckDNS
* GitHub Actions (CI/CD)

---

## 📂 Project Structure

```
.
├── Dockerfile
├── docker-compose.yml
├── index.js
├── package.json
├── .github/
│   └── workflows/
│       └── deploy.yml
└── README.md
```

---

## 🚀 Getting Started (Local Setup)

### 1️⃣ Clone the repository

```
git clone https://github.com/farhanlabs/nodejs-docker-compose-api.git
cd nodejs-docker-compose-api
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
docker compose up -d --build
```

---

## ☁️ AWS EC2 Deployment

### Steps Performed:

1. Launched EC2 instance (Ubuntu 24.04)
2. Configured Security Group:

   * SSH → 22
   * HTTP → 80
   * HTTPS → 443
   * App → 8080
3. Connected via SSH
4. Installed Docker, Git & NGINX
5. Cloned GitHub repository
6. Built and ran container using Docker Compose

---

## 🌐 Domain Setup (DuckDNS)

Free domain used:

```
node-deploy.duckdns.org
```

Mapped domain to EC2 public IP.

---

## 🔁 NGINX Reverse Proxy

NGINX routes incoming traffic from port 80 to Node.js app running on port 8080.

### Configuration:

```
server {
    listen 80;
    server_name node-deploy.duckdns.org;

    location / {
        proxy_pass http://localhost:8080;
    }
}
```

---

## 🔒 HTTPS Setup (SSL)

SSL configured using Let's Encrypt via Certbot.

### Command:

```
sudo certbot --nginx
```

### Secure URL:

```
https://node-deploy.duckdns.org
```

---

## ⚙️ CI/CD with GitHub Actions

Automated deployment pipeline triggers on every push to the main branch.

### Workflow Highlights:

* Connects to EC2 via SSH
* Pulls latest code
* Rebuilds Docker containers
* Restarts application automatically

---

## 🧠 Architecture

```
User (Browser)
       ↓
Domain (DuckDNS)
       ↓
NGINX (Port 80 / 443)
       ↓
Node.js App (Port 8080)
       ↓
Docker Container
       ↓
AWS EC2 Server
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
* Cloud deployment on AWS EC2
* Reverse proxy using NGINX
* Domain mapping using DuckDNS
* HTTPS setup using Let's Encrypt
* CI/CD automation using GitHub Actions
* Networking (ports, security groups)
* End-to-end deployment pipeline

---

## 👨‍💻 Author

**Farhan Raza**

---

## ⭐ Support

If you like this project, give it a ⭐ on GitHub!
