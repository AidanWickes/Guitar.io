$(document).ready(function() {

  //hides dropdown content
  $(".scale_chart").hide();

  //unhides first option content
  $("#option1").show();

  //listen to dropdown for change
  $(".scale_select").change(function() {
    //rehide content on change
    $('.scale_chart').hide();
    //unhides current item
    $('#' + $(this).val()).show();
  });

});