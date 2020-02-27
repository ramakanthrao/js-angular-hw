import {CardLayout} from '../src/CardLayout.module.js'

describe("HW-04: Card Layout class should render",function(){
  it("Card name should appear ",function(){

	document.body.onload = function() {

		var data = 		[{name:'Total Users', value:22, className:'fa-users', info:'border-left-primary'},
		{name:'Total HomeWorks', value:4, className:'fa-home', info:'border-left-success'}];
		var cardLayout = new CardLayout(data);
		document.body.innerHTML = cardLayout.template();
		expect(document.querySelector('#name-1')).toContainText('Total Users');
		//done();
	}; });
  
  it("Card value should appear",function(){
	document.body.onload = function() {
		var card = new Card('Total Users', 22, 'fa-users', 'border-left-success');
		document.body.innerHTML = card.template();
		expect(document.querySelector('#value-1')).toContainText('22');
	}
  });
});