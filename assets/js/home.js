$(document).ready(function () {
  $(".nav li").removeClass("active");
  $('.nav #home').addClass('active');
  
  $(".nav #home a").attr("disabled", "disabled");
});