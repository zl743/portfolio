// JavaScript Document
var scrollamount = 0;

$('body').bind('focusin focus', function(e){
  e.preventDefault();
})

//prevents refresh on form submission
$(document).ready(function(){
   var $form = $('form');
   $form.submit(function(){
      $.post($(this).attr('action'), $(this).serialize(), function(response){
      },'json');
      return false;
   });
});

$("ul li:nth-child(2)").click(function() {
  $("li > a > span.line").css(
    {
      "opacity" : ".5"
  });
  $("li:nth-child(2) > a > span.line").css(
    {
      "opacity" : "1"
  });
		$('#contact').ScrollTo();
		$('div.page').removeClass("current-page").addClass('next-page');
		$('#contact').removeClass("next-page").addClass('current-page');
});

$("ul li:nth-child(3)").click(function() {
  $("li > a > span.line").css(
    {
      "opacity" : ".5"
  });
  $("li:nth-child(3) > a > span.line").css(
    {
      "opacity" : "1"
  });
		$('#projects').ScrollTo();
		$('div.page').removeClass("current-page").addClass('next-page');
		$('#projects').removeClass("next-page").addClass('current-page');
});

$("ul li:nth-child(4)").click(function() {
  $("li > a > span.line").css(
    {
      "opacity" : ".5"
  });
  $("li:nth-child(4) > a > span.line").css(
    {
      "opacity" : "1"
  });
		$('#resume').ScrollTo();
		$('div.page').removeClass("current-page").addClass('next-page');
		$('#resume').removeClass("next-page").addClass('current-page');
});

$("ul li:nth-child(5)").click(function() {
  $("li > a > span.line").css(
    {
      "opacity" : ".5"
  });
  $("li:nth-child(5) > a > span.line").css(
    {
      "opacity" : "1"
  });
		$('#skills').ScrollTo();
		$('div.page').removeClass("current-page").addClass('next-page');
		$('#skills').removeClass("next-page").addClass('current-page');
});

$("ul li:nth-child(6)").click(function() {
  $("li > a > span.line").css(
    {
      "opacity" : ".5"
  });
  $("li:nth-child(6) > a > span.line").css(
    {
      "opacity" : "1"
  });
		$('#about').ScrollTo();
		$('div.page').removeClass("current-page").addClass('next-page');
		$('#about').removeClass("next-page").addClass('current-page');
});

$("ul li:nth-child(7)").click(function() {
  $("li > a > span.line").css(
    {
      "opacity" : ".5"
  });
  $("li:nth-child(7) > a > span.line").css(
    {
      "opacity" : "1"
  });
		$('#home').ScrollTo();
		$('div.page').removeClass("current-page").addClass('next-page');
		$('#home').removeClass("next-page").addClass('current-page');
});
$(document).keydown(function(e) {
	var key = e.which;
	if (key == 37 || key == 39){
		e.preventDefault();
    return false;
	}
	return true;
});

