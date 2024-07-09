const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const expenseRoutes = require('./routes/expenseRoutes');

require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;


connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/expenses', expenseRoutes);

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});









