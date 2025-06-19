import Expenditure from "../models/expenditure.js";

export async function createExpenditure(purchase, when, amount, username) {
	try {
		const expenseEntry = await Expenditure.create({
			purchase,
			when,
			amount,
			username,
		});

		if (expenseEntry) return expenseEntry;
		else throw new Error("Entry failed to be added.");
	} catch (error) {
		console.log(error.mesage);
		return null;
	}
}

export async function updateExpenditure(expenseId, expenseInfo) {}

export async function showExpenditures(username) {}

export async function sumExpenditures(username) {}
