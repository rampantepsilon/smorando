window.$ = window.jQuery = require('jquery');

var currentVer = version.current;

$(document).ready(function(){
  $("#updateCheck").html("Checking for Updates");
  $.getJSON("https://api.github.com/repos/rampantepsilon/smorando/releases", function(result){
    var commit = result[0].tag_name;
    var noUpdate = "<a id='betaCheck'>No Release Updates Available. Click Here to check for Beta/Alpha Releases</a>";
    var noUpdate2 = "No Beta/Alpha Updates Available.";
    var update = "New Version (v" + commit + ") available! <a href='https://github.com/rampantepsilon/smorando/releases/' target='_blank'>Click Here to Download</a>";
    var updateStatus = "";

    if (commit != currentVer && commit > currentVer && commit.indexOf('alpha') == -1 && commit.indexOf('beta') == -1){
      updateStatus = update;
    }
    else {
      updateStatus = noUpdate;
    }

    $('#updateCheck').html(updateStatus);

    $("#betaCheck").click(function(){
      $("#updateCheck").html("Checking for Beta/Alpha Releases");
      if (commit != currentVer && commit > currentVer){
        updateStatus = update;
      }
      else {
        updateStatus = noUpdate2;
      }

      $('#updateCheck').delay(2000).queue(function(n){
        $(this).html(updateStatus);
         n();
       })
    })
  });
});
