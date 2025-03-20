export const config = {
  runtime: 'edge', 
};

export default async function handler(req) {
  if (req.method === 'GET') {
    const { roomNumber, residentName, amount } = req.nextUrl.searchParams;

    if (!roomNumber || !residentName || !amount) {
      return new Response(JSON.stringify({ message: 'Missing parameters' }), { status: 400 });
    }

    return new Response(
      JSON.stringify({ message: `Water bill of $${amount} for room ${roomNumber} paid successfully.` }),
      { status: 200 }
    );
  }

  return new Response(JSON.stringify({ message: 'Invalid request method' }), { status: 405 });
}
