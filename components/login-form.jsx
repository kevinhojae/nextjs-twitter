"use client";

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginForm() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const [isLoginError, setIsLoginError] = useState(false);

	const supabase = createClientComponentClient();
	const router = useRouter();

	const handleLogIn = async () => {
		const { error, data } = await supabase.auth.signInWithPassword({
			email: email,
			password: password,
		});
		console.log(data);
		if (error) {
			console.log(error);
			setIsLoginError(true);
		} else {
			setIsLoginError(false);
			router.replace("/home");
		}
	};

	return (
		<div>
			<h1>Log In</h1>
			<div>
				<label htmlFor="email">Email</label>
				<input
					className="account-input"
					id={!isLoginError ? "email" : "email-error"}
					type="text"
					name="email"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				/>
			</div>
			<div>
				<label htmlFor="password">Password</label>
				<input
					className="account-input"
					id={!isLoginError ? "password" : "password-error"}
					type="password"
					name="password"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
				/>
			</div>
			<button
				className="submitButton"
				type="submit"
				onClick={handleLogIn}
			>
				Log In
			</button>
			<Link href="/register">
				If you don&apos;t have an account, register here.
			</Link>
		</div>
	);
}
