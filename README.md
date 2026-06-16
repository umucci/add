# Cloudflare Pages + D1 request site

This version saves requests and likes in Cloudflare D1 using Pages Functions.

## Files

- public/index.html
- functions/api/requests/index.js
- functions/api/likes/index.js
- functions/api/stats/index.js
- schema.sql

## Cloudflare setu

1. Create a Cloudflare Pages project from this repo.
2. Use:
   - Framework preset: None
   - Build command: exit 0
   - Build output directory: public
3. Create a D1 database in Cloudflare.
4. In the Pages project, go to Settings > Bindings.
5. Add a D1 binding:
   - Variable name: DB
   - Database: your new D1 database
6. In the D1 database console, run the SQL from schema.sql.
7. Redeploy the Pages project.

## What it does

- POST /api/requests creates a request
- GET /api/requests lists requests
- POST /api/likes increments likes
- GET /api/stats returns summary stats
