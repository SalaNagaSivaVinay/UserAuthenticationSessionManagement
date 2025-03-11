# User Authentication and Session Management

This project implements a secure User Authentication and Session Management system using **Node.js**, **Express**, **MongoDB**, and **Redis**.

## 📋 Features
- **User Registration:** Secure registration with hashed passwords.
- **User Login:** Secure login with JWT-based authentication.
- **Session Management:** Efficient session handling using Redis.
- **Access Control:** Protected routes with middleware enforcement.
- **Password Reset:** Secure password reset with email token verification.
- **Logging:** Tracks authentication and session-related activities.

---

## 🛠️ Installation
1. **Clone the repository:**
```bash
git clone <repository-link>
cd auth-system
```

2. **Install dependencies:**
```bash
npm install
```

3. **Create a `.env` file in the root directory:**
```
PORT=5000
MONGO_URI=mongodb://localhost:27017/auth-system
REDIS_URI=redis://localhost:6379
JWT_SECRET=your_jwt_secret
```

4. **Start the application:**
```bash
npm start
```

---

## 📄 API Endpoints
### **User Registration**
- **URL:** `POST /auth/register`
- **Body:**
```json
{
  "username": "exampleUser",
  "email": "user@example.com",
  "password": "securepassword"
}
```
- **Response:**
```json
{
  "message": "User registered successfully"
}
```

### **User Login**
- **URL:** `POST /auth/login`
- **Body:**
```json
{
  "username": "exampleUser",
  "password": "securepassword"
}
```
- **Responses:**
- Success: `{ "message": "Login successful" }`
- Invalid Password: `{ "message": "Invalid password" }`
- User Not Found: `{ "message": "User not found" }`

### **Logout**
- **URL:** `POST /auth/logout`
- **Response:**
```json
{
  "message": "Logged out successfully"
}
```

---

## 🧪 Testing
1. Use **Postman** or **Thunder Client** to test endpoints.
2. Ensure MongoDB and Redis are running during testing.

---

## ⚙️ Technologies Used
- **Node.js**
- **Express.js**
- **MongoDB**
- **Redis**
- **bcrypt** (Password Hashing)
- **jsonwebtoken** (JWT Authentication)
- **dotenv** (Environment Variables)

---

## 📂 Folder Structure
```
/auth-system
 ┣ /config
 ┃ ┣ db.js
 ┃ ┗ redis.js
 ┣ /middleware
 ┃ ┗ errorHandler.js
 ┣ /routes
 ┃ ┗ authRoutes.js
 ┣ .env
 ┣ index.js
 ┣ README.md
 ┗ package.json
```

---

## 📢 Important Notes
- The `.env` file should NOT be included in the GitHub repository for security reasons.
- Ensure MongoDB and Redis are running before starting the application.

---

## 🧑‍💻 Author
**Sala Naga Siva Vinay**

