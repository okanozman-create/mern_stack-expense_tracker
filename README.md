# Expense Tracker App

This application allows users to track their expenses by registering and logging in. The backend is built with Node.js, Express, and MongoDB, while the frontend is developed using React.

## Features

- **User Authentication**: Users can register and log in securely using JWT (JSON Web Tokens).
- **Expense Management**: Logged-in users can add, view, update, and delete their expenses.
- **Database**: MongoDB is used to store user information and expenses.
- **Desktop First**: Designed primarily for desktop browsers.
- **Upcoming Features**: Additional features will be added soon, including:
  - Filter and sort expenses
  - Categorization of expenses
  - Reporting and analytics

## Technologies Used

### Backend

- **Node.js**: JavaScript runtime environment.
- **Express**: Web framework for Node.js.
- **MongoDB**: NoSQL database for storing user accounts and expenses.
- **bcryptjs**: Password hashing for secure user authentication.
- **jsonwebtoken**: Generation and verification of JWTs for authentication.
- **cors**: Middleware for enabling CORS (Cross-Origin Resource Sharing).
- **dotenv**: Loading environment variables from a `.env` file.
- **body-parser**: Middleware for parsing incoming request bodies.

### Frontend

- **React**: JavaScript library for building user interfaces.
- **axios**: HTTP client for making requests to the backend.
- **react-circular-input**: Component library for circular input elements.
- **Tailwind CSS**: Utility-first CSS framework used for styling components efficiently.

## Getting Started

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd expense-tracker
   ```
2. **Install dependencies**:

# Install backend dependencies

cd backend
npm install

# Install frontend dependencies

cd ../frontend
npm install

3. **Set up environment variables**:

PORT=5000
MONGO_URI=<your-mongodb-connection-string>
JWT_SECRET=<your-jwt-secret>

4. **Run the application**:

# Start the backend server

cd backend
npm start

# Start the frontend development server

cd ../frontend
npm start
