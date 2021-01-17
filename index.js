$(".works").click(() => {
	$("*:not(.header)").fadeOut(3000, () => {
		window.location.href("/works");
	});
});

$(".links").click(() => {
	$("*:not(.header)").fadeOut(3000, () => {
		window.location.href("/links");
	});
});
