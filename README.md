# Cloudflare Pages setup

Use this folder structure for a simple static Cloudflare Pages deployment.

## Repo layout

- public/index.html

## Cloudflare Pages settings

- Framework preset: None
- Build command: exit 0
- Build output directory: public

## Domain

After deployment, attach your custom domain such as requests.yourdomain.com in Workers & Pages > your project > Custom domains.

## Notes

- Do not use `npx wrangler deploy` for this Pages setup.
- The site is static and client-side only.
- Likes and requests reset on refresh unless you later connect a database.
