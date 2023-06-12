import { Schema, model, models } from "mongoose";

const PostSchema = new Schema({
	text: {
		type: String,
		required: [true, "Prompt is required."],
	},
	title: {
		type: String,
		required: [true, "Tag is required."],
	},
	image: {
		type: String,
	},
});

const Post = models.post || model("post", PostSchema);

export default Post;
