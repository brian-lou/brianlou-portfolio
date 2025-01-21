import { NextResponse } from "next/server";
import particlesConfig from "../../../utils/configParticles";

export async function GET() {
  return NextResponse.json(particlesConfig);
}
