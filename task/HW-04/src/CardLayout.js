import {Card} from './Card.js'
export class CardLayout {
	constructor(data){
      let crds = [];
		data.forEach((item, index)=>{
			crds.push(new Card(item.name,item.value,item.icon,item.border));
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