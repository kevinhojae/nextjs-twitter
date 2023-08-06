export default function PostCard({ post }) {
	

	return (
		<div className="post-card">
			<h3>{post.title}</h3>
			<p>{post.content}</p>
		</div>
	);
}
