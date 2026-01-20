# 💰 Expense Tracker

A full-stack expense tracking application built with React and Node.js that helps users manage their income and expenses efficiently.

![License](https://img.shields.io/badge/license-ISC-blue.svg)
![Node](https://img.shields.io/badge/node-%3E%3D18.0.0-green.svg)
![React](https://img.shields.io/badge/react-19.2.0-61dafb.svg)

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [API Documentation](#api-documentation)
- [Frontend Architecture](#frontend-architecture)
- [Backend Architecture](#backend-architecture)
- [Environment Variables](#environment-variables)
- [Contributing](#contributing)

## 🎯 Overview

Expense Tracker is a modern web application designed to help users track their financial activities. Users can register, log in, and manage their income and expenses through an intuitive dashboard interface.

## ✨ Features

- **User Authentication**
  - Secure signup with profile photo upload
  - Login with email and password
  - JWT-based authentication
  - Password visibility toggle

- **Dashboard**
  - Overview of income and expenses
  - Visual statistics and charts
  - Real-time data updates

- **Income Management**
  - Add, edit, and delete income entries
  - Categorize income sources

- **Expense Management**
  - Track daily expenses
  - Categorize expenses
  - Export data to Excel

## 🛠 Tech Stack

### Frontend
| Technology | Version | Purpose |
|------------|---------|---------|
| React | 19.2.0 | UI Library |
| Vite | 7.2.4 | Build Tool |
| Tailwind CSS | 4.1.18 | Styling |
| React Router DOM | 7.12.0 | Routing |
| Axios | 1.13.2 | HTTP Client |
| Recharts | 3.6.0 | Charts & Visualization |
| React Icons | 5.5.0 | Icon Library |
| React Hot Toast | 2.6.0 | Notifications |
| Moment.js | 2.30.1 | Date Formatting |
| Emoji Picker React | 4.16.1 | Emoji Selection |

### Backend
| Technology | Version | Purpose |
|------------|---------|---------|
| Node.js | - | Runtime Environment |
| Express | 5.2.1 | Web Framework |
| MongoDB (Mongoose) | - | Database |
| JWT | 9.0.3 | Authentication |
| bcryptjs | 3.0.3 | Password Hashing |
| Multer | 2.0.2 | File Upload |
| XLSX | 0.18.5 | Excel Export |
| CORS | 2.8.5 | Cross-Origin Requests |
| dotenv | 17.2.3 | Environment Variables |

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
        │   ├── components/
        │   │   ├── Inputs/
        │   │   │   ├── Input.jsx              # Reusable input component
        │   │   │   └── ProfilePhotoSelector.jsx # Profile image upload
        │   │   └── layouts/
        │   │       └── AuthLayout.jsx         # Authentication page layout
        │   ├── context/        # React Context providers
        │   ├── hooks/          # Custom React hooks
        │   ├── pages/
        │   │   ├── Auth/
        │   │   │   ├── Login.jsx    # Login page
        │   │   │   └── SignUp.jsx   # Registration page
        │   │   └── Dashboard/
        │   │       ├── Home.jsx     # Dashboard home
        │   │       ├── Income.jsx   # Income management
        │   │       └── Expense.jsx  # Expense management
        │   ├── utils/
        │   │   ├── apiPaths.js      # API endpoint definitions
        │   │   ├── data.js          # Static data/constants
        │   │   └── helper.js        # Utility functions
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

## 📡 API Documentation

### Authentication Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/auth/register` | Register a new user |
| POST | `/api/auth/login` | Login user |
| GET | `/api/auth/profile` | Get user profile |

### Income Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/income` | Get all income entries |
| POST | `/api/income` | Create new income |
| PUT | `/api/income/:id` | Update income entry |
| DELETE | `/api/income/:id` | Delete income entry |

### Expense Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/expense` | Get all expenses |
| POST | `/api/expense` | Create new expense |
| PUT | `/api/expense/:id` | Update expense |
| DELETE | `/api/expense/:id` | Delete expense |

### Dashboard Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/dashboard/stats` | Get dashboard statistics |

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

### Styling

The application uses **Tailwind CSS** with custom configuration:

- **Primary Color**: `#875cf5` (Purple)
- **Font Family**: Poppins
- **Background**: `#fcfbfc`

Custom CSS classes defined in `index.css`:
- `.input-box` - Styled input container
- `.btn-primary` - Primary button styling with hover effects

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

## 📄 License

This project is licensed under the ISC License.

## 👤 Author

**MESSAOUDI Ishak**

---

⭐ Star this repo if you find it helpful!
