$(document).ready(function () {
  $(".nav li").removeClass("active");
  $('.nav #contact').addClass('active');

  $(".nav #contact a").attr("disabled", "disabled");
});
