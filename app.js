
	function calculateTime() {
	let task1Name = document.getElementById("task1Name").value;
	let task2Name = document.getElementById("task2Name").value;
	let task3Name = document.getElementById("task3Name").value;
	let task4Name = document.getElementById("task4Name").value;
	let task5Name = document.getElementById("task5Name").value;
	let task1 = Number(document.getElementById("task1").value);
	let task2 = Number(document.getElementById("task2").value);
	let task3 = Number(document.getElementById("task3").value);
	let task4 = Number(document.getElementById("task4").value);
	let task5 = Number(document.getElementById("task5").value);
	let totalSpentTime = task1 + task2 + task3 + task4 + task5;
	let timeLeft = 24 - totalSpentTime;
	document.getElementById("timeLeft").value = timeLeft + " hours";

	let data = {
		labels: [task1Name, task2Name, task3Name, task4Name, task5Name],	
		datasets: [
			{
				label: "Time spent",
				data: [task1, task2, task3, task4, task5],
				backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#FF5733", "#9FFF33"]
			}
		]
	};

	let options = {
		title: {
			display: true,
			text: "Time spent on each task"
		}
	};

	let ctx = document.getElementById("pieChart").getContext("2d");
	let pieChart = new Chart(ctx, {
		type: "pie",
		data: data,
		options: options
	});
}
