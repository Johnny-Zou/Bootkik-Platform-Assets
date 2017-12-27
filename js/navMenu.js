$(document).ready(function(){
	//event listener for the menu button
	$(".navMenu__button .navMenu__openButton").on("click",function(){
		//this will open the menu
		$(".navMenu__background").removeClass("navMenu__background--hidden").addClass("navMenu__background--active");
		//hide the open button show the close button
		$(".navMenu__button .navMenu__openButton").addClass("navMenu__openButton--hidden");
		$(".navMenu__button .closeButton").removeClass("closeButton--hidden");

	});

	//event listener for the close button
	$(".navMenu__button .closeButton").on("click",function(){
		//this will hide the menu
		$(".navMenu__background").removeClass("navMenu__background--active").addClass("navMenu__background--hidden");
		//hide the close button show the open button
		$(".navMenu__button .navMenu__openButton").removeClass("navMenu__openButton--hidden");
		$(".navMenu__button .closeButton").addClass("closeButton--hidden");
	});

});