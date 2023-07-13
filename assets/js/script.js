$('.home-slider').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    dot: true,
    autoplay: true,
    nav: false,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1,
            nav: false
        },
        600: {
            items: 1,
            nav: false
        },
        1000: {
            items: 1,
            nav: false
        }
    }
})

$('.owl-logos').owlCarousel({
    loop: true,
    margin: 10,
    responsiveClass: true,
    dot: false,
    autoplay: true,
    items: 5,
    nav: false,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 2,
            nav: false
        },
        600: {
            items: 2,
            nav: false
        },
        1000: {
            items: 5,
            nav: false,
            loop: false
        }
    }
})

$(window).on("scroll", function (event) {
    if ($(this).scrollTop() > 50) {
        $(".header").addClass("head")
    } else {
        $(".header").removeClass("head")
    }
})
// back to top $(window).on("scroll", function (event) {     if
// ($(this).scrollTop() > 600) {         $(".back-to-top").css("opacity","1");
// } else {       $(".back-to-top").css("opacity","0");     }   });




// questions
$('.question-box').on('click', function () {
    $(".question-box").not(this).removeClass('active')
});
$('.question-box').on('click', function () {
    $(this).toggleClass('active')
});


// input in qeydiyyat
$(".toggle").click(function () {
    $(this).toggleClass("fa-eye fa-eye-slash");
    var input = $($(this).attr("toggle"));
    const inputSelf = $('#password');
    if (inputSelf.attr("type") === "password") {
        inputSelf.attr("type", 'text');
    } else {
        inputSelf.attr("type", 'password');
    }
});

$(".toggleTwo").click(function () {
    $(this).toggleClass("fa-eye fa-eye-slash");
    var input = $($(this).attr("toggle"));
    const inputSelf = $('#confirmPassword');
    if (inputSelf.attr("type") === "password") {
        inputSelf.attr("type", 'text');
    } else {
        inputSelf.attr("type", 'password');
    }
});