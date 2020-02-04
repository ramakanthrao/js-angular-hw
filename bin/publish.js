'use strict';
const request = require('request');
const users = require('./users');
const fs = require('fs');
const myArgs = process.argv.slice(2);
console.log('myArgs[0]:',myArgs[0]);
let rawdata = fs.readFileSync('jasmine-test-results.json');
let report = JSON.parse(rawdata);
let payLoad = { user: myArgs[0], report: report };
let url = 'http://10.245.128.153:8080/raw';
//let url = 'http://localhost:8080/raw';
if(myArgs[0] == 'master'){
	payLoad.userList = users;
	url = 'http://10.245.128.153:8080/masterdata';
}
console.log('sending report: ');
request({
    url: url,
    method: "POST",
    json: true,
    body: payLoad
}, function (error, response, body){
    console.log('response:',response);
		console.log('error:',error);
		console.log('body:',body);
		console.log('report sent: ');
});
