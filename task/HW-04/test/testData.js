export const testData = {
			table:{
					"name":"Report",
					
					"tableHeaders": [
						"Mentee Name",
						"Total Suits",
						"Total Tests",
						"Passed Tests",
						"Failed Tests",
						"Status"
					],
					tableRows:[
						{
							"menteeName": "Akbar_Mohmad",
							"totalSuits": 13,
							"totalTests": 49,
							"passedTests": 49,
							"failedTests": 0,
							"status": "Pass",
							"statusClass": "bg-gradient-success text-gray-100"
						},
						{
							"menteeName": "Apurv_Vaidya",
							"totalSuits": 13,
							"totalTests": 49,
							"passedTests": 45,
							"failedTests": 4,
							"status": "Fail/Warning",
							"statusClass": "bg-gradient-warning text-gray-100"
						},				
						{
							"menteeName": "Anjaneyelu_Neerati",
							"totalSuits": 13,
							"totalTests": 49,
							"passedTests": 8,
							"failedTests": 41,
							"status": "Fail",
							"statusClass": "bg-gradient-danger text-gray-100"
						},			
					]
				},
			"cards": [
				{
					"name": "Total Users",
					"value": "14",
					"border": "border-left-primary",
					"icon": "fa-users"
				},
				{
					"name": "Total Homeworks",
					"value": "4",
					"border": "border-left-success",
					"icon": "fa-home"
				},
				{
					"name": "Total Suits",
					"value": "13",
					"border": "border-left-info",
					"icon": "fa-cubes"
				},
				{
					"name": "Total Tests",
					"value": "49",
					"border": "border-left-info",
					"icon": "fa-tasks"
				}
			]
	};