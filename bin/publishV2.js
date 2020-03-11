'use strict';
const request = require('request');
const users = require('./users');
const fs = require('fs');
const myArgs = process.argv.slice(2);
console.log('myArgs[0]:',myArgs[0]);
let rawdata = fs.readFileSync('karma-result.json');
let report = JSON.parse(rawdata);
let payLoad = { user: myArgs[0], suits: report };
var url = 'http://10.245.128.153:8080/v2/raw';
//let url = 'http://localhost:8080/raw';
if(myArgs[0] == 'master'){
	payLoad.userList = users;
	url = 'http://10.245.128.153:8080/v2/masterdata';
	console.log('sending master report: ');
}
console.log('USER::',payLoad.user);
console.log('sending report: ');
request({
    url: url,
    method: "POST",
    json: true,
    body: payLoad
}, function (error, response, body){
		console.log('error:',body);
		console.log('report sent: ');
});