$('svg#arrowright, svg#arrowleft').on('click', function(e){
	/*switch(e.target.id) {
		case 'arrowright':*/

    if(e.target.id == 'arrowright'){
		if($('div#home').hasClass('current-page')) {
			$('#about').ScrollTo();
			$('div.page').removeClass("current-page").addClass('next-page');
			$('#about').removeClass("next-page").addClass('current-page');
      $("li > a > span.line").css(
        {
          "opacity" : ".5"
      });
      $("li:nth-child(6) > a > span.line").css(
        {
          "opacity" : "1"
      });
		}
		else if($('div#about').hasClass('current-page')){
      $("li > a > span.line").css(
        {
          "opacity" : ".5"
      });
      $("li:nth-child(5) > a > span.line").css(
        {
          "opacity" : "1"
      });
			$('#skills').ScrollTo();
			$('div.page').removeClass("current-page").addClass('next-page');
			$('#skills').removeClass("next-page").addClass('current-page');
		}
		else if($('div#skills').hasClass('current-page')){
      $("li > a > span.line").css(
        {
          "opacity" : ".5"
      });
      $("li:nth-child(4) > a > span.line").css(
        {
          "opacity" : "1"
      });
			$('#resume').ScrollTo();
			$('div.page').removeClass("current-page").addClass('next-page');
			$('#resume').removeClass("next-page").addClass('current-page');
		}
		else if($('div#resume').hasClass('current-page')){
      $("li > a > span.line").css(
        {
          "opacity" : ".5"
      });
      $("li:nth-child(3) > a > span.line").css(
        {
          "opacity" : "1"
      });
			$('#projects').ScrollTo();
			$('div.page').removeClass("current-page").addClass('next-page');
			$('#projects').removeClass("next-page").addClass('current-page');
		}
		else if($('div#projects').hasClass('current-page')){
      $("li > a > span.line").css(
        {
          "opacity" : ".5"
      });
      $("li:nth-child(2) > a > span.line").css(
        {
          "opacity" : "1"
      });
			$('#contact').ScrollTo();
			$('div.page').removeClass("current-page").addClass('next-page');
			$('#contact').removeClass("next-page").addClass('current-page');
		}
		else if($('div#contact').hasClass('current-page')){
      $("li > a > span.line").css(
        {
          "opacity" : ".5"
      });
      $("li:nth-child(7) > a > span.line").css(
        {
          "opacity" : "1"
      });
			$('#home').ScrollTo();
			$('div.page').removeClass("current-page").addClass('next-page');
			$('#home').removeClass("next-page").addClass('current-page');
		}
		/*break;*/
  }
		else if(e.target.id == 'arrowleft'){
		if($('div#home').hasClass('current-page')) {
      $("li > a > span.line").css(
        {
          "opacity" : ".5"
      });
      $("li:nth-child(2) > a > span.line").css(
        {
          "opacity" : "1"
      });
			$('#contact').ScrollTo();
			$('div.page').removeClass("current-page").addClass('next-page');
			$('#contact').removeClass("next-page").addClass('current-page');
		}
		else if($('div#about').hasClass('current-page')){
      $("li > a > span.line").css(
        {
          "opacity" : ".5"
      });
      $("li:nth-child(7) > a > span.line").css(
        {
          "opacity" : "1"
      });
			$('#home').ScrollTo();
			$('div.page').removeClass("current-page").addClass('next-page');
			$('#home').removeClass("next-page").addClass('current-page');
		}
		else if($('div#skills').hasClass('current-page')){
      $("li > a > span.line").css(
        {
          "opacity" : ".5"
      });
      $("li:nth-child(6) > a > span.line").css(
        {
          "opacity" : "1"
      });
			$('#about').ScrollTo();
			$('div.page').removeClass("current-page").addClass('next-page');
			$('#about').removeClass("next-page").addClass('current-page');
		}
		else if($('div#resume').hasClass('current-page')){
      $("li > a > span.line").css(
        {
          "opacity" : ".5"
      });
      $("li:nth-child(5) > a > span.line").css(
        {
          "opacity" : "1"
      });
			$('#skills').ScrollTo();
			$('div.page').removeClass("current-page").addClass('next-page');
			$('#skills').removeClass("next-page").addClass('current-page');
		}
		else if($('div#projects').hasClass('current-page')){
      $("li > a > span.line").css(
        {
          "opacity" : ".5"
      });
      $("li:nth-child(4) > a > span.line").css(
        {
          "opacity" : "1"
      });
			$('#resume').ScrollTo();
			$('div.page').removeClass("current-page").addClass('next-page');
			$('#resume').removeClass("next-page").addClass('current-page');
		}
		else if($('div#contact').hasClass('current-page')){
      $("li > a > span.line").css(
        {
          "opacity" : ".5"
      });
      $("li:nth-child(3) > a > span.line").css(
        {
          "opacity" : "1"
      });
			$('#projects').ScrollTo();
			$('div.page').removeClass("current-page").addClass('next-page');
			$('#projects').removeClass("next-page").addClass('current-page');
		}
  }});
  /*
		break;

		default:return;
*/

