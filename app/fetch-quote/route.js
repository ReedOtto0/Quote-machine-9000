export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const response = await fetch(process.env.QUOTE_API_URL, {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": process.env.QUOTE_API_KEY,
        "X-RapidAPI-Host": process.env.QUOTE_API_HOST,
      },
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
  }
  return { content: "Error loading quote." };
}
