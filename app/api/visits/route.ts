import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { redis } from "../../../lib/redis";

export const dynamic = "force-dynamic";

const COUNTER_KEY = "site:visits";
const COOKIE_NAME = "ap_visit_counted";
const COOKIE_MAX_AGE = 60 * 60 * 24;

export async function POST() {
  const cookieStore = await cookies();
  const alreadyCounted = cookieStore.get(COOKIE_NAME)?.value === "1";

  let visits: number;

  if (alreadyCounted) {
    const current = await redis.get<number>(COUNTER_KEY);
    visits = current ?? 0;
  } else {
    visits = await redis.incr(COUNTER_KEY);
  }

  const response = NextResponse.json(
    {
      visits,
      counted: !alreadyCounted,
    },
    {
      headers: {
        "Cache-Control": "no-store, max-age=0",
      },
    }
  );

  if (!alreadyCounted) {
    response.cookies.set(COOKIE_NAME, "1", {
      httpOnly: false,
      sameSite: "lax",
      secure: true,
      path: "/",
      maxAge: COOKIE_MAX_AGE,
    });
  }

  return response;
}

export async function GET() {
  const current = await redis.get<number>(COUNTER_KEY);

  return NextResponse.json(
    {
      visits: current ?? 0,
    },
    {
      headers: {
        "Cache-Control": "no-store, max-age=0",
      },
    }
  );
}