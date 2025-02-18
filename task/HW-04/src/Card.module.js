export class Card {
  constructor(data){
    this.name = data.name,
    this.value = data.value,
    this.icon = data.icon,
    this.border = data.border;
  }
  

	template(){
      return `<!-- Card Template -->
            <div class="col-xl-3 col-md-6 mb-4">
              <div class="card ${this.border} shadow h-100 py-2">
                <div class="card-body">
                  <div class="row no-gutters align-items-center">
                    <div class="col mr-2">
                      <div id="name-1" class="text-xs font-weight-bold text-primary text-uppercase mb-1">${this.name}</div>
                      <div id="value-1" class="h5 mb-0 font-weight-bold text-gray-800">${this.value}</div>
                    </div>
                    <div class="col-auto">
                      <i id="icon-1" class="fas ${this.icon} fa-2x text-gray-300"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
			<!-- Endof Card Template -->`;
    }
};

