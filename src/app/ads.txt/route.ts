// AdSense requires an ads.txt file at the domain root once you're
// approved: https://support.google.com/adsense/answer/7532444
// Set NEXT_PUBLIC_ADSENSE_CLIENT (e.g. "ca-pub-1234567890123456") and
// this route publishes the correct line automatically — nothing else to
// configure by hand.
export async function GET() {
  const client = process.env.NEXT_PUBLIC_ADSENSE_CLIENT;
  const body = client
    ? `google.com, ${client.replace("ca-pub-", "pub-")}, DIRECT, f08c47fec0942fa0\n`
    : "";

  return new Response(body, {
    headers: { "Content-Type": "text/plain" },
  });
}
