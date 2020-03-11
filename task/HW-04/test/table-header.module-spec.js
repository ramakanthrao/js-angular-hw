import { TableHeader } from '../src/TableHeader.module.js'

describe("HW-04: Table Header class should render", function () {
  it("Table Header should appear ", function () {
    document.body.onload = function () {
      var data = ['Mentee Name', 'Total Suits', 'Total Tests', 'Passed Tests', 'Failed Tests', 'Status'];
      var tableHeader = new TableHeader(...data);
      document.body.innerHTML = `<!-- Table Header Template -->
            ${tableHeader.template().trim()}
          <!-- Endof Table Header Template -->`;
      expect(document.querySelector('.tb-header')).toBeDefined();
    }
  })
})