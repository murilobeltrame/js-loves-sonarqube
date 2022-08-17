module.exports = function(config) {
    config.set({
      basePath: '.',
      files: [
        'example*/**/*.js'
      ],
      autoWatch: true,
      frameworks: ['jasmine'],
      browsers: ['ChromeHeadless'],
      plugins: [
        'karma-chrome-launcher',
        'karma-jasmine'
      ]
    });
  };
