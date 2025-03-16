var xValues = ["2019", "2020", "2021", "2022", "2023"];
var yValues = [1.16, 2.95, 5.99, 8.44, 11.50, 0];
var barColors = ["#0f4c5c", "#e36414", "#fb8b24", "#9a031e", "#5f0f40"];
new Chart("myChart", {
	type: "bar",
	data: {
		labels: xValues,
		datasets: [{
			backgroundColor: barColors,
			data: yValues
		}]
	},
	options: {
		legend: {display: false},
		title: {
			display: true,
			text: "Estimated cost of cybercrime worldwide (in USD trillion)"
		},
		scales: {
			yAxes: [{
				ticks: {
					beginAtZero: true
				}
			}],
		},
	}
});

var xValues = ["Healthcare", "Education", "Technology", "Public", "Retail and Liesure", "Professional Services", "Financial Services", "Manufacturing", "Other"];
var yValues = [27, 18, 11, 11, 9, 6, 5, 4, 9];
var barColors = ["#e76f51", "#ee8959", "#f4a261", "#efb366", "#e9c46a", "#8ab17d", "#2a9d8f", "#287271", "#264653"];

new Chart("Chart", {
	type: "pie",
	data: {
		labels: xValues,
		datasets: [{
			backgroundColor: barColors,
			data: yValues
		}]
	},
	options: {
		title: {
			display: true,
			text: "Data breach and cyber attacks by sector (Q1 2023)"
		}
	}
});