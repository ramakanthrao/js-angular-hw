export class TableHeader {

  constructor(data) {
      this.data = data;
  }
 
  template() {
      return `<!-- HEADER TEMPLATE -->
      <tr>
      ${this.data.map(item => `<th>${item}</th>`).join("\n")}
      </tr>
      <!-- HEADER TEMPLATE -->`;
  }
}
