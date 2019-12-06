
/* Clear email input box when invite button is clicked */

$("#mc-embedded-subscribe").on("click", function(){
  console.log("clicked notify");
  $('#mce-EMAIL').val("");
});