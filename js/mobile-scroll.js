var scrollposition = 0;
$('textarea, input').focus(function(e){
  e.preventDefault();
   e.stopPropagation();
})

$(window).scroll(function() {

  var windowHeight = $(window).height();
  var y = $('body').scrollTop();
  		if (0 <= y && y < windowHeight*.75){
  			$('div#home').addClass('current-page').removeClass('next-page');

  		} else {
  			$('div#home').addClass('next-page').removeClass('current-page');
  		}

  		if (windowHeight*.75 < y && y < windowHeight*1.75){
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
  		if (windowHeight*1.75 < y && y < windowHeight*2.75){
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
  		if (windowHeight*2.75 < y && y < windowHeight*3.75){
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
  		if (windowHeight*3.75 < y && y < windowHeight*4.75){
  			$('div#projects').addClass('current-page').removeClass('next-page');

  				$('div#projects > div.description').css({
  					});
  			} else {
  				$('div#projects').addClass('next-page').removeClass('current-page');
  					$('div#projects> div.description').css({
  					});
  				}
  		if (windowHeight*4.75 < y && y < windowHeight*6){
  			$('div#contact').addClass('current-page').removeClass('next-page');

  				$('div#contact > div.description').css({
  						opacity:1
  					});
  			} else {
  				$('div#contact').addClass('next-page').removeClass('current-page');

  					$('div#contact > div.description').css({
  						opacity:0
  					});
          }
        });
