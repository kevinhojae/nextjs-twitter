import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function POST(req) {
	const supabase = createRouteHandlerClient({ cookies });
  
	const { data, error } = await supabase.from("profiles").insert({
		id: req.body.id,
		username: req.body.username,
	});
}
