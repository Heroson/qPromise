// Karma configuration
// Generated on Sun Feb 04 2018 12:06:26 GMT+0800 (中国标准时间)

module.exports = function(config) {
  config.set({

    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [
        'src/**/*.js',
        'test/**/*.js',
    ],

    // list of files / patterns to exclude
    exclude: ['karma.conf.js', 'node_modules/'],

    // web server port
    port: 9999,

    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],

    autoWatch: true,

    logLevel: config.LOG_INFO,
  })
}
