import Image from "next/image";
import Link from "next/link";
import React from "react";
import { getData } from "../lib/data";

type BlogProps = {
	id: string;
	title: string;
	image: string;
	body: string;
	url: string;
    slug: string;
};



const BlogPage = async ({ params }: { params: {slug: string} }) => {
	const data = await getData();
	const only6Data = data.filter(({ id }: { id: string }) => Number(id) <= 6);
    const slug = params.slug;
    console.log(slug);

	return (
		<section className="BlogPage">
			<div className="container">
				<h1 className="text-4xl">Blog Page</h1>
				<div className="grid mobile:grid-cols-1 laptop:grid-cols-3">
					{only6Data.map(({ id, title, body }: BlogProps) => (
						<Blog
							key={id}
							id={id}
							title={title}
							image={
								"https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg"
							}
							body={body}
							url={"/"}
                            slug={slug}
						/>
					))}
				</div>
			</div>
		</section>
	);
};

const Blog = ({ id, image, title, body, url, slug }: BlogProps) => {
	return (
		<div className="Blog">
			<div className="flex">
				<Image
					className="flex-1"
					width={100}
					height={200}
					src={image}
					alt={`${title}-image`}
				/>
				<span className="flex-shrink-0 rotate-90 translate-x-[-80px]">
					01/01/2024
				</span>
			</div>

            <div className="flex flex-col gap-5">
                        <h2 className="text-3xl">{title}</h2>
                        <p className="text-base">{body}</p>
                        <Link href={`blog/${id}`}>
                            READ MORE
                        </Link>
                    </div>
		</div>
	);
};

export default BlogPage;
