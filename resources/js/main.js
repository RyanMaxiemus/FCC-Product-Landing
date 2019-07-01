$(document).ready(function() {
  // Scroll to features section when link is clicked.
  $("#features-link").click(function() {
    $('html, body').animate({
      scrollTop: $("#features").offset().top - 200
    }, 1000)
  });
  // Scroll to trailer section when link is clicked.
  $("#trailer-link").click(function() {
    $('html, body').animate({
      scrollTop: $("#trailer").offset().top - 150
    }, 1000)
  });
  // Scroll to form section when link is clicked.
  $("#form-link").click(function() {
    $('html, body').animate({
      scrollTop: $("#form").offset().top
    }, 1000)
  });
});
