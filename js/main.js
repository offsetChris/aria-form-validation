
function validateForm() {
    var errorSummary = $('#error-summary');
    $('#error-content').remove();
    var errorContent = '<div id="error-content" role="alert" aria-atomic="true"><p class="error-heading">Please complete all required fields:</p>';
    
	// errorSummary.empty();
	$('#error-summary').hide();
	$('.error-message').remove();

	$('[aria-required="true"]').each(function(){
		if($(this).is('fieldset')){
			if(!$(this).find('input:checked').length > 0){
                $(this).attr('aria-invalid',true);
                var errortxt = $(this).find('legend').text();
                errorContent += '<p>'+errortxt+'</p>';
                $(this).append('<span class="error-message">Please choose an option</span>');
            } else {
                $(this).attr('aria-invalid', false);
            }
		}
		if($(this).is('input[type="text"],textarea')){
			if($(this).val() == ''){
                $(this).attr('aria-invalid',true);
                var errortxt = $(this).prev('label').text();
                errorContent += '<p>'+errortxt+'</p>';
                $(this).parent().append('<span class="error-message">Please enter text</span>');
            } else {
                $(this).attr('aria-invalid', false);
            }
		}
		if($(this).is('select')){
			if($(this).val() < 0 ){
                $(this).attr('aria-invalid', true);
                var errortxt = $(this).parents('.select-wrapper').prev('label').text();
                errorContent += '<p>'+errortxt+'</p>';
                $(this).parent().append('<span class="error-message">Please select an option</span>');
            } else {
                $(this).attr('aria-invalid',false);
            }
		}
	});

	if($('[aria-invalid="true"]').length > 0 ){
        console.log('Errors!');
        errorContent += '</div>';
        errorSummary.append(errorContent);
        errorSummary.fadeIn().attr('tabindex','1').focus();
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