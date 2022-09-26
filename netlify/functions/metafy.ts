import { Handler } from "@netlify/functions"
import got from "got"

const metascraper = require("metascraper")([
  require("metascraper-audio")(),
  require("metascraper-author")(),
  require("metascraper-date")(),
  require("metascraper-description")(),
  require("metascraper-image")(),
  require("metascraper-logo")(),
  require("metascraper-logo-favicon")(),
  require("metascraper-media-provider")(),
  require("metascraper-title")(),
  require("metascraper-video")(),
  require("metascraper-clearbit")(),
])

const scrapeMetaData = async (
  targetUrl: string = "https://github.com/xiaoluoboding/metafy"
) => {
  const { body: html, url } = await got(targetUrl)
  const metadata = await metascraper({ html, url })
  return metadata
}

const handler: Handler = async (event, context) => {
  console.log(event)
  console.log(context)
  // const url = event.query.url as string

  // try {
  //   require("url").parse(url)
  // } catch (err) {
  //   return {
  //     statusCode: 400,
  //     headers: {
  //       "Content-Type": "application.json",
  //     },
  //     body: JSON.stringify({
  //       message: "Invalid URL",
  //     }),
  //   }
  // }

  // const metadata = await scrapeMetaData(url)

  return {
    statusCode: 200,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(event),
  }
}

export { handler }
