$(document).ready(function () {
  $(".nav li").removeClass("active");
  $('.nav #about').addClass('active');
  
  $(".nav #about a").attr("disabled", "disabled");
});