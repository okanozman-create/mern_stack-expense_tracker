const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const expenseRoutes = require('./routes/expenseRoutes');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/authRoutes');


require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({
    origin: 'https://expense-tracker-mern-7u6waoi4t-okans-projects-fdd8025d.vercel.app/'
  }));



connectDB();

// Middleware
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

// Routes
app.use('/expenses', expenseRoutes);
app.use('/auth', authRoutes);


// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});









