const { DateTime } = require("luxon");
const fs = require("fs");
const pluginRss = require("@11ty/eleventy-plugin-rss");
const pluginSyntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const pluginNavigation = require("@11ty/eleventy-navigation");
const pluginPWA = require("eleventy-plugin-pwa");
const pluginLocalRespimg = require("eleventy-plugin-local-respimg");

/**
 * Eleventy config
/**
 * Define eleventy config
 * @param {*} eleventyConfig default config
 * @returns {Object} Parameters for generator
 */
module.exports = function (eleventyConfig) {
  // Plugins
  eleventyConfig.addPlugin(pluginRss);
  eleventyConfig.addPlugin(pluginSyntaxHighlight);
  eleventyConfig.addPlugin(pluginNavigation);
  eleventyConfig.addPlugin(pluginPWA);

  // images plugin
  eleventyConfig.addPlugin(pluginLocalRespimg, {
    folders: {
      source: "./src", // Folder images are stored in
      output: "./dist", // Folder images should be output to
    },
    images: {
      resize: {
        min: 600, // Minimum width to resize an image to
        max: 1600, // Maximum width to resize an image to
        step: 300, // Width difference between each resized image
      },
      size: "100%",
      gifToVideo: false, // Convert GIFs to MP4 videos
      lazy: true, // Include `loading="lazy"` attribute for images
      additional: [
        // Globs of additional images to optimize (won't be resied)
        "img/icons/*",
      ],
    },
  });

  // Use deep merge for arrays and object for perfs
  eleventyConfig.setDataDeepMerge(true);

  // Add layouts for posts
  //eleventyConfig.addLayoutAlias("post", "./src/layouts/post.html");

  //
  // FILTERS

  // Setup readable date format
  eleventyConfig.addFilter("readableDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj, { zone: "utc" }).toFormat(
      "dd LLL yyyy"
    );
  });

  // https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#valid-date-string
  eleventyConfig.addFilter("htmlDateString", (dateObj) => {
    return DateTime.fromJSDate(dateObj, { zone: "utc" }).toFormat("yyyy-LL-dd");
  });

  // Get the first `n` elements of a collection.
  eleventyConfig.addFilter("head", (array, n) => {
    if (n < 0) {
      return array.slice(n);
    }
    return array.slice(0, n);
  });

  // Add collection for tags
  //eleventyConfig.addCollection("tagList", require("./src/_11ty/getTagList"));

  // define non-template static content directories to copy directly (for faster builds)
  eleventyConfig.addPassthroughCopy("./src/img/icons");

  // Browsersync Overrides
  eleventyConfig.setBrowserSyncConfig({
    files: ["dist/js"],
    callbacks: {
      ready: function (err, browserSync) {
        const content_404 = fs.readFileSync("dist/404.html");
        console.log("process");
        browserSync.addMiddleware("*", (req, res) => {
          // Provides the 404 content without redirect.
          res.write(content_404);
          res.end();
        });
      },
    },
  });

  // configuration options for eleventy builder
  return {
    htmlTemplateEngine: "njk",
    templateFormats: ["md", "njk", "html", "liquid", "json"],
    dir: {
      input: "src",
      output: "dist",
    },
  };
};
