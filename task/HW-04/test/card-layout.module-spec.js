import {CardLayout} from '../src/CardLayout.module.js'
import {testData} from './testData.js'
describe("HW-04: Card Layout class should render",function(){

	beforeAll(function() {
		try {
			var body = document.getElementsByTagName("body")[0];
			var cardLayout = new CardLayout(testData.cards);
			body.innerHTML = cardLayout.template();
		}catch(er){
			console.log(er);
		}		
    });
	
  it("Card Layout should appear ",function(){
	expect(document.querySelector('.row .card')).toBeDefined();
	expect(document.querySelectorAll('.row .card').length).toBe(4);

	});
	
  it("Card name should appear ",function(){
		expect(document.querySelector('.row .card')).toBeDefined();
		expect(document.querySelectorAll('.row .card').length).toBe(4);
		expect(document.querySelector('.row .card.border-left-primary .text-xs')).toContainText('Total Users');	
	});
  
  it("Card value should appear",function(){
		expect(document.querySelector('.row .card')).toBeDefined();
		expect(document.querySelectorAll('.row .card').length).toBe(4);
		expect(document.querySelector('.row .card.border-left-primary .h5')).toContainText('22');
  });
  
  it("All cards should appear",function(){
		expect(document.querySelector('.row .card')).toBeDefined();
		expect(document.querySelectorAll('.row .card').length).toBe(4);
  });
});