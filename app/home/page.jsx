import { useCallback } from "react";
import PostContainer from "../../components/post-container";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

export default async function Posts() {
	const supabase = createClientComponentClient();
	const {
		data: { session },
	} = await supabase.auth.getSession();

	return <PostContainer session={session} />;
}
