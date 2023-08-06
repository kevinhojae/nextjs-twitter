import Link from "next/link";
import SidebarUserInfo from "./sidebar-user-info";

export function SidebarFilter() {
	return (
		<div class="sidebar">
			<SidebarUserInfo />
			<div>
				<Link href="/home/all">all</Link>
			</div>
			<div>
				<Link href="/home/me">me</Link>
			</div>
			<div><Link href="/home/others">others</Link></div>
		</div>
	);
}
