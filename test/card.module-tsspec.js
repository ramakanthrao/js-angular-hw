import {Card} from '../src/Card.module'

describe("HW-04: Card class should render",function(){
  it("Card name should appear ",function(){

	document.body.onload = function() {
		var card = new Card('Total Users', 22, 'fa-users', 'border-left-success');
		document.body.innerHTML = card.template();
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
