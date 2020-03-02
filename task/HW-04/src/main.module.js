import { CardLayout } from "./CardLayout.module.js";
import { Footer } from "./Footer.module.js";
import { ContentHeader } from "./ContetntHeader.module.js";
import { Dashboard } from "./Dashboard.module.js";
import { TableHeader } from "./TableHeader.module.js";
import { Table } from "./Table.module.js";
import { TableLayout } from "./TableLayout.module.js";
import { tabeleHeaderLayOutData,tableLayoutData,CardLayOutData } from "./Data.module.js"
export const var1 = 111;

window.loadDashBoard = function() {
  let cardLayout = onPageLoad();
  let tableLayout = loadTable();
  let footer = new Footer().template();
  let contentHeader = new ContentHeader().template();
  let dashboard = new Dashboard(cardLayout, footer, contentHeader, tableLayout);
  let templateString = dashboard.template();
  document.body.innerHTML = templateString;
};

let loadTable = function() {
  let tableLayout = new TableLayout(tableLayoutData).template();
  let tableHeader = new TableHeader(tabeleHeaderLayOutData).template();
  let templateString = new Table(
    "Test Report",
    tableHeader,
    tableLayout
  ).template();
  return templateString;
};

let onPageLoad = function() {
  let cardLayOut = new CardLayout(CardLayOutData);
  let templateString = cardLayOut.template();
  return templateString;
};
