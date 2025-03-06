const mila = require("markdown-it-link-attributes");
const { DateTime } = require("luxon");

module.exports = function (eleventyConfig) {

  // Add a custom date filter
  eleventyConfig.addFilter("formatDate", (dateObj) => {
    // Parse the date as a JS Date object in UTC and format it
    return DateTime.fromJSDate(dateObj, { zone: "utc" }).toFormat("LLL dd, yyyy");
  });

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
  eleventyConfig.addGlobalData("layout", "base.njk");

  // Passthrough copy for assets
  eleventyConfig.addPassthroughCopy("assets");
  eleventyConfig.addPassthroughCopy("styles");
  eleventyConfig.addPassthroughCopy("site/posts/*/images/**");
  eleventyConfig.addPassthroughCopy("site/work/*/images/**");

  // Collections
  eleventyConfig.addCollection("work", function (collectionApi) {
    return collectionApi.getFilteredByGlob("site/work/**/*.md");
  });

  eleventyConfig.addCollection("posts", function (collectionApi) {
    return collectionApi.getFilteredByGlob("site/posts/**/*.md");
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
    defaultLayout: "base.njk",
  }
};