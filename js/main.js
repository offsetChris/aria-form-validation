
function validateForm() {
	var errorSummary = $('#error-summary ul');
	errorSummary.empty();
	$('#error-summary').hide();
	$('.error-message').remove();

	$('[aria-required="true"]').each(function(){
		if($(this).is('fieldset')){
			if(!$(this).find('input:checked').length > 0){
                $(this).attr('aria-invalid',true);
                var errortxt = $(this).find('legend').text();
                errorSummary.append('<li>'+errortxt+'</li>');
                $(this).append('<span role="alert" class="error-message">Please choose an option</span>');
            } else {
                $(this).attr('aria-invalid', false);
            }
		}
		if($(this).is('input[type="text"],textarea')){
			if($(this).val() == ''){
                $(this).attr('aria-invalid',true);
                var errortxt = $(this).prev('label').text();
                errorSummary.append('<li>'+errortxt+'</li>');
                $(this).parent().append('<span role="alert" class="error-message">Please enter text</span>');
            } else {
                $(this).attr('aria-invalid', false);
            }
		}
		if($(this).is('select')){
			if($(this).val() < 0 ){
                $(this).attr('aria-invalid', true);
                var errortxt = $(this).parents('.select-wrapper').prev('label').text();
                errorSummary.append('<li>'+errortxt+'</li>');
                $(this).parent().append('<span role="alert" class="error-message">Please select an option</span>');
            } else {
                $(this).attr('aria-invalid',false);
            }
		}
	});

	if($('[aria-invalid="true"]').length > 0 ){
        console.log('Errors!');
        $('#error-summary').fadeIn();
        window.scrollTo(0,0);
    } else {
        // ajax post data
        console.log('Send form!')
    }  

}

$(function(){
    $('[aria-required="true"]').each(function(){
        $(this).parents('.form-item').addClass('required');
    });
});