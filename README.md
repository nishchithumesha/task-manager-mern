# 🚀 MERN Task Manager

A modern full-stack Task Management Application built using the MERN Stack (MongoDB, Express.js, React.js, Node.js). The application provides secure user authentication and allows users to manage their daily tasks efficiently through a clean and responsive dashboard.

---

## 📌 Project Overview

The MERN Task Manager is designed to help users organize and track their tasks. Users can register, log in securely using JWT authentication, create new tasks, update task status, delete tasks, and manage their work through a user-friendly interface.

---

## ✨ Features

### 🔐 Authentication

* User Registration
* User Login
* JWT-Based Authentication
* Protected Routes
* Secure Logout

### 📝 Task Management

* Create Tasks
* View Tasks
* Delete Tasks
* Toggle Task Status (Pending / Completed)
* User-Specific Task Access

### 🎨 Frontend Features

* Modern Responsive UI
* React Router Navigation
* Dashboard Interface
* Task Cards
* Real-Time Updates

---

## 🛠️ Tech Stack

### Frontend

* React.js
* React Router DOM
* Axios
* CSS3

### Backend

* Node.js
* Express.js

### Database

* MongoDB Atlas

### Authentication

* JSON Web Token (JWT)

### Tools

* VS Code
* Git
* GitHub
* Thunder Client

---

## 📂 Project Structure

```text
Task-Manager-MERN
│
├── client
│   ├── src
│   │   ├── pages
│   │   ├── services
│   │   ├── App.jsx
│   │   └── App.css
│
├── server
│   ├── config
│   ├── controllers
│   ├── middleware
│   ├── models
│   ├── routes
│   └── server.js
│
└── README.md
```

---

## 🔄 Application Workflow

```text
User
 ↓
Register/Login
 ↓
JWT Token Generated
 ↓
Token Stored in Local Storage
 ↓
Protected Dashboard Access
 ↓
Create / View / Delete / Toggle Tasks
 ↓
MongoDB Database
```

---

## 📸 Screenshots

### Login Page

(Add Screenshot Here)

### Register Page

(Add Screenshot Here)

### Dashboard

(Add Screenshot Here)

### Task Management

(Add Screenshot Here)

---

## 🚀 Installation

### Clone Repository

```bash
git clone https://github.com/YOUR_USERNAME/task-manager-mern.git
```

### Backend Setup

```bash
cd server
npm install
```

Create `.env`

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

Run Backend

```bash
node server.js
```

### Frontend Setup

```bash
cd client
npm install
npm run dev
```

---

## 🎯 Learning Outcomes

This project helped in understanding:

* MERN Stack Architecture
* REST API Development
* JWT Authentication
* React Hooks (useState, useEffect)
* React Router
* Axios Integration
* MongoDB CRUD Operations
* Protected Routes
* Full Stack Development

---

## 🔮 Future Enhancements

* Edit Task Functionality
* Search Tasks
* Filter Tasks
* Due Date Management
* Dark Mode
* User Profile Management
* Cloud Deployment

---

## 👨‍💻 Author

**Nishchith U**

Final Year Information Science Engineering Student

MERN Stack Developer | Full Stack Enthusiast
