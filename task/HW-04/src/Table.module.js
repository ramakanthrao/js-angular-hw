export class Table{

  constructor(name,tableHeader,tableRows){
  this.name=name;
  //this.data=data;
  this.tableHeader=tableHeader;
   this.tableRows=tableRows;
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
        ${this.tableHeader}
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
