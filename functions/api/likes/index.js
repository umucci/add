export async function onRequestPost(context) {
  const { DB } = context.env;
  const body = await context.request.json();
  const id = String(body.id || '').trim();

  if (!id) {
    return new Response(JSON.stringify({ error: 'Missing id' }), { status: 400 });
  }

  await DB.prepare(`
    UPDATE requests
    SET likes = likes + 1
    WHERE id = ?
  `).bind(id).run();

  return Response.json({ ok: true });
}
