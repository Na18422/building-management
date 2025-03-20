export async function POST(req: Request) {
  try {
    const data = await req.json(); 
    console.log("Received data:", data); 

    return new Response(JSON.stringify(data), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response("Error processing request", { status: 500 });
  }
}
