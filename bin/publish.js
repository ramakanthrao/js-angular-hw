'use strict';

var Stomp = require('stomp-client');
const fs = require('fs');
var client = new Stomp('10.245.128.153', 61613, 'admin', 'admin');
var myArgs = process.argv.slice(2);
let rawdata = fs.readFileSync('jasmine-test-results.json');
let report = JSON.parse(rawdata);
console.log('sending report: ');
client.connect(function(sessionId) {
	console.log('sending report to: '+'/queue/'+myArgs[0]);
    client.publish('/queue/'+myArgs[0],JSON.stringify(report),{});
	client.disconnect(function() {
		console.log('discunnected ......');
	})
},function(err) {
    console.log('error sending report: '+err);
});