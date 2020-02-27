import {Card} from './Card.module.js'

export class CardLayout {
	constructor(data){
		this.cards = data.map((item, index)=> new Card(Object.values(item)));
	}
	
	template(){
	return `<!-- Card Layout Template-->
        <div class="row">
			 ${this.cards.map((item, i) => item.template().trim()).join('')}
		</div>
		<!-- END OF Card Layout Template-->`
	}
}