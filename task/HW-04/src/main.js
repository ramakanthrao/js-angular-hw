import {CardLayOut} from './CardLayout.js'

export const var1 =111;

window.onPageLoad = function(){
  var layOutData = [{ name: 'Total Users', value: 20, icon: 'fa-users', border: 'border-left-primary' },
      { name: 'Total HomeWorks', value: 10, icon: 'fa-home', border: 'border-left-success' },
      { name: 'Total Suits', value: 5, icon: 'fa-cubes', border: 'border-left-info' },
      { name: 'Total Tests', value: 25, icon: 'fa-tasks', border: 'border-left-info' }]
      console.log("Hello");
      var cardLayOut = new CardLayOut(layOutData);

      var templateString = cardLayOut.template();
      console.log("FULL TEMPLATE");
      console.log(templateString);
      document.body.innerHTML = templateString;
      // return templateString;
}
