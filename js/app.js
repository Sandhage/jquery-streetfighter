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
		playHadouken();
		$(".ryu-ready").hide();
		$(".ryu-throwing").show();
		$(".hadouken").show().animate(
			{'left': '1020px'},
			450,
			'linear',
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

function playHadouken () {
	$("#hadouken-sound")[0].volume = 0.5;
	$("#hadouken-sound")[0].load();
	$("#hadouken-sound")[0].play();
}

$(document).keydown(function(e) {
  if( e.keyCode == 88 ) {
    $(".ryu-still").hide();
    $(".ryu-ready").hide();
    $(".ryu-cool").show();
  }
});
$(document).keyup(function(e) {
  if( e.keyCode == 88 ) {
    $(".ryu-cool").hide();
    $(".ryu-still").show();
    $(".ryu-ready").show();
  }
});