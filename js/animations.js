
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



