$(function () {
  $('.rate-star').rateYo({
    rating: 5,
    ratedFill: '#ffc000',
    normalFill: '#fff',
    starWidth: '15px',
    readOnly: true,
  });

  $('.featured__inner').slick({
    prevArrow: $('.featured__arrow-left'),
    nextArrow: $('.featured__arrow-right'),
  });

  $('.products-slider__box').slick({
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    prevArrow: $('.products-slider__arrow-left'),
    nextArrow: $('.products-slider__arrow-right'),
  });

  var mixer = mixitup('.products__box');
});
