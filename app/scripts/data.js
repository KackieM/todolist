$(document).ready(function() {
	$("form").on("submit", function(event){
		event.preventDefault();
		var myNewTask = $(".newInput").val();
		$(".taskList").prepend("<li>" + myNewTask + "</li>");
	
	});
	
});

