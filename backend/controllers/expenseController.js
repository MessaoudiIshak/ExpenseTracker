const XLSX = require("xlsx");
const Expense = require("../models/Expense");

exports.addExpense = async (req, res) => {
    if (!req.user) {
        return res.status(401).json({ message: "Unauthorized" });
    }
    const userId = req.user.id;
    try {
    const { amount, icon, category, date } = req.body;
    if (!amount || !category || !date) { 
        return res.status(400).json({ message: "Please provide all required fields" });
    }
    const newExpense = new Expense({
        userId: userId,
        amount,
        icon,
        category,
        date
    });
    await newExpense.save();
    res.status(201).json({ message: "Expense added successfully", expense: newExpense });
    } catch (error) {
        console.error("Error adding expense:", error);
        res.status(500).json({ message: "Server Error" });
    }
};
exports.getAllExpenses = async (req, res) => {
    if (!req.user) {
        return res.status(401).json({ message: "Unauthorized" });
    }
    const userId = req.user.id;
    try {
        const expenses = await Expense.find({ userId: userId }).sort({ date: -1 });
        res.status(200).json({ expenses });
    } catch (error) {
        console.error("Error fetching expenses:", error);
        res.status(500).json({ message: "Server Error" });
    }
};
exports.deleteExpense = async (req, res) => {
    if (!req.user) {
        return res.status(401).json({ message: "Unauthorized" });
    }
    const userId = req.user.id;
    const expenseId = req.params.id;
    try {
        const expense = await Expense.findOne({ _id: expenseId, user: userId });
        if (!expense) {
            return res.status(404).json({ message: "Expense not found" });
        }
        await expense.remove();
        res.status(200).json({ message: "Expense deleted successfully" });
    } catch (error) {
        console.error("Error deleting expense:", error);
        res.status(500).json({ message: "Server Error" });
    }
};
exports.downloadExpenseExcel = async (req, res) => {
    if (!req.user) {
        return res.status(401).json({ message: "Unauthorized" });
    }
    const userId = req.user.id;
    try {
        const expenses = await Expense.find({ user: userId }).sort({ date: -1 });
        const  data = expenses.map(expense => ({
            Amount: expense.amount,
            Icon: expense.icon,
            Source: expense.source,
            Date: expense.date.toISOString().split('T')[0]
        }));
        const wb = XLSX.utils.book_new();
        const ws = XLSX.utils.json_to_sheet(data);
        XLSX.utils.book_append_sheet(wb, ws, "Expenses");
        XLSX.writeFile(wb, "expenses_details.xlsx");
        res.download("expenses_details.xlsx");
    } catch (error) {
        console.error("Error downloading expense Excel:", error);
        res.status(500).json({ message: "Server Error" });
    }
};
