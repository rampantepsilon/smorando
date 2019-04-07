window.$ = window.jQuery = require('jquery');

var currentVer = '1.2.2';

$(document).ready(function(){
  $.getJSON("https://api.github.com/repos/rampantepsilon/smoanyrando/releases", function(result){
    var commit = result[0].tag_name;
    var linUpdate = "New Version (v" + commit + ") available! <a href='https://github.com/rampantepsilon/smorando/releases/download/2.0-alpha/SMO-Moon-Randomizer-v2.0.0-alpha_Linux-x64.zip' target='_blank'>Click Here to Download</a>";
    var winUpdate = "New Version (v" + commit + ") available! <a href='https://github.com/rampantepsilon/smorando/releases/download/2.0-alpha/SMO-Moon-Randomizer-v2.0.0-alpha_Windows-x64.exe' target='_blank'>Click Here to Download</a>";
    if (commit != currentVer && commit > currentVer/* && commit.contains('alpha' || 'beta') == false*/){
      if (process.platform === 'linux'){
        $("#updateCheck").append(linUpdate);
      }
      else if (process.platform === 'win32'){
        $("#updateCheck").append(winUpdate);
      }
      else {
        $("#updateCheck").append("New Version (v" + commit + ") available! <a href='https://github.com/rampantepsilon/smorando/releases/' target='_blank'>Click Here to Download</a>");
      }
    }
  });
});
