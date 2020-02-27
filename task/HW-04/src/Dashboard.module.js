export class Dashboard {
  constructor(cardLayout, footerLayout, contentHeader,tableLayout) {
    this.cardLayout = cardLayout;
    this.contentHeader = contentHeader;
     this.tableLayout = tableLayout;
    this.footerLayout = footerLayout;
  }
  template() {
    return `  <!-- Page Wrapper -->
  <div id="wrapper">
    <!-- Content Wrapper -->
    <div id="content-wrapper" class="d-flex flex-column">

      <!-- Main Content -->
      <div id="content">
		<!-- Page Header here -->
		<div w3-include-html="PageHeaderTemplate.html"></div>
		<!-- End of Page Header -->

        <!-- Begin Page Content container-fluid container-->
        <div class="container-fluid">

		<!-- Content Header here -->
		<div w3-include-html="ContetntHeaderTemplate.html">${this.contentHeader}</div>
		<!-- End of Content Header -->

          <!-- Card Layout here -->
		  <div w3-include-html="CardLayoutTemplate.html">${this.cardLayout}</div>
		  <!-- End of Card Layout -->
		  
		  <!-- Table Layout here -->
		  <div w3-include-html="TableLayoutTemplate.html">${this.tableLayout}</div>
		  <!-- End of Table Layout -->
		  
		  <!-- Chart Layout here -->
		  <div w3-include-html="ChartLayoutTemplate.html"></div>
		  <!-- End of Chart Layout -->		  
       
		</div>
        <!-- End of  /.container-fluid -->

      </div>
      <!-- End of Main Content -->

      <!-- Footer here -->
	  <div w3-include-html="FooterTemplate.html">${this.footerLayout}</div>
	  <!-- End of Footer -->

    </div>
    <!-- End of Content Wrapper -->

  </div>
  <!-- End of Page Wrapper -->`;
  }
}
// template
// name
// cardLayout
// tableLayout
// chartLayout
// footerLayout
// template()
// data
