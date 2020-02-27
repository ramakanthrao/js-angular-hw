import { CardLayout } from "./CardLayout.module.js";
import { Footer } from "./Footer.module.js";
import { ContentHeader } from "./ContetntHeader.module.js";
import { Dashboard } from "./Dashboard.module.js";
import { TableHeader } from "./TableHeader.module.js";
import { Table } from "./Table.module.js";
import { TableLayout } from "./TableLayout.module.js";
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
  let layOutData = [
    "Mentee Name",
    "Total Suits",
    "Total Tests",
    "Passed Tests",
    "Failed Tests",
    "Status"
  ];
  let tableLayoutData = [
    ["bg-gradient-danger text-gray-300",["Pratyush Chhibber", 16, 43, 26, 17, "Fail"]],
    ["bg-gradient-danger text-gray-300",["Apurv", 16, 43, 26, 17, "Fail"]],
    ["bg-gradient-success text-gray-100",["Rahul", 16, 43, 26, 17, "Pass"]]
  ];
  let tableLayout = new TableLayout(tableLayoutData).template();
  let tableHeader = new TableHeader(layOutData).template();
  let templateString = new Table(
    "Test Report",
    tableHeader,
    tableLayout
  ).template();
  return templateString;
};
let onPageLoad = function() {
  let layOutData = [
    {
      name: "Total Users",
      value: 20,
      icon: "fa-users",
      border: "border-left-primary"
    },
    {
      name: "Total HomeWorks",
      value: 10,
      icon: "fa-home",
      border: "border-left-success"
    },
    {
      name: "Total Suits",
      value: 5,
      icon: "fa-cubes",
      border: "border-left-info"
    },
    {
      name: "Total Tests",
      value: 25,
      icon: "fa-tasks",
      border: "border-left-info"
    }
  ];
  console.log("Hello");
  let cardLayOut = new CardLayout(layOutData);

  let templateString = cardLayOut.template();
  console.log("FULL TEMPLATE");
  console.log(templateString);
  // document.body.innerHTML = templateString;
  return templateString;
};
