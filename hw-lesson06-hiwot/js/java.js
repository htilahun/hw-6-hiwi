// Awesome job, Hiwi! I'm glad you were able to get this totally working. One note, I would title your javascript files script.js. Java is actually an entirely different programming language, too, so that doesn't really apply here.

// Also, make sure you're wrapping your code in the $(document).ready(function(){}) to make sure that the JavaScript isn't run until the page is done loading. The code will still work most of the time, but it can prevent issues from occuring in some cases.

function cityBackground() {
	event.preventDefault();
	var input = $("input[type='text']").val().toLowerCase();
  // I'm biased, but I love the .toLowerCase() function! Hehe.

	if (input === "nyc" || input === "new york") {
		$("body").css("background-image", "url(images/nyc.jpg)");
	} else if (input ==="la" || input === "los angeles") {
		$("body").css("background-image", "url(images/la.jpg)");
	} else if (input === "austin") {
		$("body").css("background-image", "url(images/austin.jpg)");
    // Try to be consistent with your spacing here. I would remove the trailing space and make sure that the spaces around your === are uniform; just a nice way to keep your code sleeker.
	} else if (input === "sf" || input === "san francisco") {
		$("body").css("background-image", "url(images/sf.jpg)");
	} else if (input === "sydney") {
		$("body").css("background-image", "url(images/sydney.jpg)");
	} else {
    // You were missing an opening bracket after this else statement; make sure you always open and close out all your brackets. JavaScript is forgiving, so it will still work without it sometimes, but it will often break your code later on.
		$("body").css("background-image", "url(images/citipix_skyline.jpg)");
	}
}


$("input[type='submit']").click(cityBackground)
