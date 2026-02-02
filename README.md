
# 💸 Expense Tracker

Expense Tracker is a full-stack, modern web application for tracking your income and expenses. It features a beautiful, responsive UI with smooth animations, interactive charts, and a secure backend. Built with React (Vite + Tailwind CSS) and Node.js/Express, it helps you visualize and manage your finances with ease.

![License](https://img.shields.io/badge/license-ISC-blue.svg)
![Node](https://img.shields.io/badge/node-%3E%3D18.0.0-green.svg)
![React](https://img.shields.io/badge/react-19.2.0-61dafb.svg)

## 🌐 Live Demo

🚀 **[View Live App](https://my-expense-tracker-theta-three.vercel.app)**

Experience the app in action! Register, add transactions, and explore the dashboard.

---

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Deployment](#deployment)
- [API Documentation](#api-documentation)
- [Frontend Architecture](#frontend-architecture)
- [Backend Architecture](#backend-architecture)
- [Environment Variables](#environment-variables)
- [Contributing](#contributing)

---

## 🎯 Overview

Expense Tracker lets you:
- Register and log in securely (with profile photo upload)
- Add, edit, and delete income and expenses with categories
- Visualize your finances with interactive charts (bar, line, pie)
- Export your data to Excel for offline analysis
- Enjoy a fast, mobile-friendly UI with smooth animations and a modern design

Perfect for personal finance management, budgeting, and tracking spending habits.

## ✨ Features

- **Authentication**: Secure signup/login, JWT, profile photo
- **Dashboard**: Animated cards, charts, and real-time stats
- **Income/Expense Management**: Add, delete, categorize, and export
- **Modern UI**: Responsive, animated, and theme-consistent
- **API**: RESTful endpoints for all core features



## 🛠 Tech Stack

**Frontend:**
- React 19 (Vite)
- Tailwind CSS
- React Router DOM
- Axios
- Recharts (charts)
- React Icons
- React Hot Toast
- Moment.js
- Emoji Picker React

**Backend:**
- Node.js + Express
- MongoDB (Mongoose)
- JWT, bcryptjs
- Multer (file upload)
- XLSX (Excel export)
- CORS, dotenv



## 📁 Project Structure

```
ExpenseTracker/
├── backend/                    # Node.js Backend
│   ├── config/
│   │   └── db.js              # Database configuration
│   ├── controllers/           # Route controllers (business logic)
│   ├── middleware/
│   │   └── authMiddleware.js  # JWT authentication middleware
│   ├── models/
│   │   ├── User.js            # User schema
│   │   ├── Income.js          # Income schema
│   │   └── Expense.js         # Expense schema
│   ├── routes/
│   │   ├── authRoutes.js      # Authentication routes
│   │   ├── dashboardRoutes.js # Dashboard routes
│   │   ├── incomeRoutes.js    # Income CRUD routes
│   │   └── expenseRoutes.js   # Expense CRUD routes
│   ├── uploads/               # Uploaded files storage
│   ├── .env                   # Environment variables
│   ├── server.js              # Express app entry point
│   └── package.json
│
└── frontend/
    └── expense-tracker/        # React Frontend
      ├── public/             # Static assets
      ├── src/
      │   ├── assets/         # Images, fonts, etc.
      │   ├── components/     # All UI components (cards, layouts, charts, etc.)
      │   ├── context/        # React Context providers
      │   ├── hooks/          # Custom React hooks
      │   ├── pages/          # Auth & dashboard pages
      │   ├── utils/          # API paths, helpers, constants
      │   ├── App.jsx         # Main app component with routing
      │   ├── main.jsx        # React entry point
      │   └── index.css       # Global styles & Tailwind config
      ├── index.html
      ├── vite.config.js
      ├── eslint.config.js
      └── package.json
```


## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- MongoDB (local or Atlas)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/ExpenseTracker.git
   cd ExpenseTracker
   ```

2. **Backend Setup**
   ```bash
   cd backend
   npm install
   ```

3. **Frontend Setup**
   ```bash
   cd frontend/expense-tracker
   npm install
   ```

4. **Environment Configuration**
   
   Create a `.env` file in the `backend` directory:
   ```env
   PORT=5000
   CLIENT_URL=http://localhost:5173
   MONGODB_URI=mongodb://localhost:27017/expense-tracker
   JWT_SECRET=your_super_secret_key
   ```

### Running the Application

1. **Start the Backend Server**
   ```bash
   cd backend
   npm run dev    # Development mode with nodemon
   # or
   npm start      # Production mode
   ```

2. **Start the Frontend Development Server**
   ```bash
   cd frontend/expense-tracker
   npm run dev
   ```

3. **Access the Application**
   - Frontend: http://localhost:5173
   - Backend API: http://localhost:5000

## 🚀 Deployment

The app is fully deployed and ready to use! For detailed deployment steps, see [DEPLOYMENT.md](./DEPLOYMENT.md).

### Quick Deploy Summary
- **Backend**: Hosted on Render (Node.js + MongoDB Atlas)
- **Frontend**: Hosted on Vercel (React SPA)
- **Database**: MongoDB Atlas (cloud-hosted)
- **Live URLs**:
  - Frontend: https://my-expense-tracker-theta-three.vercel.app
  - Backend API: https://expense-tracker-backend-x1vj.onrender.com

### Deployment Platforms
- **Render**: Free tier for backend (auto-sleeps after inactivity)
- **Vercel**: Free tier for frontend
- **MongoDB Atlas**: Free tier for database

To deploy your own instance, follow the guide in `DEPLOYMENT.md`.


## 📡 API Documentation

### Authentication Endpoints

| Method | Endpoint | Description |
|--------|--------------------------|-----------------------------|
| POST   | `/api/v1/auth/register`  | Register a new user         |
| POST   | `/api/v1/auth/login`     | Login user                  |
| GET    | `/api/v1/auth/user`      | Get user profile (protected)|
| POST   | `/api/v1/auth/upload-image` | Upload profile image      |

### Income Endpoints

| Method | Endpoint                | Description                 |
|--------|-------------------------|-----------------------------|
| GET    | `/api/v1/incomes`       | Get all income entries      |
| POST   | `/api/v1/incomes`       | Create new income           |
| DELETE | `/api/v1/incomes/:id`   | Delete income entry         |
| GET    | `/api/v1/incomes/download/excel` | Download income as Excel |

### Expense Endpoints

| Method | Endpoint                | Description                 |
|--------|-------------------------|-----------------------------|
| GET    | `/api/v1/expenses`      | Get all expenses            |
| POST   | `/api/v1/expenses`      | Create new expense          |
| DELETE | `/api/v1/expenses/:id`  | Delete expense              |
| GET    | `/api/v1/expenses/download/excel` | Download expenses as Excel |

### Dashboard Endpoint

| Method | Endpoint           | Description                  |
|--------|--------------------|------------------------------|
| GET    | `/api/v1/dashboard`| Get dashboard statistics     |

## 🧪 API Testing


You can test the backend API using the provided `.http` files in `rest-client-tests/` (with the REST Client VS Code extension) or the `run-tests.ps1` PowerShell script in the backend folder:

```bash
cd backend
./run-tests.ps1
```

This script will:
- Register and log in a user
- Test all protected endpoints (income, expense, dashboard)
- Print results for each API call

---


## 🎨 Frontend Architecture

### Component Hierarchy

```
App
├── AuthLayout (for login/signup pages)
│   ├── Login
│   │   └── Input (reusable)
│   └── SignUp
│       ├── ProfilePhotoSelector
│       └── Input (reusable)
└── Dashboard
    ├── Home
    ├── Income
    └── Expense
```

### Routing Structure

| Route | Component | Description |
|-------|-----------|-------------|
| `/` | Root | Redirects based on auth status |
| `/login` | Login | User login page |
| `/signup` | SignUp | User registration page |
| `/home` | Home | Dashboard home page |
| `/expense` | Expense | Expense management |
| `/income` | Income | Income management |


### Styling & Animations

- **Tailwind CSS** with custom configuration
- **Primary Color**: `#875cf5` (Purple)
- **Font Family**: Poppins
- **Background**: `#fcfbfc`
- **Modern Animations**: Cards, buttons, and backgrounds feature smooth transitions and money-themed effects


## 🔧 Backend Architecture

### Server Configuration

The Express server (`server.js`) includes:
- CORS configuration for frontend communication
- JSON body parsing middleware
- Static file serving for uploads

### Middleware

- **authMiddleware.js**: JWT token verification for protected routes

### Database Models

- **User**: User account information with profile picture
- **Income**: Income entries with amount, category, date
- **Expense**: Expense entries with amount, category, date


## 🔐 Environment Variables

### Backend (.env)

| Variable | Description | Default |
|----------|-------------|---------|
| `PORT` | Server port | 5000 |
| `CLIENT_URL` | Frontend URL for CORS | http://localhost:3000 |
| `MONGODB_URI` | MongoDB connection string | - |
| `JWT_SECRET` | Secret key for JWT tokens | - |


## 📝 Scripts

### Backend
```bash
npm start     # Start production server
npm run dev   # Start development server with hot reload
```

### Frontend
```bash
npm run dev      # Start Vite development server
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Run ESLint
```


## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 🙏 Acknowledgments

- Built with ❤️ using modern web technologies
- Icons from React Icons
- Charts powered by Recharts
- UI inspired by financial apps for intuitive design

## 📄 License

This project is licensed under the ISC License.

## 👤 Author

**MESSAOUDI Ishak**

---

⭐ Star this repo if you find it helpful!
