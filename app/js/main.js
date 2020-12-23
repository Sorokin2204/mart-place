$(function () {
  $('.rate-star').rateYo({
    rating: 5,
    ratedFill: '#ffc000',
    normalFill: '#fff',
    starWidth: '15px',
    readOnly: true,
  });

  $('.featured__inner').slick({
    prevArrow: $('.prev'),
    nextArrow: $('.next'),
  });

  var mixer = mixitup('.product__box');
});
