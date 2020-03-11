import { TableLayout } from '../src/TableLayout.module.js'
import { TableHeader } from '../src/TableHeader.module.js'
import { TableRow } from '../src/TableRow.module.js'
import { Table } from '../src/Table.module.js'



describe("HW-04: Table class should render", function () {
    it("Table Header should appear ", function () {
        document.body.onload = function () {
            // table layout template
            var tablelayout = new TableLayout();
            // table header template
            var data = ['Mentee Name', 'Total Suits', 'Total Tests', 'Passed Tests', 'Failed Tests', 'Status'];
            var tableHeader = new TableHeader(...data);
            tableHeader.template().trim()

            // table rows
            var data = ['Ramakanth', 9, 13, 1, 12, 'RED'];
            var data = ['Apurv Vaidya', 16, 43, 3, 32, 'YELLOW'];
            var data = ['Anjaneyelu Neerati', 17, 48, 46, 2, 'GREEN'];
            var tableRow1 = new TableRow(...data);
            var tableRow2 = new TableRow(...data);
            var tableRow3 = new TableRow(...data);
            var rowData = [tableRow1, tableRow2, tableRow3];
            var tableRows = rowData.map((item, i) => item.template().trim()).join('')
            document.body.innerHTML = `<!-- Table Template -->
            ${tablelayout.template().trim()}  
            ${tableHeader.template().trim()}
            ${tableRows.template().trim()}
            <!-- Endof Table  Template -->`;
            expect(document.querySelector('.tb-header')).toBeDefined();
        }
    })
})