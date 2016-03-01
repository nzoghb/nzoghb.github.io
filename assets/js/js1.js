$(document).ready(function() {

  $(".overlay").css("cursor", "pointer")

	$(window).load(function(){
  		$('#t1').delay(500).fadeTo(2000, 1);
  		$('#t2').delay(500).fadeTo(2000, 1);
  		$('#t2').delay(500).fadeTo(2000, 0, function() {
  			$('#t2').text("Quality");
  		});
  		$('#t2').delay(500).fadeTo(2000, 1);
  		$('#t2').delay(500).fadeTo(2000, 0, function() {
  			$('#t2').text("Flow");
  		});
  		$('#t2').delay(500).fadeTo(2000, 1, function() {
  			$('#animated').fadeTo(2000, 0, function() {
  				$('#animated').addClass('bye');
  			});
  		});
  	});

	$(".overlay").hover(
		function() {
			$(this).fadeTo("slow", "0.8");
		},
		function() {
			$(this).fadeTo("slow", "0");
		});

  $(".txt").hover(
    function() {
      $(this).css("font-size", "41px");
    }, function() {
      $(this).css("font-size", "40px");
      $(this).css("opacity", "0.8");
    });

//  $(".overlay").click(
//    function(){
//      $("li").animate({width: "0px"});
//    });

//  $(".overlay").click(
//    function(){
//      $("li").find("img").animate({width: "0px"});
//    });

});