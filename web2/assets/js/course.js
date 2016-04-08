$(document).on("click", ".nav1 , .logo", function () {
  location.href = "index.html";
});

$(document).on("click", ".btn1 , .f-btn1 , .shiryo , .muryo", function () {
  location.href = "./course.html #shiryo";
});

$(document).on("click", ".nav3", function () {
  location.href = "./voice.html";
});

$(document).on("click", ".nav4", function () {
  location.href = "./recruit.html";
});

$(function() {
	$('#submit').attr('disabled', 'disabled');

	$('#check').click(function() {
		if ($(this).prop('checked') == false) {
			$('#submit').attr('disabled', 'disabled');
		} else {
			$('#submit').removeAttr('disabled');
		}
	});
});
