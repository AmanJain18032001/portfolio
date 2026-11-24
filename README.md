# Personal Portfolio Website

A modern, responsive, full-stack personal portfolio website built to showcase my profile, technical skills, projects, experience, and provide a functional contact system.

The project follows a clean full-stack architecture with a JavaScript frontend, Node.js/Express backend, and MongoDB database.

---

## 🚀 Features

- Fully responsive and mobile-first design
- Modern and professional UI
- Dynamic portfolio content
- Backend-driven profile information
- Dynamic projects section
- Dynamic skills section
- RESTful APIs
- MongoDB database integration
- Contact form with backend validation
- Contact messages stored in MongoDB
- Email notification system
- Secure environment variable configuration
- CORS configuration
- HTTP security headers
- API rate limiting
- Error handling middleware
- MVC / layered backend architecture
- Production-ready project structure
- Git and GitHub ready

---

## 🛠️ Technologies Used

### Frontend

- HTML5
- CSS3
- JavaScript
- Responsive Web Design
- Fetch API

### Backend

- Node.js
- Express.js
- REST API
- Mongoose
- Express Validator

### Database

- MongoDB
- MongoDB Atlas

### Email

- Nodemailer
- SMTP

### Security

- dotenv
- Helmet
- CORS
- Express Rate Limit
- Backend validation

### Development Tools

- VS Code
- Git
- GitHub
- Postman
- Nodemon

---

## 📁 Project Structure

```text
personal-portfolio/
│
├── frontend/
│   │
│   ├── index.html
│   │
│   ├── css/
│   │   └── style.css
│   │
│   ├── js/
│   │   ├── main.js
│   │   ├── projects.js
│   │   └── contact.js
│   │
│   └── assets/
│       ├── images/
│       └── resume/
│
├── backend/
│   │
│   ├── config/
│   │   └── db.js
│   │
│   ├── controllers/
│   │   ├── profileController.js
│   │   ├── projectController.js
│   │   ├── skillController.js
│   │   └── contactController.js
│   │
│   ├── models/
│   │   ├── Profile.js
│   │   ├── Project.js
│   │   ├── Skill.js
│   │   └── Message.js
│   │
│   ├── routes/
│   │   ├── profileRoutes.js
│   │   ├── projectRoutes.js
│   │   ├── skillRoutes.js
│   │   └── contactRoutes.js
│   │
│   ├── middleware/
│   │   └── errorMiddleware.js
│   │
│   ├── utils/
│   │   └── sendEmail.js
│   │
│   ├── .env
│   ├── .env.example
│   ├── .gitignore
│   ├── server.js
│   └── package.json
│
└── README.md
```

---

## ⚙️ Installation

### 1. Clone the repository

```bash
git clone https://github.com/your-username/personal-portfolio.git
```

### 2. Navigate to the project

```bash
cd personal-portfolio
```

### 3. Navigate to backend

```bash
cd backend
```

### 4. Install dependencies

```bash
npm install
```

---

## 🔐 Environment Variables

Create a `.env` file inside the `backend` directory.

```env
PORT=5000

MONGODB_URI=your_mongodb_connection_string

EMAIL_USER=your_email@example.com
EMAIL_PASS=your_email_app_password

CLIENT_URL=http://localhost:5500
```

### Environment variable explanation

| Variable | Description |
|---|---|
| `PORT` | Backend server port |
| `MONGODB_URI` | MongoDB Atlas connection string |
| `EMAIL_USER` | Email account used for notifications |
| `EMAIL_PASS` | Email app password / SMTP password |
| `CLIENT_URL` | Frontend URL |

> Never commit your `.env` file to GitHub.

---

## ▶️ Running the Backend

Inside the `backend` directory:

### Development mode

```bash
npm run dev
```

### Production mode

```bash
npm start
```

The backend will run on:

```text
http://localhost:5000
```

## 🔄 Application Architecture

```text
                    ┌──────────────────┐
                    │     Frontend     │
                    │ HTML/CSS/JS      │
                    └────────┬─────────┘
                             │
                             │ HTTP / REST API
                             ↓
                    ┌──────────────────┐
                    │     Express      │
                    │      Routes      │
                    └────────┬─────────┘
                             │
                             ↓
                    ┌──────────────────┐
                    │   Controllers    │
                    │ Business Logic   │
                    └────────┬─────────┘
                             │
                             ↓
                    ┌──────────────────┐
                    │ Mongoose Models  │
                    └────────┬─────────┘
                             │
                             ↓
                    ┌──────────────────┐
                    │ MongoDB Atlas    │
                    └──────────────────┘
```

---

## 📈 Future Improvements

The project can be extended with:

- Admin dashboard
- JWT authentication
- Admin CRUD operations
- Blog system
- Dark/light theme
- Project filtering
- Search functionality
- Visitor analytics
- Resume management
- Testimonials section
- CMS-style portfolio management
- Docker support
- Automated testing
- CI/CD pipeline

---

## 🎯 Learning Objectives

This project demonstrates practical experience with:
- Frontend development
- Backend development
- REST API development
- MongoDB database design
- MVC architecture
- API validation
- Authentication concepts
- Email integration
- Environment configuration
- Security practices
- Git and GitHub
- Production deployment
---
## 👨‍💻 Author

**Aman Jain**

Full-Stack Developer
