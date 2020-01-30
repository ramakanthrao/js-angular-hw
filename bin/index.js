var Jasmine = require('jasmine');
var jasmine = new Jasmine();
var JSONReporter = require('jasmine-json-test-reporter');

jasmine.loadConfigFile('jasmine.json');
jasmine.addReporter(new JSONReporter({
	file: 'jasmine-test-results.json',
	beautify: true,
	indentationLevel: 4 // used if beautify === true
}));
jasmine.configureDefaultReporter({
    showColors: false
});
jasmine.execute();

