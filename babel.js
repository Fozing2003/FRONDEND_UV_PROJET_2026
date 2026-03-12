module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./src'],   // le dossier racine de ton code
          alias: {
            '@': './src',    // @ pointe vers ./src
          },
        },
      ],
    ],
  };
};