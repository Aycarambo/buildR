module.exports = {
  plugins: {
    "postcss-url": {
      url: (asset) => {
        return asset.url.replaceAll("/assets", "");
      },
    },
    autoprefixer: {},
    cssnano: {},
  },
};
