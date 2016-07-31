 
function cityBackground() {
	event.preventDefault();
	var input = $("input[type='text']").val().toLowerCase();

	if (input === "nyc" || input === "new york") {
		$("body").css("background-image", "url(images/nyc.jpg)")
	} else if (input ==="la" || input === "los angeles") {
		$("body").css("background-image", "url(images/la.jpg)")	
	} else if (input==="austin") {
		$("body").css("background-image", "url(images/austin.jpg")
	
	}else if (input==="sf" || input === "san francisco") {
		$("body").css("background-image", "url(images/sf.jpg")
	
	}else if (input==="sydney") {
		$("body").css("background-image", "url(images/sydney.jpg")

	}else
		$("body").css("background-image", "url(images/citipix_skyline.jpg)")
	}
	

$("input[type='submit']").click(cityBackground)











