import React from "react";
import { SidebarFilter } from "../../components/sidebar-filter";

export default function Layout(props) {
	return (
		<>
			<SidebarFilter />
			{props.children}
			{props.posts}
		</>
	);
}
