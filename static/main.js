$(document).ready(function(){
	var v_width = 0;
	var v_height = 0;
	var addedVideo = false;



	function isMobile() {
	    var thres_w = 740;
	    if ($(window).width() < thres_w) {
	        return true;
	    }
	    return false;
	}


	$('#sections').waypoint(function() {
		$('header').toggleClass('nav_primary_bg');
		$('#mc_embed_signup_header').toggleClass('animate');
		$('.nav_primary').toggleClass('animate');
		$('.opl').toggleClass('animate');
	}, {
		offset : 60
	});
	
	$('#header').after('<video id="video-loops" width="1280" height="720" autoplay="" loop="">' +
			'<source data-format="mp4" type="video/mp4" src="assets/videos/teektak_bg.mp4">' +
//			'<source data-format="ogv" type="video/ogg" src="assets/videos/teektak_bg.ogv">' +
		'</video>');
	
	setVideoRatio();
    
    $(window).resize(function() {
    	setVideoRatio();
	});

    function setVideoRatio() {
		if(!isMobile()) {
			$('#video-loops').show();
		} else { 
			$('#video-loops').hide();
		}
    }
	
	$('.emailInputButton').on('click', function() {
		ga('send', 'event', 'button', 'click', 'subscribe early access');
	});
});