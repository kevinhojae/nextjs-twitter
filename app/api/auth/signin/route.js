import { supabase } from "@supabase/auth-ui-shared";
import { redirect } from "next/dist/server/api-utils";

export async function POST(req) {
	const { body } = req.json();
	console.log(body);

	const { data, error } = await supabase.auth.admin.createUser({
		email: body.email,
		password: body.password,
		username: body.username,
	});

	return redirect(new URL("/account", req.url), {
		status: 302,
	});
}
