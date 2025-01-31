const cheerio = require("cheerio");

module.exports = function (eleventyConfig) {
  // Set a default layout for all pages
  eleventyConfig.addGlobalData("layout", "base.liquid");

  // Passthrough copy for assets
  eleventyConfig.addPassthroughCopy("assets");
  eleventyConfig.addPassthroughCopy("styles");

  // Collections
  eleventyConfig.addCollection("work", function (collectionApi) {
    return collectionApi.getFilteredByGlob("site/work/*.md");
  });

  eleventyConfig.addCollection("posts", function (collectionApi) {
    return collectionApi.getFilteredByGlob("site/posts/*.md");
  });

  // Transform to add target="_blank" and rel="noopener noreferrer" to external links
  eleventyConfig.addTransform("externalLinks", function (content) {
    // Only process HTML files
    if (this.outputPath && this.outputPath.endsWith(".html")) {
      const $ = cheerio.load(content);

      // Find all links with an href starting with http:// or https://
      $('a[href^="http://"], a[href^="https://"]').each(function () {
        const href = $(this).attr("href");

        // Skip internal links (optional, adjust as needed)
        if (!href.includes("{{ site.title }}")) {
          $(this).attr("target", "_blank");
          $(this).attr("rel", "noopener noreferrer");
        }
      });

      // Return the modified HTML
      return $.html();
    }

    // Return unmodified content for non-HTML files
    return content;
  });

  // Base configuration
  return {
    dir: {
      input: "site",
      includes: "_include",
      layouts: "_layout",
      data: "_data",
      output: "dist"
    },
    markdownTemplateEngine: "liquid",
    htmlTemplateEngine: "liquid",
    dataTemplateEngine: "liquid"
  };
};