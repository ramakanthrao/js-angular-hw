//by pratyush chhibber

class Suit {
    constructor(name,description,passedTestCount,failedTestCount,totalTestCount,testStatus,testStatusClass, specs ){
      this.name = name,
      this.description = description,
      this.passedTestCount = passedTestCount,
      this.failedTestCount = failedTestCount;
      this.totalTestCount = totalTestCount;
      this.testStatus =testStatus;
      this.testStatusClass =testStatusClass;
      this.specs = specs;
    }
};

class Spec{
    constructor(name , description , result , failedReasons ){
        this.name = name
        this.description = description
        this.result = result
        this.failedReasons = failedReasons
    }
}

//Karnakar & Sridhar
class Table{

    constructor(name,data,tableHeader,tableRows,tableOptions){
    this.name=name;
    this.data=data;
    this.tableHeader=tableHeader;
    this.tableRows=tableRows;
    this.tableOptions=tableOptions;
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

class AreaChart{
  constructor(data){
    this.data=data;
    }
  
 template=`<!-- Area Chart -->
 <div class="col-xl-8 col-lg-7">
   <div class="card shadow mb-4">
     <!-- Card Header - Dropdown -->
     <div class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
       <h6 class="m-0 font-weight-bold text-primary">Earnings Overview</h6>
       <div class="dropdown no-arrow">
         <a class="dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
           <i class="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i>
         </a>
         <div class="dropdown-menu dropdown-menu-right shadow animated--fade-in" aria-labelledby="dropdownMenuLink">
           <div class="dropdown-header">Dropdown Header:</div>
           <a class="dropdown-item" href="#">${data.Action}</a>
           <a class="dropdown-item" href="#">${data.Anotheraction}</a>
           <div class="dropdown-divider"></div>
           <a class="dropdown-item" href="#">${data.Something}</a>
         </div>
       </div>
     </div>
     <!-- Card Body -->
     <div class="card-body">
       <div class="chart-area">
         <canvas id="myAreaChart"></canvas>
       </div>
     </div>
   </div>
 </div>
<!-- End of Area Chart -->`;

  template(){
    
    return template;
  }
}

// vedadri
class TableRow{   
  constructor(data, template) {
    this.data = data;    
    this.templateString = `<!-- Table Row template-->
                            <tr>
                             ${data.map(item => `<td>${item}</td>`).join("\n")}
                            </tr>`
  }
template(){
 return this.templateString; 
}
}

class TableHeader {

    constructor(data) {
        this.data = data;
    }
   
    template() {
        return `<!-- HEADER TEMPLATE -->
        <tr>
        ${data.map(item => `<th>${item}</th>`).join("\n")}
        </tr>
        <!-- HEADER TEMPLATE -->`;
    }
}

//Ismail
class HomeWork{
   
    constructor(name,description, hwMetrics,suits){
        this.name = name;
        this.description = description;
        this.passedTestCount = hwMetrics.passedTestCount;
        this.failedTestCount = hwMetrics.failedTestCount;
        this.totalTestCount = hwMetrics.totalTestCount;
        this.totalSuitCount = hwMetrics.totalSuitCount;
        this.failedSuitCount = hwMetrics.failedSuitCount;
        this.testStatus = hwMetrics.testStatus;
        this.testStatusClass = hwMetrics.testStatusClass;
        this.suits = suits;
    }

    get name(){
        return this.name;
    }
    get description(){
        return this.description;
    }
    get passedTestCount(){
        return this.passedTestCount;
    }
    get failedTestCount(){
        return this.failedTestCount;
    }
    get totalTestCount(){
        return this.totalTestCount;
    }
    get totalSuitCount(){
        return this.totalSuitCount;
    }
    get failedSuitCount(){
        return this.failedSuitCount
    }
    get  testStatus(){
        return this.testStatus;
    }
    get testStatusClass(){
        return this.testStatusClass;
    }

    get suits(){
        return this.suits;
    }

}


