import BackButton from "@/app/components/back-button";
import { getDataById } from "@/app/lib/data";
import Image from "next/image";
import React from "react";

const SinglePostPage = async ({ params } : any) => {
	const data = await getDataById(params.slug);
	console.log(data);

	const { userId, id, title, body } = data;
	return (
		<section className="SinglePostPage">
			<div className="container">
                <BackButton />
				<h1 className="text-4xl mb-6">Single Post Page</h1>
				<div className="flex gap-12">
					<Image
                    className="flex-shrink-0 h-[60vh]"
                        width={400}
                        height={200}
						src={
							"https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg"
						}
						alt={`image`}
					/>
					<div className="flex-1 flex flex-col gap-6">
						<h1 className="text-4xl">{title}</h1>
						<div className="flex gap-4">
							<Image
								className="rounded-full"
								width={60}
								height={60}
								src={
									"https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg"
								}
								alt={`image`}
							/>
							<div className="flex flex-col gap-1">
								<span className="font-semibold">Author</span>
								<span className="font-normal">
									Terry Jefferson
								</span>
							</div>
                            <div className="flex flex-col gap-1">
								<span className="font-semibold">Published</span>
								<span className="font-normal">
									01.01.2024
								</span>
							</div>
						</div>

                        <div>
                        <p>{body}</p>
                    </div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default SinglePostPage;
