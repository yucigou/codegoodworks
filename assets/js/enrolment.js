$(document).ready(function () {
  $(".nav li").removeClass("active");
  $('.nav #enrolment').addClass('active');
  // $("#application-form").validate();

  $(".nav #enrolment a").attr("disabled", "disabled");
});
