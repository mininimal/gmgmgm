const mila = require("markdown-it-link-attributes");

module.exports = function (eleventyConfig) {

  // Open external links in new tab
  const milaOptions = {
    matcher(href) {
      return href.match(/^https?:\/\//);
    },
    attrs: {
      target: "_blank",
      rel: "noopener",
    },
  };
  eleventyConfig.amendLibrary("md", (mdLib) => mdLib.use(mila, milaOptions));

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