$(document).ready(function() {
	$('body').css('display', 'none');

	$('body').fadeIn(750);


	/*
		Contact form
	*/
	$('form').submit(function(e) {
		e.preventDefault();
		var postdata = $(this).serialize();
		$.ajax({
			type: 'POST',
			url: 'contact.php',
			data: postdata,
			dataType: 'json',
			success: function(json) {

				if(json.nameMessage == '' && json.emailMessage == '' && json.subjectMessage == '' && json.messageMessage == '') {
					$('.submit').text("Thank You.");
				}

			}
		});
	});

});
