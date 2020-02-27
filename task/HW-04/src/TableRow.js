export class TableRow {
  constructor(statusClass, data) {
    this.data = data;
    console.log(statusClass);

    this.templateString = `<!-- Table Row template-->
                            <tr>
                             ${this.data
                               .map((item, index) => {
                                 return index === 5
                                   ? `<td class=${statusClass}>${item}</td>`
                                   : `<td>${item}</td>`;
                               })
                               .join("\n")}                   
                             
                            </tr>`;
  }
  template() {
    return this.templateString;
  }
}
