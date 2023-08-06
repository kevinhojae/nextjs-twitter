import Link from "next/link";
import SidebarUserInfo from "./sidebar-user-info";

export default function SidebarFilter() {
	return (
		<div className="sidebar">
			<SidebarUserInfo />
			<div>
				<Link href="/home">all</Link>
			</div>
			<div>
				<Link href="/home/me">me</Link>
			</div>
			<div><Link href="/home/others">others</Link></div>
		</div>
	);
}
