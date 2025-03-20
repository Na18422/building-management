export const config = {
  runtime: 'edge',
};

export default async function handler(req) {
  if (req.method === 'GET') {
    const { roomNumber, residentName, issue } = req.nextUrl.searchParams;

    if (!roomNumber || !residentName || !issue) {
      return new Response(JSON.stringify({ message: 'Missing parameters' }), { status: 400 });
    }

    return new Response(
      JSON.stringify({ message: `Maintenance request for issue "${issue}" in room ${roomNumber} has been sent.` }),
      { status: 200 }
    );
  }

  return new Response(JSON.stringify({ message: 'Invalid request method' }), { status: 405 });
}
