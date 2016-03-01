$(document).ready(function() {

  $("#direct").css("cursor", "pointer")
  $("#size").css("cursor", "pointer")
  $(".box").css("cursor", "pointer")

  $(".box").click(function (){
    if (!$(this).hasClass("boxtemp")) {
      $(".box").removeClass("boxtemp");
      $(this).addClass("boxtemp");
    }
  });

  $("#size").hover(
    function() {
      $(this).fadeTo("slow", "0", function() {
        $(this).css("display", "none");
      });
    });

  $(".buy").hover(
    function() {
      $(this).css("font-size", "41px");
    }, function() {
      $(this).css("font-size", "40px");
      $(this).css("opacity", "0.8");
    });

  $(".buy").click(
    function() {
      $(this).css("opacity", "1");
    });

  $("#direct").hover(
    function() {
      $(this).css("opacity", "0.8");
    }, function() {
      $(this).css("opacity", "0.5");
    });

  $("#direct").click(
    function() {
      $(this).css("opacity", "1");
    });

  $(".size1").css("cursor", "pointer")

	$(".size1").hover(
		function() {
			$(this).fadeTo("slow", "1");
		},
		function() {
			$(this).fadeTo("slow", "0");
		});

});