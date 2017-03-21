$(document).ready(function(){
	var folder = "../images/GalleryPhotos2016/";


					$.ajax({
					    url : folder,
					    success: function (data) {
					        $(data).find("a").attr("href", function (i, val) {
					            if( val.match(/\.(jpe?g|png|gif|JPG)$/) ) { 
					                //$("#gallery").append( "<img src='"+ folder + val +"'>" );
					                $("#gallery").append( "<a href='"+ folder + val +"'>" + "<img src=''>" + "</a>" );
					            } 
					        });
					    }
					});
					$('#gallery').photobox('a',{ time:0 });

});