import { TableRow } from '../src/TableRow.module.js'

describe("HW-04: Table Row class should render", function () {
  it("Table row should appear ", function () {
    document.body.onload = function () {
      var data = ['Ramakanth', 9, 13, 1, 12, 'RED'];
      var data = ['Apurv Vaidya', 16, 43, 3, 32, 'YELLOW'];
      var data = ['Anjaneyelu Neerati', 17, 48, 46, 2, 'GREEN'];
      var tableRow1 = new TableRow(...data);
      var tableRow2 = new TableRow(...data);
      var tableRow3 = new TableRow(...data);
      var rows = [tableRow1, tableRow2, tableRow3];
      document.body.innerHTML = `<!-- Table Template-->
        <div class="card shadow mb-4">
          <div class="card-header py-3">
            <h6 class="m-0 font-weight-bold text-primary">Test Report</h6>
          </div>
          <div class="card-body">
            <div class="table-responsive">
              <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
      <!-- Table header here -->
                <tbody>
                ${this.rows.map((item, i) => item.template().trim()).join('')}
                </tbody>
              </table>
            </div>
          </div>
        </div>
  <!-- End of Table Template-->`;
      expect(document.querySelector('.row')).toBeDefined();
    }
  })
});