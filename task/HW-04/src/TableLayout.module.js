import { TableRow } from "./TableRow.module.js";
export class TableLayout {
  constructor(data) {
    this.totallRows = data.map(item => new TableRow(...item));
  }

  template() {
    return `		<!-- Table Layout Template-->
      <div class="row">
      ${this.totallRows.map((item, i) => item.template().trim()).join("")}
  </div>
  <!-- END OF Table Layout Template-->`;
  }
}
