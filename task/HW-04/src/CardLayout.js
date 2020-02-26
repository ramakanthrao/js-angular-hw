class CardLayout {
	constructor(data){
      let crds = [];
		data.forEach((item, index)=>{
			crds.push(new Card(Object.values(item)));
		});
      this.cards = crds
	}
	
	template(){
	return `<!-- Card Layout Template-->
        <div class="row">
			 ${this.cards.map((item, i) => item.template().trim()).join('')}
		</div>
		<!-- END OF Card Layout Template-->`
	}
}