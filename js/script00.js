(function($){

//Sliding sections

var section = $("section");
    slide = $(".slide");
    rotate0 = {transform: "rotate180deg"};

section.find(".slide").hide();


    $("section h1:not(#kontakt)").click(function(){  
        
        $(this).siblings(".slide").stop().slideToggle();
        $(this).find(".arrow").toggleClass("rotated");
    } );
    

//_______________________________________________________________________________
//Scroll to top

    var backToTop = $('<a>', { href: '#home', class: 'back-to-top',html: '<i class="fas fa-angle-double-up fa-3x"></i>'});

    backToTop.hide().appendTo("body").click(function()
    {
        $("html, body").animate({scrollTop: 0}, 500);
    });

    var win = $(window);
    win.scroll(function(){
        if (win.scrollTop() >= 700) backToTop.fadeIn();
        else backToTop.fadeOut('fast');
    });
    

//_______________________________________________________________________________
//jQuery img slider

var slider = $(".slider2");
    sliderContainer = slider.find(".slides2");
    slides = sliderContainer.find(".slide2");
    currentSlide = 1;
    width = "100%";
    animationSpeed = 1500;
    intervalTiming = 4000;

var interval;
    
function startSlider() {
    interval = setInterval(function()
    {
        sliderContainer.animate({"margin-left": "-="+width}, animationSpeed, function()
        {
            currentSlide++;
            if (currentSlide == slides.length) {
                currentSlide = 1;
                sliderContainer.css({"margin-left": 0});
            }
        });
    }, intervalTiming);
};

function stopSlider(){
    clearInterval(interval);
};

slider.mouseenter(stopSlider).mouseleave(startSlider);
startSlider();


//_______________________________________________________________________________
//LightBox na portfólio --> dokončiť neskôr

var overlay


//--------------------------------------test_random_RGB-last second "P" element in footer---------------------
/*
$(".container.footer").find("p").eq(1).mouseenter( function() 
	{
        var R = Math.floor(Math.random()*256);
            G = Math.floor(Math.random()*256);
            B = Math.floor(Math.random()*256);
            a = 0.5;
		$(this).css({color: "rgba("+R+","+G+","+B+","+a+")"});
	}
);
*/

})(jQuery); 

