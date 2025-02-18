// Karma configuration
// Generated on Mon Feb 17 2020 21:46:13 GMT+0530 (India Standard Time)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',

	client: {
      jasmine: {
        random: false
      }
    },
    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
	frameworks: ['jasmine','browserify'],
	

    // list of files / patterns to load in the browser
    files: [
		'task/**/test/*.spec.js',
		'task/**/test/*.test.js',
		{ pattern: 'task/**/src/*.module.js', type: 'module' },
		{ pattern: 'task/**/test/*.module-spec.js', type: 'module' },
		{ pattern: 'task/HW-04/test/testData.js', type: 'module' }
    ],


    // list of files / patterns to exclude
    exclude: [

    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
		'**/*.test.js': ['browserify']
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress','json-result'],
	jsonResultReporter: {
	  outputFile: "karma-result.json",
	  isSynchronous: true
	},

    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    //browsers: ['Chrome'],
	browsers: ['ChromeHeadless'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity,
	 browserify: {
      debug: true,
      transform: [ 'brfs' ]
    }
  })
}
