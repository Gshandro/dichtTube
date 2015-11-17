$(document).ready(function() {
	$("body").on("click", "[data-event=\"toggle-video\"]", function(mEvent) {
		mEvent.preventDefault();
		mEvent.stopPropagation();
		
		var mVideo = $(this).attr("data-video");
		var mState = parseInt($(this).attr("data-state"));
		var mVideoContainer = $("[data-video-container=\"" + mVideo + "\"]");
		var mVideoInteraction = $(".easyVideoElement > .easyVideoInteraction", $(this).parent().parent());
		var mVideoInlineMeta = $(".easyVideoElement > .easyVideoInlineMeta", $(this).parent().parent());
		
		if(mState == 0) {
			$(mVideoInlineMeta).stop().fadeOut(150);
			$(mVideoInteraction).html("<i class=\"glyphicon glyphicon-pause\"></i>").stop().fadeIn(150).delay(1500).fadeOut(150);
			$(this).html("<i class=\"glyphicon glyphicon-pause\"></i>");
			$(this).attr("data-state", 1);
			 $(mVideoContainer).each(function () { this.play() });
		} else {
			$(mVideoInlineMeta).stop().fadeIn(150);
			$(mVideoInteraction).html("<i class=\"glyphicon glyphicon-play\"></i>").stop().fadeIn(150);
			$(this).html("<i class=\"glyphicon glyphicon-play\"></i>");
			$(this).attr("data-state", 0);
			$(mVideoContainer).each(function () { this.pause() });
		}
	});
	
	$("[data-video]").bind("progress", function(mEvent) {
		var mBuffered = this.buffered;
		var mCurrentTime = this.currentTime;
		var mVideoLength = this.duration;
		
		var mBarLength = (100 / mVideoLength) * mCurrentTime;
		$(".easyVideoLengthBar").css("width", mBarLength + "%");
	});
	
	$("body").on("mousemove", ".easyVideoLength", function(mEvent) {
		var mOffset = $(this).offset();
		var mLeftPosition = mEvent.pageX - mOffset.left;
		
		$(".easyVideoSelector", this).stop().css({ "left": mLeftPosition + "px" }).fadeIn(150);
	});
	
	$("body").on("click", ".easyVideoSelector", function(mEvent) {
		mEvent.preventDefault();
		mEvent.stopPropagation();
		
		var mVideo = $(this).attr("data-video");
		var mLeftPosition = $(this).css("left");
		mLeftPosition = mLeftPosition.substr(0, mLeftPosition.length - 2);
		var mProgressWidth = $(this).parent().css("width");
		mProgressWidth = mProgressWidth.substr(0, mProgressWidth.length - 2);
		var mPercentageOfWidth = 100 / mProgressWidth;
		var mPercentInvoked = mPercentageOfWidth * mLeftPosition;
		
		$("[data-video-container=\"" + mVideo + "\"]").each(function () {
			var mVideoInvokedLengthChange = (this.duration / 100) * mPercentInvoked;
			this.currentTime = mVideoInvokedLengthChange;
		});
	});
	
	$("body").on("mouseleave", ".easyVideoLength", function(mEvent) {
		$(".easyVideoSelector", this).stop().fadeOut(150);
	});
	
	$(".easyVideoSelector").draggable({
		start: function() {
			var mVideo = $(this).attr("data-video");
			var mLeftPosition = $(this).css("left");
			mLeftPosition = mLeftPosition.substr(0, mLeftPosition.length - 2);
			var mProgressWidth = $(this).parent().css("width");
			mProgressWidth = mProgressWidth.substr(0, mProgressWidth.length - 2);
			var mPercentageOfWidth = 100 / mProgressWidth;
			var mPercentInvoked = mPercentageOfWidth * mLeftPosition;
			
			$("[data-video-container=\"" + mVideo + "\"]").each(function () {
				var mVideoInvokedLengthChange = (this.duration / 100) * mPercentInvoked;
				this.currentTime = mVideoInvokedLengthChange;
			});
		},
		drag: function() {
			var mVideo = $(this).attr("data-video");
			var mLeftPosition = $(this).css("left");
			mLeftPosition = mLeftPosition.substr(0, mLeftPosition.length - 2);
			var mProgressWidth = $(this).parent().css("width");
			mProgressWidth = mProgressWidth.substr(0, mProgressWidth.length - 2);
			var mPercentageOfWidth = 100 / mProgressWidth;
			var mPercentInvoked = mPercentageOfWidth * mLeftPosition;
			
			$("[data-video-container=\"" + mVideo + "\"]").each(function () {
				var mVideoInvokedLengthChange = (this.duration / 100) * mPercentInvoked;
				this.currentTime = mVideoInvokedLengthChange;
			});
		},
		stop: function() {
			var mVideo = $(this).attr("data-video");
			var mLeftPosition = $(this).css("left");
			mLeftPosition = mLeftPosition.substr(0, mLeftPosition.length - 2);
			var mProgressWidth = $(this).parent().css("width");
			mProgressWidth = mProgressWidth.substr(0, mProgressWidth.length - 2);
			var mPercentageOfWidth = 100 / mProgressWidth;
			var mPercentInvoked = mPercentageOfWidth * mLeftPosition;
			
			$("[data-video-container=\"" + mVideo + "\"]").each(function () {
				var mVideoInvokedLengthChange = (this.duration / 100) * mPercentInvoked;
				this.currentTime = mVideoInvokedLengthChange;
			});
		},
		containment: "parent"
	});
	
	$("body").on("mouseover", ".easyVideoUI > .easyVideoUIItem", function(mEvent) {
		$(this).stop().animate({ right: "0px", backgroundColor: "rgba(255, 255, 255, 0.9)", borderColor: "rgb(26, 188, 156)" }, 150);
	});
	
	$("body").on("mouseleave", ".easyVideoUI > .easyVideoUIItem", function(mEvent) {
		$(this).stop().animate({ right: "-100px", backgroundColor: "transparent", borderColor: "transparent" }, 150);
	});
	
	$("body").on("click", "[data-event=\"initialize-video-tab\"]", function(mEvent) {
		$(this).parent().parent().animate({ width: "50%" }, 150).promise().done(function() {;
			$(".easyVideoInterface", $(this).parent().parent().parent()).fadeIn(150);
		});
	});
	
	$("body").on("click", "[data-event=\"close-tab\"]", function(mEvent) {
		$(".easyVideoInterface", $(this).parent().parent().parent()).fadeOut(150).promise().done(function() {;
			$(".easyVideoElement", $(this).parent().parent().parent()).animate({ width: "100%" });
		});
	});
	
	$("body").on("click", "[data-event=\"play-video-at\"]", function(mEvent) {
		mEvent.preventDefault();
		mEvent.stopPropagation();
		
		var mVideo = $(this).attr("data-video");
		var mTime = $(this).attr("data-time");
		var mVideoContainer = $("[data-video-container=\"" + mVideo + "\"]");
		var mVideoPlayer = $("[data-video-player=\"" + mVideo + "\"]");
		var mVideoControlPlayButton = $(".easyVideoControl > .easyVideoPlay", mVideoPlayer);
		$(mVideoControlPlayButton).attr("data-state", "1");
		$("i", mVideoControlPlayButton).removeClass("glyphicon-play").addClass("glyphicon-pause");
		$(mVideoContainer).each(function() {
			this.currentTime = mTime;
			this.play();
		});
	});
	
	$("body").on("click", ".easyVideoFrame > video", function(mEvent) {
		var mVideoInteraction = $(".easyVideoInteraction", $(this).parent().parent());
		var mVideoPlayButton = $(".easyVideoControl > .easyVideoPlay", $(this).parent().parent().parent());
		var mVideoPlayButtonState = $(mVideoPlayButton).attr("data-state");
		var mVideoIdentifier = $(mVideoPlayButton).attr("data-video");
		var mVideoContainer = $("[data-video-container=\"" + mVideoIdentifier + "\"]");
		var mVideoInlineMeta = $(".easyVideoInlineMeta", $(this).parent().parent());
		
		if(mVideoPlayButtonState == "0") {
			$(mVideoInlineMeta).stop().fadeOut(150);
			$(mVideoInteraction).html("<i class=\"glyphicon glyphicon-pause\"></i>").stop().fadeIn(150).delay(1500).fadeOut(150);
			$(mVideoPlayButton).html("<i class=\"glyphicon glyphicon-pause\"></i>");
			$(mVideoPlayButton).attr("data-state", "1");
			$(mVideoContainer).each(function() {
				this.play();
			});
			
		} else {
			$(mVideoInlineMeta).stop().fadeIn(150);
			$(mVideoInteraction).html("<i class=\"glyphicon glyphicon-play\"></i>").stop().fadeIn(150);
			$(mVideoPlayButton).html("<i class=\"glyphicon glyphicon-play\"></i>");
			$(mVideoPlayButton).attr("data-state", "0");
			$(mVideoContainer).each(function() {
				this.pause();
			});
		}
	});
});