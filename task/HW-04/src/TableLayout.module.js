import { Table } from "./Table.module.js";
export class TableLayout {
  constructor(data) {
    this.table = new Table(data);
  }

  template() {
    return `		<!-- Table Layout Template-->
      <div class="row">
      ${this.table.template().trim()}
  </div>
  <!-- END OF Table Layout Template-->`;
  }
}
