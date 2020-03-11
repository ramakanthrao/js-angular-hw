import {Card} from '../src/Card.module.js'
import {testData} from './testData.js'
describe("HW-04: Card class should render",function(){
	
	beforeAll(function() {
		try {
			var body = document.getElementsByTagName("body")[0];
			var card = new Card(testData.cards[0]);
			body.innerHTML = card.template();
		}catch(er){
			console.log(er);
		}		
    });
	
  it("Card name should appear ",function(){
		expect(document.querySelector('.card')).toBeDefined();
		expect(document.querySelectorAll('.card').length).toBe(1);
		expect(document.querySelector('.card.border-left-primary .text-xs').textContent).toBe('Total Users');
	});
  
  it("Card value should appear",function(){

		var card = new Card(testData.cards[1]);
		document.body.innerHTML = card.template();
		expect(document.querySelector('.card')).toBeDefined();
		expect(document.querySelectorAll('.card').length).toBe(1);
		expect(document.querySelector('.card .h5').textContent).toBe('4');

  });
});