export async function onRequestGet(context) {
  const { DB } = context.env;
  const { results } = await DB.prepare(`
    SELECT id, title, type, details, requested_by, likes, created_at
    FROM requests
    ORDER BY likes DESC, created_at DESC
  `).all();
  return Response.json(results);
}

export async function onRequestPost(context) {
  const { DB } = context.env;
  const body = await context.request.json();
  const title = String(body.title || '').trim().slice(0, 80);
  const type = String(body.type || 'TV Show').trim().slice(0, 20);
  const details = String(body.details || '').trim().slice(0, 220);
  const requestedBy = String(body.requestedBy || '').trim().slice(0, 32);

  if (!title) {
    return new Response(JSON.stringify({ error: 'Title is required' }), { status: 400 });
  }

  const id = crypto.randomUUID();

  await DB.prepare(`
    INSERT INTO requests (id, title, type, details, requested_by, likes)
    VALUES (?, ?, ?, ?, ?, 0)
  `).bind(id, title, type, details, requestedBy).run();

  return Response.json({ ok: true, id });
}
