export async function GET() {
  const userData = {
    name: "John Doe",
    email: "johndoe@example.com",
  };

  return new Response(JSON.stringify(userData), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
