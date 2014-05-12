var itemsLeft = function() {
	var markup = "";
	var i;

	for (i = 0; i < toDoArr.length; i++) {
		markup += "Items Left" + "(" + toDoArr.length + ")";
		return markup;	
		};

};

$(document).ready(function() {
	$("form").on("submit", function(event){
		event.preventDefault();
		var myNewTask = $(".listInput").val();
		console.log ("you added a task");
		toDoArr.push(myNewTask);

		$(".taskList").append("<li><span class=\"glyphicon glyphicon-check\"></span> " + myNewTask + "</li>");
	
	});

	$(".taskList").on("click", ".glyphicon-check", function(e) {
		alert("hello Kat");
	});

	$(".taskList").click (function() {
		$("li").splice(myNewTask);
	});


	
});
