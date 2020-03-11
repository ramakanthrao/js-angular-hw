import { TableLayout } from '../src/TableLayout.module.js'

describe("HW-04: Table Row class should render", function () {
    fit("Table row should appear ", function () {
        document.body.onload = function () {
            var tablelayout = new TableLayout();
            document.body.innerHTML = `<!-- Table Template-->
                ${tablelayout.template().trim()}
             <!-- End of Table Template-->`;
            expect(document.querySelector('.row')).toBeDefined();
        }
    })
});