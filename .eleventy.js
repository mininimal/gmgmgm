const mila = require("markdown-it-link-attributes");
const { DateTime } = require("luxon");
const eleventyNavigationPlugin = require("@11ty/eleventy-navigation"); // Import the plugin

module.exports = function (eleventyConfig) {
  // Add the eleventyNavigation plugin
  eleventyConfig.addPlugin(eleventyNavigationPlugin);
  
  // Add a custom date filter
  eleventyConfig.addFilter("formatDate", (dateObj) => {
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
  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addPassthroughCopy("src/styles");
  eleventyConfig.addPassthroughCopy("src/content/posts/*/images/**");
  eleventyConfig.addPassthroughCopy("src/content/work/*/images/**");

  // Collections
  eleventyConfig.addCollection("work", function (collectionApi) {
    return collectionApi.getFilteredByGlob("src/content/work/**/*.md");
  });

  eleventyConfig.addCollection("writing", function (collectionApi) {
    return collectionApi.getFilteredByGlob("src/content/posts/**/*.md");
  });

  // Base configuration
  return {
    dir: {
      input: "src",          // Source directory
      includes: "includes",  // Nunjucks includes/partials
      layouts: "layouts",    // Layout templates
      data: "data",          // Global data files
      output: "dist",        // Output directory
    },
    markdownTemplateEngine: "njk", // Use Nunjucks for Markdown
    htmlTemplateEngine: "njk",     // Use Nunjucks for HTML
    templateFormats: ["md", "njk"], // Supported template formats
  };
};