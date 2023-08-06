"use client";

import { useEffect, useState } from "react";
import PostItem from "./post-item";
import { set } from "internal-slot";

export default function PostContainer({ session }) {
	const [posts, setPosts] = useState([]);

	useEffect(() => {
		const fetchPosts = async () => {
			const res = await fetch("/api/post/all", {
				method: "get",
			});
			console.log(res);
			const data = await res.json();
			console.log(data);
			setPosts(data);
		};
		fetchPosts();
	}, [session]);

	return (
		<div>
			{posts &&
				posts.map((post) => <PostItem key={post.id} post={post} />)}
		</div>
	);
}
