$(document).ready(function() {

var ryuStatus = "still";

	// Mouseenter and Mouseleave
	$(".ryu").mouseenter(function() {
		$(".ryu-still").hide();
		$(".ryu-ready").show();
		ryuStatus = "ready";
	})
	.mouseleave(function() {
		$(".ryu-ready").hide();
		$(".ryu-still").show();
		ryuStatus = "still";
	})
	.mousedown(function() {
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
	.mouseup(function() {
		$(".ryu-throwing").hide();
		$(".hadouken").hide();
		$(".ryu-ready").show();
	});

// Keydown and Keyup
	$(document).keydown(function(e) {
  		if( e.keyCode == 88 ) {
   			$(".ryu-still").hide();
    		$(".ryu-ready").hide();
    		$(".ryu-cool").show();
 		}
	})
	$(document).keyup(function(e) {
		if( e.keyCode == 88 ) {
			$(".ryu-cool").hide();
			if ( ryuStatus == "ready") {  	
    			$(".ryu-ready").show();
			} else {
				$(".ryu-still").show();	
			}
		}
	})
});

// Playback audio
function playHadouken () {
	$("#hadouken-sound")[0].volume = 0.5;
	$("#hadouken-sound")[0].load();
	$("#hadouken-sound")[0].play();
}