
var inputValue = $("#city-type").val(); 
var city1 = Lax; 

if (inputValue === 'city1')  {
	$(".body").css({ "background-image": "<img src=\"http://www.clipartbest.com/cliparts/Kin/oyR/KinoyRpiq.jpeg\">"})
}


$(function() {
  var

  $backgroundElm = $("#bkelm");
  $("#inputelm").on("keyup", function () {
    console.log("working..." + $(this).val());

    if ($(input).val() === 'lax') {
        $backgroundElm.css("background-image", "<img src=\"http://blackjacklife.com/wp-content/uploads/2012/01/blackjack-picture-1.jpg\">);
    } else if ($(this).val() === "Lax") {
        $backgroundElm.css("background-color", "yellow");
    }
  });
});