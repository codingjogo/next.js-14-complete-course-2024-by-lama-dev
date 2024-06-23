import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

export default async function Home() {
	const supabase = createClient()

	const { data, error } = await supabase.auth.getUser()
	console.log(data, error)
	if (error || !data?.user) {
	  redirect('/login')
	}

	return (
		<main>
			<h1 className="text-4xl text-white">Home Page</h1>
		</main>
	);
}
