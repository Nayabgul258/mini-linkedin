#  Mini LinkedIn - MERN Stack Community Platform

A mini LinkedIn-like full-stack social platform where users can register, log in, create text posts, and view public profiles and a post feed.

---

**Frontend**: React (Vite), Tailwind CSS, Axios, React Router DOM
- **Backend**: Node.js, Express.js, MongoDB, JWT
- **Deployment**: Render (Frontend + Backend)

---

##  Features

-  User Registration & Login (JWT-based auth)
-  User Profile (with Bio, Email, etc.)
-  Create and View Public Posts
-  User Feed (Home Page)
-  Responsive UI with Tailwind CSS
-  Backend API secured with JWT
-  Axios with Token Interceptors

---

##  Folder Structure
mini-linkedin/
│
├── backend/
│ ├── controllers/
│ ├── models/
│ ├── routes/
│ ├── middleware/
│ └── server.js
│
├── frontend/
│ ├── public/
│ ├── src/
│ │ ├── components/
│ │ ├── pages/
│ │ ├── App.jsx
│ │ └── main.jsx
│ └── vite.config.js
│
└── README.md

---

##  Getting Started

###  Prerequisites

- Node.js (v18+)
- MongoDB installed locally or use [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)

---

###  Backend Setup

```bash
cd backend
npm install
Create a .env file in /backend:

env
Copy
Edit
PORT=5000
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
Run backend:
```

```bash

npm start
💻 Frontend Setup
bash
Copy
Edit
cd frontend
npm install
npm run dev
App runs on http://localhost:5173 (Vite default)
```
 API Routes
Auth Routes
Method	Endpoint	Description
POST	/api/auth/register	Register new user
POST	/api/auth/login	Login user

Post Routes
Method	Endpoint	Description
GET	/api/posts	Get all posts
POST	/api/posts	Create a post (auth)
GET	/api/posts/user/:userId	Get posts by user

User Routes
Method	Endpoint	Description
GET	/api/users/:id	Get user by ID

 Frontend Routes
Path	Description
/	Home - Feed
/register	Register page
/login	Login page
/profile/:id	Profile page

 

 License
This project is licensed under the MIT License.


 Author
Developed by Nayab Gul



---




