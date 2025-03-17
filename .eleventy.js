const mila = require("markdown-it-link-attributes");
const { DateTime } = require("luxon");

module.exports = function (eleventyConfig) {
 
  // Add a custom date filter
  eleventyConfig.addFilter("postDate", (dateObj) => {
    const date = new Date(dateObj);
    return date.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
  });

  // Current Year filter
  eleventyConfig.addShortcode("currentYear", () => `${new Date().getFullYear()}`);

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
  eleventyConfig.addPassthroughCopy("src/site/content/posts/*/images/**");
  eleventyConfig.addPassthroughCopy("src/site/content/work/*/images/**");

  // Collections
  eleventyConfig.addCollection("work", function (collectionApi) {
    return collectionApi.getFilteredByGlob("src/content/work/**/*.md");
  });   

  eleventyConfig.addCollection("writing", function (collectionApi) {
    return collectionApi.getFilteredByGlob("src/content/posts/**/*.md");
  });

  // Clear trailing slash warning
  eleventyConfig.configureErrorReporting( { 
    allowMissingExtensions: true 
  } );

  // Base configuration
  return {
		dir: {
			input: "src",
			output: "dist",
      includes: "_includes",
		},
		passthroughFileCopy: true,
		templateFormats: [ "njk", "md", "txt", "html" ],
		htmlTemplateEngine: "njk",
		markdownTemplateEngine: "njk",
	};
};