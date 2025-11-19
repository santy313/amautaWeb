import { NextResponse } from "next/server";
import { getLogtoContext } from "@logto/next/server-actions";
import { logtoServerConfig } from "@/lib/logto";

export async function GET() {
  try {
    const { isAuthenticated } = await getLogtoContext(logtoServerConfig);

    return NextResponse.json({
      isAuthenticated,
    });
  } catch (e) {
    return NextResponse.json(
      { isAuthenticated: false },
      { status: 200 }
    );
  }
}
