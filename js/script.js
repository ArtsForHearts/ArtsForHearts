$(document).ready(function(){
	var thumbImage;
	var FullImage;
	var artID;
	var currentImage;

	$(".menuButton").click(function(){
		$(".navbar").slideToggle();
	});

	//$(".artProjectThumb").click(function(){;
	//	$(this).toggleClass("FullView");
	//	$(".fadeBack").toggle();
	//});

	/*$('.artProjectThumb').click(function(){

		var thumbImage = $(this).css('background-image');
	    var FullImage = thumbImage.replace('Art-Thumbs', 'Art') ;//+ '!important';
  
	    if ($(this).hasClass('FullView')) 
	    {
	        $(this).height($(this).find('.artProjectThumb').height());
	        $(this).removeClass('FullView');
	        $(".fadeBack").hide();
	    } 
	  else {
	        var artID ="#"+$(this).attr('id'); 
	        $(artID).css('background-image',FullImage);
			/*$(artID).on('load', function(){
				//$('#loader_img').hide();
				alert("Image Loaded");
			});
	        $(this).height('');
	        $(this).addClass('FullView');
	        $(".fadeBack").show();  
	    }
	});*/

	$('.artProjectThumb').click(function() {
		var thumbImage = $(this).css('background-image');
	    var FullImage = thumbImage.replace('Art-Thumbs', 'Art') ;
	    FullImage = FullImage.replace('Kate.jpg', 'Kate.png') ;
		var artID ="#"+$(this).attr('id'); 
		currentImage=artID;
	    $('.fullImage').css('background-image',FullImage);
	    $(".fadeBack").show(); 
		$('.fullImage').show();
      /*if($('.fullImage').hasClass('slide-up')) {
        $('.fullImage').addClass('slide-down', 1000, 'easeOutBounce');
        $('.fullImage').removeClass('slide-up'); 
      } else {
        $('.fullImage').removeClass('slide-down');
        $('.fullImage').addClass('slide-up', 1000, 'easeOutBounce'); 
      }*/
  });

	$('.fullImage').click(function() {
	    $('.fullImage').css('background-image',"");
	    $(".fadeBack").hide(); 
		$('.fullImage').hide();
  });

	$('.fadeBack').click(function(){
		$('.fullImage').click();
	});

	$(document).keyup(function(e) {
     if (e.keyCode == 27) { // escape key maps to keycode `27`
        $('.fullImage').click();
    }
	});


	$(document).keyup(function(e) {
     if (e.keyCode == 37) {
        if ($('.fullImage').is(':visible')==true){
			currentImage=currentImage.replace('#art','');
			currentImage = parseInt(currentImage);
			currentImage--;
			var nextBack = $('#art'+currentImage).css('background-image');
			nextBack=nextBack.replace('Art-Thumbs', 'Art');
			$('.fullImage').css('background-image',nextBack);
			currentImage="#art"+currentImage;
		}
    }
    if (e.keyCode == 39) {
        if ($('.fullImage').is(':visible')==true){
			currentImage=currentImage.replace('#art','');
			currentImage = parseInt(currentImage);
			currentImage++;
			var nextBack = $('#art'+currentImage).css('background-image');
			nextBack=nextBack.replace('Art-Thumbs', 'Art');
			$('.fullImage').css('background-image',nextBack);
			currentImage="#art"+currentImage;
		}
    }
	});



	/*$('.fadeBack').click(function(){
		//$('.artProjectThumb').click();
        $('.artProjectThumb').removeClass('FullView');
        $(".fadeBack").hide();
	});

	$(document).keyup(function(e) {
     if (e.keyCode == 27) { // escape key maps to keycode `27`
        //$('.artProjectThumb').click();
        $('.artProjectThumb').removeClass('FullView');
        $(".fadeBack").hide();
    }
	});*/




});