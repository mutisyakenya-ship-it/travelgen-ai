import type { GoogleGenAI } from "@google/genai";

let clientPromise: Promise<GoogleGenAI> | null = null;

export function getGeminiClient(): Promise<GoogleGenAI> {
  if (!clientPromise) {
    clientPromise = import("@google/genai").then(
      ({ GoogleGenAI }) =>
        new GoogleGenAI({
          apiKey: import.meta.env.VITE_GEMINI_API_KEY,
        })
    );
  }
  return clientPromise;
}