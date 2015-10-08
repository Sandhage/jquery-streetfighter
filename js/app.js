$(document).ready(function() {
	$(".ryu").mouseenter(function() {
		$(".ryu-still").hide();
		$(".ryu-ready").show();
	})
	$(".ryu").mouseleave(function() {
		$(".ryu-ready").hide();
		$(".ryu-still").show();
	})
	$(".ryu").mousedown(function() {
		$(".ryu-ready").hide();
		$(".ryu-throwing").show();
		$(".hadouken").show();
		// play hadouken sound
	})
	$(".ryu").mouseup(function() {
		$(".ryu-throwing").hide();
		$(".hadouken").hide();
		$(".ryu-ready").show();
	})
});