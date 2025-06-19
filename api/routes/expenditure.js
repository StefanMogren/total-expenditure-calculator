import { Router } from "express";
import { v4 as uuid } from "uuid";
import { createExpenditure } from "../services/expenditures.js";
// import Expenditure from "../models/expenditure.js";

const router = Router();

router.post("/expenditure", async (req, res, next) => {
	const { purchase, when, amount, username } = req.body;

	const expenseEntry = await createExpenditure(
		purchase,
		when,
		amount,
		username
	);

	if (!expenseEntry) {
		res.status(400).json({
			success: false,
			message: "Expense entry failed to be added.",
		});
	}

	res.status(201).json({
		success: true,
		message: "Expense entry added successfully.",
	});
});

export default router;
