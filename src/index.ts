import { HandlerEvent } from "@netlify/functions"
import got from "got"

const metascraper = require("metascraper")([
  require("metascraper-author")(),
  require("metascraper-description")(),
  require("metascraper-image")(),
  require("metascraper-logo")(),
  require("metascraper-title")(),
])

const scrapeMetaData = async (
  targetUrl: string = "https://github.com/one-tab-group/netlify-metafy"
) => {
  const { body: html, url } = await got(targetUrl)
  const metadata = await metascraper({ html, url })
  return metadata
}

const headers = {
  /* Required for CORS support to work */
  "Access-Control-Allow-Origin": "*",
  /* Required for cookies, authorization headers with HTTPS */
  "Access-Control-Allow-Credentials": true,
  /* Return JSON result */
  "Content-Type": "application.json",
}

const handler = async (event: HandlerEvent) => {
  const url = event.queryStringParameters?.url as string

  try {
    require("url").parse(url)
  } catch (err) {
    return {
      statusCode: 400,
      headers,
      body: JSON.stringify({
        message: "Invalid URL",
      }),
    }
  }

  const metadata = await scrapeMetaData(url)

  return {
    statusCode: 200,
    headers,
    body: JSON.stringify({
      message: "Success",
      data: metadata,
    }),
  }
}

export { handler }
