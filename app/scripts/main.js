// $(document).ready(function() {
// 	// $("http://tiy-fee-rest.herokuapp.com/collections/kat")

// 	$("form").on("submit", function(event){
// 		event.preventDefault();
// 		var myNewTask = $(".listInput").val();
// 		var taskArrayObj = {
// 			todo: myNewTask
// 		};
		
// 		taskArray.push(taskArrayObj);

// 		$(".taskList").append("<li>" + myNewTask + "</li>");
	
// 	});
	
// });


$(document).ready(function() {
	$("form").on("submit", function(event){
		event.preventDefault();
		var myNewTask = $(".listInput").val();
		$(".taskList").append("<li>" + myNewTask + "</li>");
	
	});
	
});
