$(document).ready(function(){

  var maxChars = 140;
  var inputBox = $('#textbox');
  var count = $('#count');

  inputBox.on('keyup', checkAndUpdateCount);

  checkAndUpdateCount();

  function checkAndUpdateCount(event){
    var currentText = inputBox.val();
    var remaining = maxChars - currentText.length;

    // count.addClass('warn') will add a color warning via css.
    if(remaining > 20){
      count.removeClass('warn')
    } else {
      count.addClass('warn')
    };

    // count.text("update") will update count box
    // count.text(remaining);
    if (remaining >= 0){
      count.text(remaining);
    } else {
      // we need to truncate text if needed and update inputBox.val(truncated_string);
      count.text(0);
      var truncate = currentText.substring(0, maxChars-1);
      inputBox.val(truncate);
    }

  }

});
