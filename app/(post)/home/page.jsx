import { Suspense, useCallback } from "react";
import PostContainer from "../../../components/post-container";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import Loading from "./loading";

export default async function Posts() {
	const supabase = createClientComponentClient();
	const {
		data: { session },
	} = await supabase.auth.getSession();

	return (
		<Suspense fallback={<Loading />}>
			<PostContainer session={session} />
		</Suspense>
	);
}
