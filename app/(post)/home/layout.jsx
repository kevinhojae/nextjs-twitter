import React from "react";
import SidebarFilter from "../../../components/sidebar-filter";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import AddPostButton from "../../../components/add-post-button";

export default async function Layout(props) {
	const supabase = createClientComponentClient();
	const {
		data: { session },
	} = await supabase.auth.getSession();

	return (
		<>
			<SidebarFilter />
			<AddPostButton />
			<div className="post-main">{props.children}</div>
		</>
	);
}
