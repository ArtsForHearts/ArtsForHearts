$(document).ready(function(){

	$(".menuButton").click(function(){
		$(".navbar").slideToggle();
	});

	var submitForm = function(){
		$('form').slideUp();
	}
	$('#formAuditions').submit(function(e) {
        $('form').slideUp();
    });
	
});