$(".js-mob-nav").on("click", function(){

});


$(".js-menu-dropdown").on("click", function(){
	$(this).parents(".menu__row-list").toggleClass("menu__row-list--expand").find(".menu__sub").toggleClass("menu__sub--show");
});