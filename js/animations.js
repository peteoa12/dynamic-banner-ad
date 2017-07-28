
var slideShow = function(){

	var $slides = $(".slide");			//slides
	var currentSlide = 0;				//keep track on the current slide
	var stayTime = 2;			        //slide delay time
	var slideTime = 0.8;				    //fade in / fade out time			

	TweenMax.set($slides.filter(":gt(0)"), {autoAlpha:0});	
	TweenMax.delayedCall(stayTime, nextSlide);				

	function nextSlide(){					
			TweenMax.to( $slides.eq(currentSlide), slideTime, {autoAlpha:0} );		//fade out the old slide
			currentSlide = ++currentSlide % $slides.length;							//find out which is the next slide			
			TweenMax.to( $slides.eq(currentSlide), slideTime, {autoAlpha:1} );		//fade in the next slide
			console.log(currentSlide);

			if (currentSlide < $slides.length - 1){
				TweenMax.delayedCall(stayTime, nextSlide);
			} else if(currentSlide == $slides.length - 1) {
				setUpListener();
			}
	}

	function setUpListener(){
		setUpNextSlideArrow();
		setUpPrevSlideArrow();
	}

	function setUpNextSlideArrow(){
		$("#page-right").on('click', function(event) {
			event.preventDefault();
			TweenMax.to( $slides.eq(currentSlide), slideTime, {autoAlpha:0} );		
			currentSlide = ++currentSlide % $slides.length;										
			TweenMax.to( $slides.eq(currentSlide), slideTime, {autoAlpha:1} );		
		});
	}

	function setUpPrevSlideArrow(){
		$("#page-left").on('click', function(event) {
			event.preventDefault();
			TweenMax.to( $slides.eq(currentSlide), slideTime, {autoAlpha:0} );		
			currentSlide = --currentSlide % $slides.length;										
			TweenMax.to( $slides.eq(currentSlide), slideTime, {autoAlpha:1} );		
		});
	}


}



var tl1 = new TimelineMax();

tl1.from(".ad-container", 0.3, {opacity:0});
tl1.from(".logo", 0.3, {opacity:0, x:-50});

tl1.from(".animation-3", 0.5, {opacity:0, y:20});
tl1.from(".animation-1", 0.5, {opacity:0, x:-20});
tl1.from(".animation-2", 0.5, {opacity:0, x:20, onComplete:slideShow});
tl1.from(".text-container", 0.3, {opacity:0});

// tl1.from(".product-container", 0.5, {opacity:0});
tl1.from(".product", 0.2, {opacity:0, x:20});
tl1.from(".product-blurb", 0.2, {opacity:0, y:-50});
tl1.from(".carousel-btn", 0.2, {opacity:0});
tl1.from(".btn", 0.2, {opacity:0, y:20});
tl1.from(".product-container", 0.5, {opacity:0});



