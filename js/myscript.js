$(function() {

  "use strict";

  var topoffset = 50; //variable for menu height
  var slideqty = $('#featured .item').length;
  var wheight = $(window).height(); //get the height of the window
  var randSlide = Math.floor(Math.random()*slideqty);

  $('#featured .item').eq(randSlide).addClass('active');


  $('.fullheight').css('height', wheight); //set to window tallness  


  //replace IMG inside carousels with a background image
  $('#featured .item img').each(function() {
    var imgSrc = $(this).attr('src');
    $(this).parent().css({'background-image': 'url('+imgSrc+')'});
    $(this).remove();
  });

  //adjust height of .fullheight elements on window resize
  $(window).resize(function() {
    wheight = $(window).height(); //get the height of the window
    $('.fullheight').css('height', wheight); //set to window tallness 
    console.log("this is wheath "+wheight);
  });







  $(window).on('resize', function() {
    fixPic();
  });

  window.onload = function() {
    fixPic();
    console.log("hi");
  };
  function fixPic() {
      if($(window).innerWidth() >= 977) { /**when big*/
          $('#about_row').addClass('row');
/**          $('#portrait').addClass('halfPicture');
          $('#portrait').removeClass('background-image');
 */         $('#about_container').addClass('container-fluid');
          $('#about_text_id').addClass('col-lg-6 col-md-6 fullheight');
          $('#portrait').removeClass('elim');

          /**
          if ($('#dimbg').length) {
            console.log("dimbg");
            $('#dimbg').remove();
            $('#about_row').append(
              $('<div/>')
                .attr("id", "portrait")
                .addClass("halfPicture col-lg-6 col-md-6 fullheight")
                .append("<span/>")
                  .text("hello world")
            );
          }
          */

      }else{
          console.log("curr less");
          $('#about_row').removeClass('row');
          /**$('#portrait').removeClass('halfPicture');
          $('#portrait').addClass('background-image');*/
          $('#about_container').removeClass('container-fluid');
          
          $('#about_text_id').removeClass('col-lg-6 col-md-6 fullheight');
          $('#portrait').addClass('elim');
/**
          if ($('#portrait').length) {
            console.log("portrait");
            $('#portrait').remove();
            $('#about_row').append(
              $('<div/>')
                .attr("id", "dimbg")
                .addClass("background-image")
                .append("<span/>")
                  .text("hello world")
            );
          }
          */
      }
  }











  //Activate Scrollspy
  $('body').scrollspy({
    target: 'header .navbar',
    offset: topoffset
  });

  // add inbody class
  var hash = $(this).find('li.active a').attr('href');
  if(hash !== '#featured') {
    $('header nav').addClass('inbody');
  } else {
    $('header nav').removeClass('inbody');
  }


  // Add an inbody class to nav when scrollspy event fires
  $('.navbar-fixed-top').on('activate.bs.scrollspy', function() {
    var hash = $(this).find('li.active a').attr('href');
    if(hash !== '#featured') {
      $('header nav').addClass('inbody');
    } else {
      $('header nav').removeClass('inbody');
    }
  });


  //Use smooth scrolling when clicking on navigation
  $('.navbar a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') === 
      this.pathname.replace(/^\//,'') && 
      location.hostname === this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top-topoffset+2
        }, 500);
        return false;
      } //target.length
    } //click function
  }); //smooth scrolling

  //Automatically generate carousel indicators
  for (var i=0; i < slideqty; i++) {
    var insertText = '<li data-target="#featured" data-slide-to="' + i + '"';
    if (i === randSlide) {
      insertText += ' class="active" ';
    }
    insertText += '></li>';
    $('#featured ol').append(insertText);
  }

  $('.carousel').carousel({
    pause: true
  });





});