$(document).ready(function() {
	$("form").on("submit", function(event){
		event.preventDefault();
		var myNewTask = $(".listInput").val();
		$(".taskList").append("<li>" + myNewTask + "</li>");
	
	});
	
});
