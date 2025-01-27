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