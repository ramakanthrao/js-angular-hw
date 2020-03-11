import { TableHeader } from '../src/TableHeader.module.js'
import {testData} from './testData.js'

describe("HW-04: Table Header class should render", function () {
	
	beforeAll(function() {
		try {
			var tableHeader = new TableHeader(testData.table.tableHeaders);
			var body = document.getElementsByTagName("body")[0];
			body.innerHTML ='<table><thead>'+ tableHeader.template()+'</thead></table>';
		} catch(er) {
			console.log(er);
		}
    });
	
  it("Table Header should appear ", function () {
		expect(document.querySelector('tr th')).toBeDefined();
		expect(document.querySelectorAll('tr th').length).toBe(6);
  });
})