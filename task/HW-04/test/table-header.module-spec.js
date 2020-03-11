import { TableHeader } from '../src/TableHeader.module.js'

describe("HW-04: Table Header class should render", function () {
    fit("Table Header should appear ", function () {
        document.body.onload = function () {
            var data = ['Mentee Name', 'Total Suits', 'Total Tests', 'Passed Tests', 'Failed Tests', 'Status'];
            var tableHeader = new TableHeader(...data);
            document.body.innerHTML = `<!-- Table Header Template -->
            <thead class="tb-header">
              <tr>
                <th>${tableHeader.menteeName}</th>
                <th>${tableHeader.totalSuits}</th>
                <th>${tableHeader.totalTests}</th>
                <th>${tableHeader.passedTests}</th>
                <th>${tableHeader.failedTests}</th>
                <th>${tableHeader.status}</th>
              </tr>
            </thead>
          <!-- Endof Table Header Template -->`;
            expect(document.querySelector('.tb-header')).toBeDefined();
        }
    })
})