$('.slider').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 575,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});

$(".order-form").submit(function (e) {
  e.preventDefault();

  var bannerError = $(".bg-danger", $(this)),
    bannerSuccess = $(".bg-success", $(this));

  bannerError.css("display", "none");
  bannerSuccess.css("display", "none");

  var ajax = $.ajax({
    type: 'POST',
    url: '/ajax/order.php',
    data: {
      name: $("input[name='name']", $(this)).val(),
      number: $("input[name='number']", $(this)).val(),
      email: $("input[name='email']", $(this)).val(),
      message: $("textarea", $(this)).val()
    }
  });

  ajax.done(function (data) {
    if (1 === Number(data.error)) {
      bannerError.css("display", "block").text(data.message);
    } else if (0 === Number(data.error)) {
      bannerSuccess.css("display", "block").text(data.message);
    }
  });
  ajax.fail(function () {
    bannerError.css("display", "none");
    bannerSuccess.css("display", "none");
    bannerError.css("display", "block").text(data.message);
  });
});

var topMenu = $("nav"),
  topMenuPosition = topMenu.offset();
$(window).scroll(function () {
  if ($(window).scrollTop() >= topMenuPosition.top) {
    topMenu.addClass("fixed");
  } else {
    topMenu.removeClass("fixed");
  }
});

$(".fancybox").fancybox();

if (document.getElementById("menu-pricelist")) {

  var pricelistMenu = $("#menu-pricelist"),
    pricelistMenuPosition = pricelistMenu.offset();
  $("a", pricelistMenu).click(function (e) {
    e.preventDefault();
    var position = $($(this).attr("href")).offset();
    $('body,html').animate({scrollTop: position.top - 120}, 500);
  });

  $(window).scroll(function () {
    if ($(window).scrollTop() + 100 >= pricelistMenuPosition.top) {
      pricelistMenu.addClass("fixed");
    } else {
      pricelistMenu.removeClass("fixed");
    }
  });

}

var btnTop = $("#top");
btnTop.click(function (e) {
  e.preventDefault();
  $('body,html').animate({scrollTop: 0}, 500);
});

var topMenuInner = $(".navbar-nav", topMenu);

function btnTopPosition() {
  btnTop.css({"right": topMenuInner.offset().left + 10});
}

btnTopPosition();
$(window).resize(btnTopPosition);

$(window).scroll(function () {
  if ($(window).scrollTop() > 0 && "none" == btnTop.css("display")) {
    btnTop.fadeIn();
  } else if ($(window).scrollTop() === 0) {
    btnTop.fadeOut();
  }
});

$("#review-form-show").click(function (e) {
  e.preventDefault();
  $("#review-form").slideToggle();
});

var mobileMenu = $("#mobile-menu");
$("#mobile-menu-show").click(function (e) {
  e.preventDefault();
  mobileMenu.slideToggle();
});
