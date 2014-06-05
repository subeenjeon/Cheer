$(document).ready(function(){
	$("#logo").fadeIn(3000, function(){
		showMenu();
	});
	$("#menu").hide();
	$("#player").hide();

	$("#playButton").click(function(){
		showPlayer();
	});

	$("#player").click(function(){
		backToMenu();
	});
});

var showMenu = function() {
	$("#logo").fadeOut();
	$("#menu").fadeIn();
};

var backToMenu = function() {
	$("#player").fadeOut();
	$("#menu").fadeIn();
};

var showPlayer = function() {
	$("#menu").fadeOut();
	$("#player").fadeIn();
}