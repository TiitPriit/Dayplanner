// Get the daily schedule table and time inputs
var dailyScheduleTable = document.getElementById("daily-schedule");
var timeInputs = document.getElementsByClassName("time-input");
var eventInputs = document.getElementsByClassName("event-input");

// Load the daily schedule from local storage, if available
var dailySchedule = JSON.parse(localStorage.getItem("dailySchedule"));
if (dailySchedule) {
	for (var i = 0; i < dailySchedule.length; i++) {
		timeInputs[i].value = dailySchedule[i].time;
		eventInputs[i].value = dailySchedule[i].event;
	}
}

// Save the daily schedule to local storage when the Save button is clicked
document.getElementById("save-button").addEventListener("click", function() {
	var dailySchedule = [];
	for (var i = 0; i < timeInputs.length; i++) {
		dailySchedule.push({
			time: timeInputs[i].value,
			event: eventInputs[i].value
		});
	}
	localStorage.setItem("dailySchedule", JSON.stringify(dailySchedule));
	alert("Daily schedule saved.");
});

// Clear the daily schedule when the Clear button is clicked
document.getElementById("clear-button").addEventListener("click", function() {
	localStorage.removeItem("dailySchedule");
	alert("Daily schedule cleared.");
});
