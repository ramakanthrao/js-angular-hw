import { Table } from '../src/Table.module.js'
import {testData} from './testData.js'

describe("HW-04: Table class should render", function () {
	
	beforeAll(function() {
		try{
			var body = document.getElementsByTagName("body")[0];
			var table = new Table(testData.table);
			body.innerHTML = table.template();
		}catch(er){
			console.log(er);
		}
    });
	
    it("Table Header should appear ", function () {
            // table layout template
			expect(document.querySelector('.card-header.py-3 .m-0.font-weight-bold.text-primary').textContent).toBe('Report');
            expect(document.querySelector('.table')).toBeDefined();
			expect(document.querySelector('.table tr th')).toBeDefined();
			expect(document.querySelector('.table tr td')).toBeDefined();
			expect(document.querySelectorAll('.table tr th').length).toBe(6);
			expect(document.querySelectorAll('.table tr td').length).toBe(18);
    });
})