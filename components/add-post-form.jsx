"use client";

import { useState, useEffect, useCallback } from "react";
import SaveButton from "./save-button";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

export default function AddPostForm() {
	const [title, setTitle] = useState("");
	const [content, setContent] = useState("");
	const [isLoading, setIsLoading] = useState(false);
	const [isInputValid, setIsInputValid] = useState(true);
	const supabase = createClientComponentClient();

	const handleSaveClick = () => {
		const savePost = async () => {
			setIsLoading(true);
			const {
				data: { user },
			} = await supabase.auth.getUser();
			console.log(user);
			const { error } = await supabase.from("posts").insert([
				{
					title: title,
					content: content,
					author_id: user.id,
				},
			]);

			if (error) {
				console.log(error);
			} else {
				setTitle("");
				setContent("");
				setIsLoading(false);
			}
		};

		if (title === "" || content === "") {
			setIsInputValid(false);
			console.log("Input is not valid");
		} else {
			setIsInputValid(true);
			savePost().then(() => {
				console.log("Post saved");
			});
			console.log("Input is valid");
		}
	};
	return (
		<div className="add-post">
			<h1>Add Post</h1>
			<div className="col-6 auth-widget">
				<div className="form-group">
					<label htmlFor="title">Title</label>
					<input
						id="title"
						type="text"
						value={title}
						onChange={(e) => setTitle(e.target.value)}
					/>
				</div>
				<div className="form-group">
					<label htmlFor="content">Content</label>
					<textarea
						id="content"
						value={content}
						onChange={(e) => setContent(e.target.value)}
					/>
				</div>
				<div className="form-group">
					{!isLoading ? (
						<SaveButton onClick={handleSaveClick} />
					) : (
						"Loading..."
					)}
				</div>
				<div className="invalid-input">
					{isInputValid ? null : "Input is invalid"}
				</div>
			</div>
		</div>
	);
}
