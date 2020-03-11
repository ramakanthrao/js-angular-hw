import { TableHeader } from './TableHeader.module.js'
import { TableRow } from '../src/TableRow.module.js'
export class Table{

  constructor(data){
  this.name=data.name;
  //this.data=data;
  this.tableHeader=new TableHeader(data.tableHeaders).template();
   this.tableRows= data.tableRows.map((row,index) =>new TableRow(row).template()).join("\n");
  // this.tableOptions=tableOptions;
}
template(){
  return `
  <!-- Table Template-->
  <div class="card shadow mb-4">
    <div class="card-header py-3">
      <h6 class="m-0 font-weight-bold text-primary">${this.name}</h6>
    </div>
    <div class="card-body">
      <div class="table-responsive">
         <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
		 <thead>
        ${this.tableHeader}
		</thead>
          <tbody>
          ${this.tableRows}
          </tbody>
        </table>
      </div>
    </div>
  </div>
  <!-- End of Table Template-->
    `
 }
  
}
