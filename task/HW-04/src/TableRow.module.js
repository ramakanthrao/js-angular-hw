export class TableRow {
  constructor(data) {
    this.statusClass = data.statusClass;
	delete data.statusClass;
	this.data = data;
    console.log(data.statusClass);

    this.templateString = `<!-- Table Row template-->
                            <tr>
                             ${Object.values(this.data).map((item, index) => {
                                 return index === 5
                                   ? `<td class=${this.statusClass}>${item}</td>`
                                   : `<td>${item}</td>`;
                               })
                               .join("\n")}                   
                             
                            </tr>`;
  }
  template() {
    return this.templateString;
  }
}
