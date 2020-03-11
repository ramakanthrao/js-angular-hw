import { TableRow } from '../src/TableRow.module.js'

describe("HW-04: Table Row class should render", function () {
  it("Table row should appear ", function () {
    document.body.onload = function () {
      var data = ['Ramakanth', 9, 13, 1, 12, 'RED'];
      var tableRow = new TableRow(...data);
      document.body.innerHTML = `<!-- Table Template-->
       ${tableRow.template().trim()}
    <!-- End of Table Template-->`;
      expect(document.querySelector('.row')).toBeDefined();
    }
  })
});