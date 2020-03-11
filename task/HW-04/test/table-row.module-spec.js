import { TableRow } from '../src/TableRow.module.js'
import {testData} from './testData.js'
describe("HW-04: Table Row class should render", function () {
	
	beforeAll(function() {
		try {	
			var tableRow = new TableRow(testData.table.tableRows[0]);
			var body = document.getElementsByTagName("body")[0];
			body.innerHTML = tableRow.template();
		}catch(er){
			console.log(er);
		}		
    });
	
  it("Table row should appear ", function () {
	expect(document.querySelector('tr td')).toBeDefined();
	expect(document.querySelectorAll('tr td').length).toBe(6);
    
  })
});