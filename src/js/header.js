$(".js-mob-nav").on("click", function(){
	$(".hdr__nav").addClass("hdr__nav--show");
});


$(".js-expand-list").on("click", function(){
	$(this).toggleClass("menu__li-1--expanded");
});

$(".js-close-menu").on("click", function(){
	$(".hdr__nav").removeClass("hdr__nav--show");
});
