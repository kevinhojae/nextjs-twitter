import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function GET(req) {
	const url = new URL(req.url);
	console.log(url);
	const userId = url.searchParams.get("userId");
	console.log(userId);

	const supabase = createRouteHandlerClient({ cookies });
	const { data, error } = await supabase
		.from("profiles")
		.select("username")
		.eq("id", userId)
		.single();

	return NextResponse.json(data);
}

export async function POST(req) {
	const supabase = createRouteHandlerClient({ cookies });
	const { data, error } = await supabase.from("profiles").insert({
		id: req.body.id,
		username: req.body.username,
	});
}
