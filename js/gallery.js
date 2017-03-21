var folder = "../images/GalleryPhotos2016";

var grabImages = function(){
	$.ajax({
		url : folder,
		success: function (data) {
			$(data).find("a").attr("href", function (i, val) {
				if( val.match(/\.(jpe?g|png|gif|JPG)$/) ) { 
					//$("#gallery").append( "<img src='"+ folder + val +"'>" );
					$("#gallery").append("<p>image loaded</p>");
					$("#gallery").append( "<a href='"+ folder + val +"'>" + "<img src=''>" + "</a>" );
				} 
			});
		}
	});
};
$(document).ready(function(){
	grabImages;
	$('#gallery').photobox('a',{ time:0 });
});