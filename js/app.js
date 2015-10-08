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
		// play hadouken sound
		$(".ryu-throwing").show();
		$(".hadouken").show().animate(
			{'left': '1020px'},
			500,
			function() {
				$(this).hide();
				$(this).css('left', '620px')
			}
		);
	})
	$(".ryu").mouseup(function() {
		$(".ryu-throwing").hide();
		$(".hadouken").hide();
		$(".ryu-ready").show();
	})
});