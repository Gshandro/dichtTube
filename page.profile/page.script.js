$(document).ready(function() {
	
});

$("html").on("click", "[data-event=\"profile-tab\"]", function(mEvent) {
	mEvent.preventDefault();
	mEvent.stopPropagation();

	if($(this).attr("active") != "active") {
		var mTarget = $(this).attr("data-toggle");

		if(mTarget == "profile-search") {
			$(this).html("<div class='form-group'><label class='control-label' for='focusedInput'>Focused input</label><input class='form-control' id='focusedInput' type='text' value='This is focused...'></div>")
		}
		
		$(".profile.tab.item[active=active]").removeAttr("active");
		$(".profile.tab.item[data-toggle="+mTarget+"]").attr("active", "active");

		$(".profile.tab.content[active=active]").stop().fadeOut(150, function() {
			$(this).removeAttr("active");
			$(".profile.tab.content[data-target="+mTarget+"]").stop().fadeIn(150, function () {
				$(this).attr("active", "active");
			});
		});
	}
});

$("body").on("mouseover", ".easyTabItem", function(mEvent) {
	$("div > i", this).stop().animate({ fontSize: "22px" }, 150);
});

$("body").on("mouseleave", ".easyTabItem", function(mEvent) {
	$("div > i", this).stop().animate({ fontSize: "18px" }, 150);
});