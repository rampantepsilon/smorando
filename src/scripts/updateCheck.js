window.$ = window.jQuery = require('jquery');

var currentVer = '1.2.1';

$(document).ready(function(){
  $.getJSON("https://api.github.com/repos/rampantepsilon/smoanyrando/releases", function(result){
    var commit = result[0].tag_name;
    if (commit != currentVer && commit > currentVer){
      $("#updateCheck").append("New Version (v"+commit+") available! <a href='https://github.com/rampantepsilon/smoanyrando/releases' target='_blank'>Click Here to Download</a>");
    }
  });
});