$(document).keyup(function(e) {
  var tf = $('input, textarea').is(':focus');
  if (tf == true){
    return false;
  }else{
    switch(e.which) {
        case 37: // left
				if($('div#home').hasClass('current-page')) {
					$('#contact').ScrollTo();
					$('div.page').removeClass("current-page").addClass('next-page');
					$('#contact').removeClass("next-page").addClass('current-page');
				}
				else if($('div#about').hasClass('current-page')){
					$('#home').ScrollTo();
					$('div.page').removeClass("current-page").addClass('next-page');
					$('#home').removeClass("next-page").addClass('current-page');
				}
				else if($('div#skills').hasClass('current-page')){
					$('#about').ScrollTo();
					$('div.page').removeClass("current-page").addClass('next-page');
					$('#about').removeClass("next-page").addClass('current-page');
				}
				else if($('div#resume').hasClass('current-page')){
					$('#skills').ScrollTo();
					$('div.page').removeClass("current-page").addClass('next-page');
					$('#skills').removeClass("next-page").addClass('current-page');
				}
				else if($('div#projects').hasClass('current-page')){
					$('#resume').ScrollTo();
					$('div.page').removeClass("current-page").addClass('next-page');
					$('#resume').removeClass("next-page").addClass('current-page');
				}
				else if($('div#contact').hasClass('current-page')){
					$('#projects').ScrollTo();
					$('div.page').removeClass("current-page").addClass('next-page');
					$('#projects').removeClass("next-page").addClass('current-page');
				}
        break;

        case 39: // right
				if($('div#home').hasClass('current-page')) {
					$('#about').ScrollTo();
					$('div.page').removeClass("current-page").addClass('next-page');
					$('#about').removeClass("next-page").addClass('current-page');
				}
				else if($('div#about').hasClass('current-page')){
					$('#skills').ScrollTo();
					$('div.page').removeClass("current-page").addClass('next-page');
					$('#skills').removeClass("next-page").addClass('current-page');
				}
				else if($('div#skills').hasClass('current-page')){
					$('#resume').ScrollTo();
					$('div.page').removeClass("current-page").addClass('next-page');
					$('#resume').removeClass("next-page").addClass('current-page');
				}
				else if($('div#resume').hasClass('current-page')){
					$('#projects').ScrollTo();
					$('div.page').removeClass("current-page").addClass('next-page');
					$('#projects').removeClass("next-page").addClass('current-page');
				}
				else if($('div#projects').hasClass('current-page')){
					$('#contact').ScrollTo();
					$('div.page').removeClass("current-page").addClass('next-page');
					$('#contact').removeClass("next-page").addClass('current-page');
				}
				else if($('div#contact').hasClass('current-page')){
					$('#home').ScrollTo();
					$('div.page').removeClass("current-page").addClass('next-page');
					$('#home').removeClass("next-page").addClass('current-page');
				}
				break;

        default: return;
      }
			}
});
$( window ).scroll(function() {
	var windowWidth = $(window).width();
	console.log(windowWidth);
  	var x = $('body').scrollLeft();
  	console.log(x);

		if (0 <= x && x < windowWidth*.75){
			$('div#home').addClass('current-page').removeClass('next-page');
      $("li > a > span.line").css(
        {
          "opacity" : ".5"
      });
      $("li:nth-child(7) > a > span.line").css(
        {
          "opacity" : "1"
      });

		} else {
			$('div#home').addClass('next-page').removeClass('current-page');
		}

		if (windowWidth*.75 < x && x < windowWidth*1.75){
      $("li > a > span.line").css(
        {
          "opacity" : ".5"
      });
      $("li:nth-child(6) > a > span.line").css(
        {
          "opacity" : "1"
      });
			$('div#about').addClass('current-page').removeClass('next-page');
			$('div#about > div.description').css({
				opacity:1

			});
		} else {
			$('div#about').addClass('next-page').removeClass('current-page');
			$('div#about > div.description').css({
				opacity:0
			});
		}
		if (windowWidth*1.75 < x && x < windowWidth*2.75){
      $("li > a > span.line").css(
        {
          "opacity" : ".5"
      });
      $("li:nth-child(5) > a > span.line").css(
        {
          "opacity" : "1"
      });
			$('div#skills').addClass('current-page').removeClass('next-page');
			$('div#skills > div.description').css({
				opacity:1
			});
		} else {
			$('div#skills').addClass('next-page').removeClass('current-page');
			$('div#skills > div.description').css({
				opacity:0
			});
		}
		if (windowWidth*2.75 < x && x < windowWidth*3.75){
      $("li > a > span.line").css(
        {
          "opacity" : ".5"
      });
      $("li:nth-child(4) > a > span.line").css(
        {
          "opacity" : "1"
      });
			$('div#resume').addClass('current-page').removeClass('next-page');
			$('div#resume > div.description').css({
				opacity:1
			});
		} else {
			$('div#resume').addClass('next-page').removeClass('current-page');
			$('div#resume > div.description').css({
				opacity:0
			});
		}
		if (windowWidth*3.75 < x && x < windowWidth*4.75){
      $("li > a > span.line").css(
        {
          "opacity" : ".5"
      });
      $("li:nth-child(3) > a > span.line").css(
        {
          "opacity" : "1"
      });
			$('div#projects').addClass('current-page').removeClass('next-page');

				$('div#projects > div.description').css({
						opacity:1
					});
			} else {
				$('div#projects').addClass('next-page').removeClass('current-page');
					$('div#projects> div.description').css({
						opacity:0
					});
				}
		if (windowWidth*4.75 < x && x < windowWidth*6){
      $("li > a > span.line").css(
        {
          "opacity" : ".5"
      });
      $("li:nth-child(2) > a > span.line").css(
        {
          "opacity" : "1"
      });
			$('div#contact').addClass('current-page').removeClass('next-page');

				$('svg#stars').css({
						opacity:1
					});
			} else {
				$('div#contact').addClass('next-page').removeClass('current-page');

					$('svg#stars').css({
						opacity:0
					});
				}

  $('svg > a').click(function(e) {
  var parentClass =  $(e.target).parents().eq(4).attr('class');
    if (parentClass != 'page current-page'){
      e.preventDefault();
    }
  });



		/*
	if (windowWidth*.75 < x && x < windowWidth*1.75){
		$('div#about > div.description-hide').removeClass("description-hide").addClass("description-show");
	}
	else{
		$('div#about > div').removeClass().addClass("description-hide");
	}
	if (windowWidth*1.75 < x && x < windowWidth*2.75){
		$('div#skills > div.description-hide').removeClass("description-hide").addClass("description-show");
	}*/
});
