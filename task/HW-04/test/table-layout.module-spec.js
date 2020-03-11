import { TableLayout } from '../src/TableLayout.module.js'
import {testData} from './testData.js'
describe("HW-04: Table Layout class should render", function () {
	
	beforeAll(function() {
		try{
		  var tablelayout = new TableLayout(testData.table);
		  var body = document.getElementsByTagName("body")[0];
		  body.innerHTML = tablelayout.template();
		}catch(er){
			console.log(er);
		}
    });
	
    it("Table row should appear ", function () {
		expect(document.querySelector('.table')).toBeDefined();
		expect(document.querySelector('.table tr th')).toBeDefined();
		expect(document.querySelector('.table tr td')).toBeDefined();
		expect(document.querySelector('.table thead')).toBeDefined();
		expect(document.querySelector('.table tbody')).toBeDefined();
		expect(document.querySelectorAll('.table thead th').length).toBe(6);
		expect(document.querySelectorAll('.table tbody td').length).toBe(18);
    });
	
    it("Table Layout Header should appear ", function () {
		expect(document.querySelector('.card-header.py-3 .m-0.font-weight-bold.text-primary')
		.textContent).toBe('Report');
		expect(document.querySelector('.table')).toBeDefined();
    });

    it("Table Header should appear ", function () {
		expect(document.querySelector('.table')).toBeDefined();
		expect(document.querySelector('.table tr th')).toBeDefined();
		expect(document.querySelector('.table thead')).toBeDefined();
		expect(document.querySelectorAll('.table thead th').length).toBe(6);
    });	
	
    it("Table Rows should appear ", function () {
		expect(document.querySelectorAll('.table thead th').length).toBe(6);
		expect(document.querySelectorAll('.table tbody td').length).toBe(18);
    });	
});