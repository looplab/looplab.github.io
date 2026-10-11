# looplab.se

Looplab's one-page site: Astro 7, Tailwind v4 and Bun (pinned in `mise.toml`), fully static.

## Develop

```sh
bun install
bun run dev      # http://localhost:4321
bun run check    # type-check, the only gate
bun run build    # static site into dist/
```

The page is `src/pages/index.astro`, with its copy kept as plain arrays in the frontmatter. The layout and footer are in `src/layouts/Site.astro`, and the colours and font in `src/styles/site.css`. Services and Work are sideways flips (`src/components/Flip.astro`).

## Deploy

Every push to `main` builds and publishes to GitHub Pages through `.github/workflows/deploy.yml`. The repo's Pages source is GitHub Actions, which ignores `public/CNAME`: the `looplab.se` domain lives in the Pages settings. If a settings change ever clears it, the site answers "Site not found" until it is set back:

```sh
gh api -X PUT repos/looplab/looplab.github.io/pages -f cname=looplab.se
```

## Action Card

`src/components/CardPane.astro` shows Max's Action Card as a tech preview, in a pane on wide screens and behind a pill on narrow ones. The card loads only when a visitor presses Start. Until a build sets `PUBLIC_CARD_URL`, Start says coming soon.

To switch it on, once the app runs in production:

1. Make sure the max tenant's embed origins include `https://looplab.se` (`/app/max/sharing/embed`).
2. Uncomment `PUBLIC_CARD_URL` in `.github/workflows/deploy.yml` and push to `main`.
3. Check the card may be framed: `curl -sI -H 'Sec-Fetch-Dest: iframe' https://app.actioncard.ai/embed/max/` should list `https://looplab.se` under `frame-ancestors`.

To try it locally, copy `.env.example` to `.env`, point `PUBLIC_CARD_URL` at a running app (e.g. `http://localhost:4000/embed/max/`), and allow `http://localhost:4321` in that app's embed origins for the max tenant.
