$( document ).ready(function() {

    
    $('.owl-carousel').owlCarousel({
        stagePadding: 240,
        loop:true,
        margin:30,
        nav:false,
        center: true,
        responsive:{
            0:{
                items:1
            },
            300:{
                items:1,
            },
            400:{
                items:1
            },
            700:{
                items:1
            },
            850:{
                items:2
            },
            1000:{
                items:3
            },
            1500:{
                items:5
            }
        }
    })
   
    $("#links-nav").on("click","a", function (event) {
        		event.preventDefault();
		        var id  = $(this).attr('href'),
			    top = $(id).offset().top;
                $('body,html').animate({scrollTop: top}, 1500);
    });
    
    $("#links-nav-bottom").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
        top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
});

$("#links-nav-burger").on("click","a", function (event) {
    event.preventDefault();
    var id  = $(this).attr('href'),
    top = $(id).offset().top;
    $('body,html').animate({scrollTop: top}, 1500);
});


















$( ".cross" ).hide();
$( ".menu" ).hide();
$( ".hamburger" ).click(function() {
$( ".menu" ).slideToggle( "slow", function() {
$( ".hamburger" ).hide();
$( ".cross" ).show();
});
});

$( ".cross" ).click(function() {
$( ".menu" ).slideToggle( "slow", function() {
$( ".cross" ).hide();
$( ".hamburger" ).show();
});
});


    console.log( "ready!" );
});
