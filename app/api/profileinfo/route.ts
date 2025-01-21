import { NextResponse } from "next/server";
import { profile } from "../../../utils/profileData";

export async function GET() {
  return NextResponse.json(profile);
}
