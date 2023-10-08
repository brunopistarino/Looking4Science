import { NextResponse } from "next/server";
import supabase from "@/lib/supabase";

// To handle a GET request to /api
export async function GET(request) {
  // Do whatever you want
  const { data: categories } = await supabase.from("categoryd").select();

  return NextResponse.json({ data: categories }, { status: 200 });
}
