$(document).ready(function () {
  $(".nav li").removeClass("active");
  $('.nav #courses').addClass('active');
  $(".nav #courses a").attr("disabled", "disabled");
});
