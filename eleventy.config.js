module.exports = function (eleventyConfig) {
    eleventyConfig.addCollection("projects", function (collection) {
      return collection.getFilteredByTag("project");
    });
  
    return {
      dir: {
        input: "src",
        output: "dist"
      }
    };
  };
  