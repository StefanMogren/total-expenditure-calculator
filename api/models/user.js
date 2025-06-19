import mongoose from "mongoose";

const Schema = mongoose.Schema;

const userSchema = new Schema({
	username: {
		type: String,
		minlength: 4,
		unique: true,
		required: true,
	},
	userId: {
		type: String,
		minlength: 10,
		unique: true,
		required: true,
	},
});

const User = mongoose.model("User", userSchema);

export default User;
