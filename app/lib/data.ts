export const getData = async () => {
	const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
		next: { revalidate: 3600 },
	});

	if (!res.ok) {
		throw new Error("Something went wrong");
	}

	return res.json();
};

export const getDataById = async (slug: {slug: string}) => {
	const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${slug}`, {
		next: { revalidate: 3600 },
	});

	if (!res.ok) {
		throw new Error("Something went wrong");
	}

	return res.json();
};