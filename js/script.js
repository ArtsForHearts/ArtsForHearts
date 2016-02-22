$(document).ready(function(){

	$(".menuButton").click(function(){
		$(".navbar").slideToggle();
	});

	var submitForm = function(){
		$('form').slideUp();
	}
	$('#formContact').submit(function(e) {
        $('form').slideUp();
        $('.formSuccess').show();
    });

    $('#formAuditions').submit(function(e) {
        $('form').slideUp();
        $('.formSuccess').show();
    });
	
});