/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  var app = new EmberApp(defaults, {
    // Add options here
  });

  // Use `app.import` to add additional libraries to the generated
  // output files.
  //
  // If you need to use different assets in different
  // environments, specify an object as the first parameter. That
  // object's keys should be the environment name and the values
  // should be the asset to use in that environment.
  //
  // If the library that you are including contains AMD or ES6
  // modules that you would like to import into your application
  // please specify an object with the list of modules as keys
  // along with the exports of each module as its value.
  app.import('bower_components/inconsolata-webfont-kit/css/inconsolata.css');
  app.import('bower_components/inconsolata-webfont-kit/fonts/inconsolata-bold.eot', {
    destDir: 'font'
  });
  app.import('bower_components/inconsolata-webfont-kit/fonts/inconsolata-bold.ttf', {
  destDir: 'font'
  });
  app.import('bower_components/inconsolata-webfont-kit/fonts/inconsolata-bold.woff', {
    destDir: 'font'
  });
  app.import('bower_components/inconsolata-webfont-kit/fonts/inconsolata-bold.woff2', {
    destDir: 'font'
  });
  app.import('bower_components/inconsolata-webfont-kit/fonts/inconsolata-regular.eot', {
  destDir: 'font'
  });
  app.import('bower_components/inconsolata-webfont-kit/fonts/inconsolata-regular.ttf', {
  destDir: 'font'
  });
  app.import('bower_components/inconsolata-webfont-kit/fonts/inconsolata-regular.woff', {
  destDir: 'font'
  });
  app.import('bower_components/inconsolata-webfont-kit/fonts/inconsolata-regular.woff2', {
  destDir: 'font'
  });

  return app.toTree();
};
