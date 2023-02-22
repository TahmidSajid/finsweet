$('.testi_slider').slick({
    dots: false,
    infinite: true,
    slidesToShow: 1,
    Arrow: true,
    nextArrow: '.testi_right',
    prevArrow: '.testi_left',
    responsive: [
        {
          breakpoint: 576.99,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        }
      ]
});



var mixer = mixitup('.port_page_main');
