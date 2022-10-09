# Metafy on Netlify

[![Netlify Status](https://api.netlify.com/api/v1/badges/437d00e8-11ad-45f9-b48d-425f6f66ba7a/deploy-status)](https://app.netlify.com/sites/get-metafy/deploys)

> Easily scrape metadata from websites as a service.

## Usage

Enter a valid `$URL` as params

```bash
curl https://get-metafy.netlify.app/.netlify/functions/api?url=$URL
```

## Example

### Input

```bash
curl https://get-metafy.netlify.app/.netlify/functions/api?url=https://github.com/one-tab-group/netlify-metafy
```

### Output

```json
{
  "author": "one-tab-group",
  "logo": "https://logo.clearbit.com/github.com",
  "publisher": "GitHub",
  "description": "Easily scrape metadata from websites as a service. - GitHub - one-tab-group/netlify-metafy: Easily scrape metadata from websites as a service.",
  "image": "https://opengraph.githubassets.com/010acaa83e7292daf897869b2824afbc1128675c4cbbc3b404f71e2849562e71/one-tab-group/netlify-metafy",
  "title": "GitHub - one-tab-group/netlify-metafy: Easily scrape metadata from websites as a service."
}
```

## Deploy your own instance

Deploy your `Metafy` on your own instance with one-click.

[![Deploy Metafy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/one-tab-group/netlify-metafy)

## Tech Stack

- [netlify](https://netlify.com/) - The fastest way to combine your favorite tools and APIs to build the fastest sites, stores, and apps for the web.
- [metascraper](https://metascraper.js.org/) - metascraper, easily scrape metadata from an article on the web.
- [typescript](https://www.typescriptlang.org/) - Typed JavaScript at Any Scale.
- [got](https://github.com/sindresorhus/got) - 🌐 Human-friendly and powerful HTTP request library for Node.js
- [esno](https://github.com/antfu/esno) - TypeScript / ESNext node runtime powered by esbuild
- [tsup](https://github.com/egoist/esno) - The simplest and fastest way to bundle your TypeScript libraries.

## Similar Project

- [vercel-metafy](https://github.com/one-tab-group/metafy) - Easily scrape metadata from websites as a service with `Vercel`.

## License

MIT [xiaoluoboding](https://github.com/xiaoluoboding)
