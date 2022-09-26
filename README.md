# Metafy on Netlify

> Easily scrape metadata from websites as a service.

## Usage

Enter a valid `$URL` as params

```bash
curl https://get-metafy.netlify.app/.netlify/functions/index?url=$URL
```

## Example

### Input

```bash
curl https://get-metafy.netlify.app/.netlify/functions/index?url=https://github.com/one-tab-group/metafy
```

### Output

```json
{
  "author": "one-tab-group",
  "description": "Easily scrape metadata from websites as a service. - GitHub - one-tab-group/metafy: Easily scrape metadata from websites as a service.",
  "image": "https://opengraph.githubassets.com/835cf2b2ddbd30d3e10189dcc1860ec66541361fe97ca309cc218fadafcfebd5/one-tab-group/metafy",
  "logo": "https://github.com/fluidicon.png",
  "publisher": "GitHub",
  "title": "GitHub - one-tab-group/metafy: Easily scrape metadata from websites as a service."
}
```

## Tech Stack

- [netlify](https://netlify.com/) - The fastest way to combine your favorite tools and APIs to build the fastest sites, stores, and apps for the web.
- [metascraper](https://metascraper.js.org/) - metascraper, easily scrape metadata from an article on the web.
- [typescript](https://www.typescriptlang.org/) - Typed JavaScript at Any Scale.
- [got](https://github.com/sindresorhus/got) - 🌐 Human-friendly and powerful HTTP request library for Node.js
- [esno](https://github.com/antfu/esno) - TypeScript / ESNext node runtime powered by esbuild
- [tsup](https://github.com/egoist/esno) - The simplest and fastest way to bundle your TypeScript libraries.

## License

MIT [xiaoluoboding](https://github.com/xiaoluoboding)
