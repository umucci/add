export async function onRequestGet(context) {
  const { DB } = context.env;

  const totals = await DB.prepare(`
    SELECT COUNT(*) as requestCount, COALESCE(SUM(likes), 0) as likeCount
    FROM requests
  `).first();

  const top = await DB.prepare(`
    SELECT title
    FROM requests
    ORDER BY likes DESC, created_at DESC
    LIMIT 1
  `).first();

  return Response.json({
    requestCount: totals?.requestCount || 0,
    likeCount: totals?.likeCount || 0,
    topRequest: top?.title || null
  });
}
