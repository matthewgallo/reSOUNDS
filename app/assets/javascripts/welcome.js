$( document ).ready(function() {

// Slow scroll to wrap sections....
  // Scroll to Location Search
  $(".locationWrapper").click(function() {
      $('html, body').animate({
          scrollTop: $("#locationwrap").offset().top
      }, 2000);
  });

  // Scroll to Artist Search
  $(".artistWrapper").click(function() {
      $('html, body').animate({
          scrollTop: $("#artistsearchwrap").offset().top
      }, 2000);
  });

  // Scroll to Venue Search
  $(".venueWrapper").click(function() {
      $('html, body').animate({
          scrollTop: $("#venuesearchwrap").offset().top
      }, 2000);
  });












});