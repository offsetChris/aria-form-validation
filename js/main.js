
function validateForm() {
	var errorSummary = $('#error-summary ul');
	errorSummary.empty();
	$('#error-summary').hide();
	$('.error-message').remove();

	$('[aria-required="true"]').each(function(){
		if($(this).is('fieldset')){

		}
		if($(this).is('input[type="text"],textarea')){

		}
		if($(this).is('select')){
			
		}
	});


}