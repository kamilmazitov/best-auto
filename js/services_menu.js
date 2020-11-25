$(function(){
  $("#diagnostics-button").css({
    opacity: 0.99
  });
  $("#shinomontazh-button").css({
    opacity: 0.99
  });
  $("#diagnostics-button").css({
    opacity: 0.99
  });
  $("#tech-button").css({
    opacity: 0.99
  });
  $("#page-wrap h3.button").click(function(){
    $clicked = $(this);
      if ($clicked.css("opacity") != "1" && $clicked.is(":not(animated)")) {
        $clicked.animate({
        opacity: 1,
        borderWidth: 5
      }, 600 );
      var idToLoad = $clicked.attr("id").split('-');
      $("#content").children("div:visible").fadeOut("fast", function(){
        $(this).parent().find("#"+idToLoad[0]).fadeIn();
      })
    }
    $clicked.siblings(".button").animate({
      opacity: 0.99,
      borderWidth: 0
    }, 600 );
  });
});
