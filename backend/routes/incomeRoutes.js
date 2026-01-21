const express = require("express");
const {
    addIncome,
    getAllIncomes,
    deleteIncome,
    downloadIncomeExcel
} = require("../controllers/incomeController");
const { protect } = require("../middleware/authMiddleware");
const router = express.Router();
router.post("/", protect, addIncome);
router.get("/", protect, getAllIncomes);
router.delete("/:id", protect, deleteIncome);
router.get("/download/excel", protect, downloadIncomeExcel);
module.exports = router;
