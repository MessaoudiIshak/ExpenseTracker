const XLSX = require("xlsx");
const Income = require("../models/Income");

exports.addIncome = async (req, res) => {
    if (!req.user) {
        return res.status(401).json({ message: "Unauthorized" });
    }
    const userId = req.user.id;
    try {
    const { amount, icon, source, date } = req.body;
    if (!amount || !source || !date) { 
        return res.status(400).json({ message: "Please provide all required fields" });
    }
    const newIncome = new Income({
        userId: userId,
        amount,
        icon,
        source,
        date
    });
    await newIncome.save();
    res.status(201).json({ message: "Income added successfully", income: newIncome });
    } catch (error) {
        console.error("Error adding income:", error);
        res.status(500).json({ message: "Server Error" });
    }
};
exports.getAllIncomes = async (req, res) => {
    if (!req.user) {
        return res.status(401).json({ message: "Unauthorized" });
    }
    const userId = req.user.id;
    try {
        const incomes = await Income.find({ userId: userId }).sort({ date: -1 });
        res.status(200).json({ incomes });
    } catch (error) {
        console.error("Error fetching incomes:", error);
        res.status(500).json({ message: "Server Error" });
    }
};
exports.deleteIncome = async (req, res) => {
    if (!req.user) {
        return res.status(401).json({ message: "Unauthorized" });
    }
    const userId = req.user.id;
    const incomeId = req.params.id;
    try {
        const income = await Income.findOne({ _id: incomeId, userId: userId });
        if (!income) {
            return res.status(404).json({ message: "Income not found" });
        }
        await income.deleteOne();
        res.status(200).json({ message: "Income deleted successfully" });
    } catch (error) {
        console.error("Error deleting income:", error);
        res.status(500).json({ message: "Server Error" });
    }
};
exports.downloadIncomeExcel = async (req, res) => {
    if (!req.user) {
        return res.status(401).json({ message: "Unauthorized" });
    }
    const userId = req.user.id;
    try {
        const incomes = await Income.find({ userId: userId }).sort({ date: -1 });
        const data = incomes.map(income => ({
            Amount: income.amount,
            Icon: income.icon,
            Source: income.source,
            Date: income.date.toISOString().split('T')[0]
        }));
        const wb = XLSX.utils.book_new();
        const ws = XLSX.utils.json_to_sheet(data);
        XLSX.utils.book_append_sheet(wb, ws, "Incomes");
        // Write workbook to buffer
        const buffer = XLSX.write(wb, { type: 'buffer', bookType: 'xlsx' });
        res.setHeader('Content-Disposition', 'attachment; filename="incomes_details.xlsx"');
        res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
        res.send(buffer);
    } catch (error) {
        console.error("Error downloading income Excel:", error);
        res.status(500).json({ message: "Server Error" });
    }
};
