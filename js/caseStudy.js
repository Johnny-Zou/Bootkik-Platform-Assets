//story variables
var storyHeight = 0;
var storyInitialTop = 0;

//question variables
var questionNumber = 1;
var questionWidth = 0;
var maxQuestionNumber = 0;

//attach event listeners here
$(document).ready(function(){
	// get variables when window loads
	var story = $(".textContainer--storyText");
	var progressBar = $(".caseStudy__wrapper .caseStudy__storyProgressWrapper--story .progressBar__current");
	var storyUpArrow = $(".caseStudy__wrapper .iconContainer__icon--storyUp");
	var storyDownArrow = $(".caseStudy__wrapper .iconContainer__icon--storyDown");

	var questionInner = $(".caseStudy__wrapper .caseStudy__questionDeckInner");
	var questionLeftArrow = $(".caseStudy__wrapper .iconContainer .iconContainer__icon.iconContainer__icon--questionLeft");
	var questionRightArrow = $(".caseStudy__wrapper .iconContainer .iconContainer__icon.iconContainer__icon--questionRight");
	var pageNumber = $(".caseStudy__wrapper .caseStudy__storyProgressWrapper--question .textContainer--casePageNumber .textContainer__greenText");
	//stores the current top position

	//initialize variables
	maxQuestionNumber = $(".caseStudy__wrapper .caseStudy__questionDeckInner").children().length;
	if(maxQuestionNumber < 10){
		$(".caseStudy__wrapper .caseStudy__storyProgressWrapper--question .textContainer--numberOfQuestions").text("0" + maxQuestionNumber);
	}
	else{
		$(".caseStudy__wrapper .caseStudy__storyProgressWrapper--question .textContainer--numberOfQuestions").text(maxQuestionNumber);
	}


	//EVENT LISTENERS -------------------------------------------------------
	var storyCurrentTop; 
	var percentageScroll;
	//story text scroll
	story.on("scroll",function(){
		if(storyHeight != 0 && storyInitialTop != 0){ //check if the variables are initialized
			storyCurrentTop = story.find("p").offset().top;
			percentageScroll = (storyInitialTop - storyCurrentTop) / storyHeight * 100;
			
			//change the width of the progress bar current
			progressBar.css("width", percentageScroll + "%");
			
			//change the 
			if(percentageScroll == 0){
				storyUpArrow.css("opacity", "0.3");
			}
			else{
				storyUpArrow.css("opacity", "1");
			}
			if(percentageScroll == 100){
				storyDownArrow.css("opacity", "0.3");
			}
			else{
				storyDownArrow.css("opacity", "1");
			}
		}
		
	});

	var currentInnerLeft;
	var newInnerLeft;
	var disabled = false;
	//click left case question arrow
	questionLeftArrow.on("click",function(){
		if(questionWidth != 0 && maxQuestionNumber != 0){//check if the variables are iniitilized
			if(questionNumber != 1 && !disabled){
				disabled = true;
				currentInnerLeft = parseInt(questionInner.css("left"));
				console.log(questionWidth);
				newInnerLeft = currentInnerLeft + questionWidth;
				console.log(newInnerLeft);
				questionInner.css("left", newInnerLeft + "px");

				//update the arrows
				if(questionNumber == maxQuestionNumber){
					questionRightArrow.css("opacity","1");
				}
				//update question arrows
				questionNumber -= 1;
				if(questionNumber == 1){
					questionLeftArrow.css("opacity","0.3");
				}

				//update the question number
				if(questionNumber < 10){
					pageNumber.text("0" + questionNumber);
				}
				else{
					pageNumber.text(questionNumber);
				}
				setTimeout(function(){
					disabled = false;
				}, 300);
			}
		}
	});

	//click right case question arrow
	questionRightArrow.on("click",function(){
		if(questionWidth != 0 && maxQuestionNumber != 0){//check if the variables are iniitilized
			if(questionNumber != maxQuestionNumber && !disabled){
				disabled = true;
				currentInnerLeft = parseInt(questionInner.css("left"));
				newInnerLeft = currentInnerLeft - questionWidth;
				questionInner.css("left",newInnerLeft + "px");

				//update the arrows
				if(questionNumber == 1){
					questionLeftArrow.css("opacity","1");
				}
				//update question arrows
				questionNumber += 1;
				if(questionNumber == maxQuestionNumber){
					questionRightArrow.css("opacity","0.3");
				}

				//update the question number
				if(questionNumber < 10){
					pageNumber.text("0" + questionNumber);
				}
				else{
					pageNumber.text(questionNumber);
				}
				setTimeout(function(){
					disabled = false;
				}, 300);
			}
		}
	});

	//END EVENTS -----------------------------------------------------------------
});

//initialize variables
$(window).on("load", function(){
	var story = $(".textContainer--storyText");
	storyHeight = story.find("p").height() - story.height();
	storyInitialTop = story.find("p").offset().top;

	questionWidth = parseInt($(".caseStudy__wrapper .caseStudy__questionCard:first-child").width()) + 2 * parseInt($(".caseStudy__wrapper .caseStudy__questionCard:first-child").css("marginRight"));
	console.log(questionWidth);
});