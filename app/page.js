import { GET } from "./api/[posts]/route";

import Post from "@components/Post";

export default async function Home() {
	const response = await GET();
	const posts = await response.json();

	return (
		<main className="my-5">
			<h2 className="text-3xl mb-2">Home Page</h2>
			<section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
				{posts.map((post) => (
					<Post key={post._id} title={post.title} text={post.text} image={post.image} />
				))}
			</section>
		</main>
	);
}
