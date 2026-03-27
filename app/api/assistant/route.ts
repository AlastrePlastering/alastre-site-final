import { NextResponse } from "next/server";
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: Request) {
  try {
    const { message } = await req.json();

    if (!message || typeof message !== "string") {
      return NextResponse.json(
        { reply: "No message provided" },
        { status: 400 }
      );
    }

    if (!process.env.OPENAI_API_KEY) {
      return NextResponse.json(
        { reply: "Missing OPENAI_API_KEY environment variable." },
        { status: 500 }
      );
    }

    const response = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content:
            "You are a construction assistant. You can answer in English or Spanish depending on the user's language. Only answer construction questions. Help with calculations like concrete, drywall, block, stucco, and framing. Never give pricing.",
        },
        {
          role: "user",
          content: message,
        },
      ],
    });

    return NextResponse.json({
      reply: response.choices[0]?.message?.content ?? "No response generated.",
    });
  } catch (error: any) {
    console.error("🔥 ERROR FULL:", error);

    return NextResponse.json(
      {
        reply: error?.message || "Server error. Check API key or server logs.",
      },
      { status: 500 }
    );
  }
}
