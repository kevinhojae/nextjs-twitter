"use client";

import Link from "next/link";
import { useState } from "react";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { redirect, useRouter } from "next/navigation";

export default function RegisterForm() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [username, setUsername] = useState("");

	const [isRegisterError, setIsRegisterError] = useState(false);

	const supabase = createClientComponentClient();
	const router = useRouter();

	const handleSignUp = async () => {
		let isUsernameValid = true;
		const validateUsername = () => {
			supabase
				.from("profiles")
				.select("username")
				.then((data) => {
					if (data === username) {
						console.log("Username already exists");
						isUsernameValid = false;
					}
				});
		};

		validateUsername();
		if (!isUsernameValid) {
			setIsRegisterError(true);
			return;
		} else {
			console.log("Username is valid");
		}

		const { error, session, user } = await supabase.auth.signUp({
			email: email,
			password: password,
		});
		if (error) {
			console.log(error);
			setIsRegisterError(true);
		} else {
			const { data, error } = await supabase
				.from("profiles")
				.insert([{ id: user.id, username: username }]);
			console.log(session);
			setIsRegisterError(false);
			router.replace("/login");
		}
	};

	return (
		<div>
			<h1>Register</h1>
			<div>
				<label htmlFor="email">Email</label>
				<input
					className="account-input"
					id="email"
					type="text"
					name="email"
					onChange={(e) => setEmail(e.target.value)}
				/>
			</div>
			<div>
				<label htmlFor="password">Password</label>
				<input
					className="account-input"
					id="password"
					type="password"
					name="password"
					onChange={(e) => setPassword(e.target.value)}
				/>
			</div>
			<div>
				<label htmlFor="username">Username</label>
				<input
					className="account-input"
					id="username"
					type="text"
					name="username"
					onChange={(e) => setUsername(e.target.value)}
				/>
			</div>
			<button
				className="submitButton"
				type="submit"
				onClick={handleSignUp}
			>
				Register
			</button>
			<Link href="/login">
				If you already have an account, log in here.
			</Link>
			<div>{isRegisterError ? "Username already exists" : ""}</div>
		</div>
	);
}
