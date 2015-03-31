
var main = function(){

  // toggle menu
  $('.menu-button').click(function(){
    $('.main-menu ul').slideToggle();
  });

  //smooth scroll function
   $('a[href^="#"]').click(function () {
     elementClick = $(this).attr("href");
     destination = $(elementClick).offset().top;
     $('html,body').animate( { scrollTop: destination }, 1000 );
     return false;
   });

  //owl carousel
  $(".carousel").owlCarousel({
    responsive : {
      0 : {
        loop : true,
        items : 1,
        nav : true,
        rewindNav : true
      }
    },
    navText : ""
  });

  //portfilio select
  $('#all, #web, #graphic, #art').click(function(e){
    e.preventDefault();
    $('.portfolio__nav').find('li, a').removeClass('active');
    $(this).addClass('active');
    $(this).parent().addClass('active');
    $('.portfolio__item').addClass('hidden');
    id_click = $(this).attr("id");
    switch (id_click) {
      case "all" :
        $('.portfolio__item').fadeIn().removeClass('hidden');
        break;
      case "web" :
        $('.web-design').fadeIn().removeClass('hidden');
        break;
      case "graphic" :
        $('.graphic-design').fadeIn().removeClass('hidden');
        break;
      case "art" :
        $('.art-work').fadeIn().removeClass('hidden');
        break;
    };
  });

  // magnific popup
  $('.imgpopup').magnificPopup({
    type: 'image',
    closeOnContentClick: true,
    closeBtnInside: false,
    fixedContentPos: true,
    mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
    image: {
      verticalFit: true
    },
    zoom: {
      enabled: true,
      duration: 300 // don't foget to change the duration also in CSS
    }
  });

};

$(document).ready(main);
