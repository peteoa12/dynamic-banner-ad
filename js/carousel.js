var slideShow = function(){

	var $slides = $(".slide");			
	var currentSlide = 0;				
	var stayTime = 2;			        
	var slideTime = 0.8;				


	TweenMax.set($slides.filter(":gt(0)"), {autoAlpha:0});	
	TweenMax.delayedCall(stayTime, nextSlide);				

	function nextSlide(){					
			TweenMax.to( $slides.eq(currentSlide), slideTime, {autoAlpha:0} );		
			currentSlide = ++currentSlide % $slides.length;										
			TweenMax.to( $slides.eq(currentSlide), slideTime, {autoAlpha:1} );		
			console.log(currentSlide);

			if (currentSlide < $slides.length - 1){
				TweenMax.delayedCall(stayTime, nextSlide);
			} else if(currentSlide == $slides.length - 1) {
				setUpListener();
			}
	}

	function setUpNextSlideArrow(){
		$("#page-right").on('click', function(event) {
			event.preventDefault();
			TweenMax.to( $slides.eq(currentSlide), slideTime, {autoAlpha:0} );		
			currentSlide = ++currentSlide % $slides.length;										
			TweenMax.to( $slides.eq(currentSlide), slideTime, {autoAlpha:1} );
			console.log(currentSlide);		
		});
	}

	function setUpPrevSlideArrow(){
		$("#page-left").on('click', function(event) {
			event.preventDefault();
			console.log(currentSlide);
			if(currentSlide >= 1 ){
				TweenMax.to( $slides.eq(currentSlide), slideTime, {autoAlpha:0} );		
				currentSlide = --currentSlide % $slides.length;										
				TweenMax.to( $slides.eq(currentSlide), slideTime, {autoAlpha:1} );
			}
		});
	}

	function setUpListener(){
		setUpNextSlideArrow();
		setUpPrevSlideArrow();
	}

}

