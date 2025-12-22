import { writeFile } from "fs/promises";
import { globby } from "globby";
import { siteMetadata } from "../data/siteMetaData.mjs";

const robotsTxt = `User-agent: *
Allow: /
Sitemap: ${siteMetadata.siteUrl}/sitemap.xml`;

async function generateSitemap() {
  try {
    const pages = await globby([
      "src/pages/**/*.tsx",
      "!src/pages/_*.tsx",
      "!src/pages/api",
      "!src/pages/404.tsx",
    ]);

    const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
      .map((page) => {
        const path = page
          .replace("src/pages/", "/")
          .replace(".tsx", "")
          .replace("/index", "");
        if (path.includes("[") || path.includes("]")) return "";
        return `<url><loc>${siteMetadata.siteUrl}${path}</loc></url>`;
      })
      .join("\n")}
</urlset>`;

    await writeFile("public/sitemap.xml", sitemapXml, "utf8");
    await writeFile("public/robots.txt", robotsTxt, "utf8");

    console.log(
      "Successfully generated\n-> Sitemap at public/sitemap.xml\n-> Robots.txt at public/robots.txt"
    );
  } catch (err) {
    console.error("Error generating sitemap:", err);
  }
}

generateSitemap();
