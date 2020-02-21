import { Card } from "./card.js";

export class CardLayOut{

   constructor(data){
       this.data = data;
   }

   createCards(){
      // return this.data.map(card => new Card(card.name, card.value, card.icon, card.border));
      return this.data.map(card => new Card(...Object.values(card)));
   }

   template(){
       let cards = this.createCards();
       return `
       <!--LayOut Template -->
       <div class="row">
       <!--cards list -->
       ${cards.map(item => item.template().trim()).join('')}
       </div>
       <!-- END of LayOut Template -->`;
   }
}




