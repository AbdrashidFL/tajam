$(function(){
  $('.rec-slider__text').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    asNavFor: '.rec-slider'
  });
  $('.rec-slider').slick({
    slidesToShow: 1,
    slidesToScroll:1,
    centerMode: true,
    centerPadding: '0',
    asNavFor: '.rec-slider__text',
    infinity: false,
    arrows: true,
    dots: false,
    responsive: [
    {
          breakpoint: 576,
          settings: {
            slidesToShow: 1 ,
            slidesToScroll: 1
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
  });
  // slider

  var link = $('.menu-link');
  
  link.click(function(){
  	link.toggleClass('menu-link__active');
    if($('.menu-popup').css("display") == "none" ){
      $('.menu-popup').css("display", "block")
      document.body.style.overflow = 'hidden';
    }
    else{
      $('.menu-popup').css("display", "none")
      document.body.style.overflow = 'visible';
    }
  });
  $('.header-nav__text').on("click", function(){
    $('.menu-popup').css("display", "none")
    document.body.style.overflow = 'visible';
    link.removeClass('menu-link__active');
  });
  // menu
  $('.header-nav__button').on("click", function(){
    $(".overlay").show();
    document.body.style.overflow = 'hidden';
  });
  $('.popup-close').on("click", function(){
    $(".overlay").hide()
    document.body.style.overflow = 'visible';
  });
  $('.overlay-bg').on("click", function(){
    $(".overlay").hide()
    document.body.style.overflow = 'visible';
  });
  // popup
  $('.popup-form__input').mask("+7 (999) 999 - 99 - 99");
  // mask
  $('.popup-form__btn').on("click", function(){
    $('.thanks').show()
    $(".thanks").hide(700)
  });
  $('.form-button').on("click", function(){
    $('.thanks').show()
    $(".thanks").hide(700)
  });
  $('.form-button').on("click", function(){
    $('.thanks').show()
    $(".thanks").hide(700)
  });
  $('.form-button2').on("click", function(){
    $('.thanks').show()
    $(".thanks").hide(700)
  });
  // якоря
  $(".header-nav").on("click","a", function (event) {
    event.preventDefault();
    var id  = $(this).attr('href'),
      top = $(id).offset().top;
    $('body,html').animate({scrollTop: top}, 800);
  });
  $(".menu-popup").on("click","a", function (event) {
    event.preventDefault();
    var id  = $(this).attr('href'),
      top = $(id).offset().top;
    $('body,html').animate({scrollTop: top}, 800);
  });
  // video
  $('.video-button__block').on("click", function(){
    $(".video-button__block").hide()
    $(".video-bg").hide()
    $(".video-button__text").hide()
  });
});