const express = require('express');
const router = express.Router();
const Expense = require('../models/Expense');

// GET /expenses
router.get('/', async (req, res) => {
    try {
        const expenses = await Expense.find();
        console.log('Expenses:', expenses);
        res.json(expenses);
    } catch (error) {
        console.error('Error fetching expenses:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

// POST /expenses
router.post('/', async (req, res) => {
    
    const { description, amount } = req.body;

    try {
        if (!description || !amount) {
            return res.status(400).json({ message: 'Description and amount are required.' });
        }

        const newExpense = new Expense({ description, amount });
        await newExpense.save();
        console.log('New expense added:', newExpense); 
        res.json(newExpense);
    } catch (error) {
        console.error('Error saving expense:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

module.exports = router;
