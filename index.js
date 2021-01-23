$(document).ready(function () {
	$("body").hide().fadeIn(1000);
	$("a").click(function (e) {
		e.preventDefault();
		$link = $(this).attr("href");
		$("body").fadeOut(1000, function () {
			window.location = $link;
		});
	});
});

(() => {})();
