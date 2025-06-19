import mongoose from "mongoose";

const Schema = mongoose.Schema;

const expenditureSchema = new Schema(
	{
		purchase: {
			type: String,
			required: true,
		},
		when: {
			type: String,
			required: true,
		},
		amount: {
			type: Number,
			required: true,
			min: 1,
		},
		username: {
			type: String,
			required: true,
		},
	},
	{ timestamps: true }
);

const Expenditure = mongoose.model("Expenditure", expenditureSchema);

export default Expenditure;
