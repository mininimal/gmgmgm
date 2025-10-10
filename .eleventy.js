const { DateTime } = require("luxon");
const { eleventyImageTransformPlugin } = require("@11ty/eleventy-img");
const pluginTOC = require("eleventy-plugin-toc");
const markdownIt = require("markdown-it");
const markdownItFootnote = require("markdown-it-footnote");
const markdownItAnchor = require("markdown-it-anchor");
const mila = require("markdown-it-link-attributes");

module.exports = function (eleventyConfig) {
  // Add anchors to headings in posts
  eleventyConfig.setLibrary("md", markdownIt().use(markdownItAnchor));

  // Table of contents on posts
  eleventyConfig.addPlugin(pluginTOC, {
    tags: ["h2", "h3"],
    wrapper: "nav",
    wrapperClass: "toc",
    ul: true,
    flat: false,
  });

  // Post drafts
  eleventyConfig.addPreprocessor("drafts", "*", (data, content) => {
    if (data.draft && process.env.ELEVENTY_RUN_MODE === "build") {
      return false;
    }
  });

  // Add markdown-it-footnote plugin
  eleventyConfig.amendLibrary("md", function (mdLib) {
    mdLib.use(markdownItFootnote);
  });

  eleventyConfig.addPlugin(eleventyImageTransformPlugin, {
    // optional, output image formats
    formats: ["jpg", "webp"],
    // optional, output image widths
    widths: ["auto", 400, 800],
    // optional, attributes assigned on <img> override these values.
    defaultAttributes: {
      loading: "lazy",
      sizes: "100vw",
      decoding: "async",
    },
  });

  // Add a custom date filter
  eleventyConfig.addFilter("postDate", (dateObj) => {
    const date = new Date(dateObj);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  });

  // Current Year filter
  eleventyConfig.addShortcode(
    "currentYear",
    () => `${new Date().getFullYear()}`
  );

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

  // Passthrough copy for assets
  eleventyConfig.addPassthroughCopy("src/assets/");
  eleventyConfig.addPassthroughCopy("src/posts/*/images/**");
  eleventyConfig.addPassthroughCopy("src/work/*/images/**");

  // Collections
  eleventyConfig.addCollection("work", function (collectionApi) {
    return collectionApi
      .getFilteredByGlob("src/work/**/*.md")
      .sort((a, b) => parseInt(b.data.workYear) - parseInt(a.data.workYear));
  });

  eleventyConfig.addCollection("writing", function (collectionApi) {
    return collectionApi.getFilteredByGlob("src/posts/**/*.md");
  });

  // Clear trailing slash warning
  eleventyConfig.configureErrorReporting({
    allowMissingExtensions: true,
  });

  // Base configuration
  return {
    dir: {
      input: "src",
      output: "dist",
      includes: "_includes",
    },
    passthroughFileCopy: true,
    templateFormats: ["njk", "md", "txt", "html"],
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
  };
};
