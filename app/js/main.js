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

  $('.menu__btn').on('click', function () {
    $('.menu__list').slideToggle();
  });

  $('.product-one__tabs .tab').on('click', function (event) {
    var id = $(this).attr('data-id');
    $('.product-one__tabs').find('.tab-item').removeClass('active-tab').hide();
    $('.product-one__tabs .tabs').find('.tab').removeClass('active');
    $(this).addClass('active');
    $('#' + id)
      .addClass('active-tab')
      .fadeIn();
    return false;
  });

  var mixer = mixitup('.products__box');
});
