import React from "react";
import { SidebarFilter } from "../../components/sidebar-filter";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

export default async function Layout(props) {
	const supabase = createClientComponentClient();
	const {
		data: { session },
	} = await supabase.auth.getSession();

	return (
		<>
			<SidebarFilter />
			<div className="post-main">{props.children}</div>
		</>
	);
}
