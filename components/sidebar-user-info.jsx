"use client";

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useEffect, useState } from "react";

export default function SidebarUserInfo() {
	const supabase = createClientComponentClient();
	const [userName, setUserName] = useState("");

	useEffect(() => {
		const getUserName = async () => {
			const {
				data: { user },
			} = await supabase.auth.getUser();
			const userId = user.id;
			// Q. server side에서 fetch를 route handler로 보내는 방법은? → full path를 어떻게 적어줘야 할지?
			const res = await fetch(`/api/user/username?userId=` + userId, {
				method: "GET",
				headers: {
					"Content-Type": "application/json",
				},
			});
			const {username} = await res.json();
			return username;
		};
		setUserName(getUserName().then((username) => username));
		return () => {};
	}, [supabase]);

	return <div className="sidebar-user-info">{userName}</div>;
}
