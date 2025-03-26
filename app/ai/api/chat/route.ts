import { openai } from "@ai-sdk/openai";
import {  streamText } from "ai";

export async function POST(req: Request) {
  try {
    // Ensure only POST requests are allowed
    if (req.method !== "POST") {
      return new Response("Method Not Allowed", { status: 405 });
    }

    // Parse the request body to extract messages
    const { messages } = await req.json();

    // Ensure messages exist
    if (!messages || !Array.isArray(messages)) {
      return new Response("Invalid request format", { status: 400 });
    }

    // Stream response from OpenAI's GPT-4 Turbo
    const result = await streamText({
      model: openai("gpt-3"),
      messages,
    });

    // Return a streaming response
    return new Response(result.toDataStream());
  } catch (error) {
    console.error("Error processing request:", error);
    return new Response("Internal Server Error", { status: 500 });
  }
}
