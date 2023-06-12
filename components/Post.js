import Image from "next/image";

export default async function Post({ title, image, text }) {
	return (
		<div className="border rounded-lg shadow w-auto p-4">
			<div>
				<Image src={image} alt={title} width={300} height={200} />
			</div>
			<div className="mt-4">
				<h3 className="text-xl font-semibold mb-3">{title}</h3>
				<p className="text-sm font-semibold text-slate-700 dark:text-slate-300">{text}</p>
			</div>
		</div>
	);
}
