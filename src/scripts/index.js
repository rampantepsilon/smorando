var setValue = 'any';
var verHash = version.compat[0];
var versionCompat = '';
for (i = 0; i < version.versionSupported.length; i++){
  if (i>0){
    versionCompat += " / ";
  }
  versionCompat += version.versionSupported[i];
}
var wrongSeed = "<font color='red'>Invalid Seed. Please use a proper "+versionCompat+" seed.";
var estTime = '1-1/2 - 4 Hours';

var Base64 = require('js-base64').Base64;

function resetRando() {
  sessionStorage.clear();
  location.reload();
}

function estimateTime() {
  document.getElementById('time').innerHTML = estTime;
  $(".none").prop("checked", true);
  $(".v1").attr("disabled", true);
  //$(".cp").attr("disabled", true);
  $("#cpNS").hide();
  //$(".wp").attr("disabled", true);
}

function pasteSeed(){
  var pasteText = document.getElementById('seed');
  pasteText.value = '';
  pasteText.select();
  document.execCommand('paste');
  document.getElementById('error').innerHTML = '';

  //Decode Seed
  var moons2 = pasteText.value.split("");
  for (i = 1; i < moons2.length - 4; i++){
    moons2[i] = (moons2[i].charCodeAt()-33);
  }

  //Determine if Festival or Any
  var set = moons2[0];

  if (set == 'a' || set == 'b' || set == 'c' || set == 'd'){
    document.getElementById('time').innerHTML = '1-1/2 - 4 Hours';
  }
  if (set == 'f' || set == 'g' || set == 'h' || set == 'i'){
    document.getElementById('time').innerHTML = '< 1 Hours';
  }
  if (set == 'w' || set == 'x'){
    document.getElementById('time').innerHTML = '2 - 4 Hours (Estimated)'
  }
}

function lengthSelect(){
  sessionStorage.clear();
  document.getElementById('seed').value = '';

  //console.log(process.versions.electron) //For Debug Only
}

function setSelect(set){
  sessionStorage.clear();
  setValue = set;
  document.getElementById('seed').value = '';
  document.getElementById('error').innerHTML = '';
  if (setValue == 'any'){
    estTime = '1-1/2 - 4 Hours';
    $(".v1").attr("disabled", true);
    $(".cp").attr("disabled", false);
    $("#v1NS").show();
    $("#cpNS").hide();
  }
  if (setValue == 'festival'){
    estTime = '< 2 Hours';
    $(".v1").attr("disabled", true);
    $(".cp").attr("disabled", true);
    $("#v1NS").show();
    $("#cpNS").show();
  }
  if (setValue == 'wp'){
    estTime = '2 - 4 Hours (Estimated)';
    $(".none").prop("checked", true);
    $(".v1").attr("disabled", true);
    $(".cp").attr("disabled", false);
    $("#v1NS").show();
    $("#cpNS").hide();
  }
  document.getElementById('time').innerHTML = estTime;
  //document.getElementById('selected').innerHTML = setValue;
}

function generateSeed(){
  //Get Randomizer Information
  var seed = document.getElementById('seed').value;
  var lengthValue = document.querySelector('#clips:checked').value;

  //Open page based on seeding
  if (seed == ''){
    if (setValue == 'any' && lengthValue == 'none'){
      $("#body").load('any.html')
      setTimeout("clear()", 50);
      //window.open('any.html', 'modal');
    }
    else if (setValue == 'any' && lengthValue == 'cp'){
      $("#body").load('anycp.html')
      setTimeout("clear()", 50);
      //window.open('anycp.html', 'modal');
    }
    else if (setValue == 'festival' && lengthValue == 'none'){
      $("#body").load('festival.html')
      setTimeout("clear()", 50);
      //window.open('festival.html', 'modal');
    }
    else if (setValue == 'wp' && lengthValue == 'none'){
      $("#body").load('wp.html')
      setTimeout("clear()", 50);
      //window.open('wp.html', 'modal');
    }
    else if (setValue == 'wp' && lengthValue == 'cp'){
      $("#body").load('wpCPClips.html')
      setTimeout("clear()", 50);
      //window.open('wpCPClips.html', 'modal');
    }
  }
  else {
    //Decode Seed
    var moons = seed.split("");
    for (i = 5; i < moons.length; i++){
      moons[i] = (moons[i].charCodeAt() - 33);
    }

    //Determine if Festival, Any, or WP
    var set = moons[0];
    //document.getElementById('selected').innerHTML = set;
    var compatible = 0;

    //Any No Clips (v2.1.1+)
    if (set == 'a'){
      var hash = moons[1] + moons[2] + moons[3] + moons[4];

      //Check if compatible
      for (v = 0; v < version.compat.length; v++){
        if (compatible != 1){
          if (version.compat[v] == hash){
            compatible = 1;
          }
          else {
            compatible = 0;
          }
        }
        else {
          break;
        }
      }

      if (compatible == 1){
        sessionStorage.setItem('aSeed', seed);
        $("#body").load('any.html')
        setTimeout("clear()", 50);
        //window.open('any.html', 'modal');
      }
      else {
        document.getElementById('error').innerHTML = wrongSeed;
        document.getElementById('time').innerHTML = 'Enter A Valid Seed To See Estimate';
      }
    }

    //Any Current Patch (v2.2.0+)
    if (set == 'd'){
      var hash = moons[1] + moons[2] + moons[3] + moons[4];

      //Check if compatible
      for (v = 0; v < version.compat.length; v++){
        if (compatible != 1){
          if (version.compat[v] == hash){
            compatible = 1;
          }
          else {
            compatible = 0;
          }
        }
        else {
          break;
        }
      }

      if (compatible == 1){
        sessionStorage.setItem('aSeed', seed);
        $("#body").load('anycp.html')
        setTimeout("clear()", 50);
        //window.open('anycp.html', 'modal');
      }
      else {
        document.getElementById('error').innerHTML = wrongSeed;
        document.getElementById('time').innerHTML = 'Enter A Valid Seed To See Estimate';
      }
    }

    //Festival No Clips (v2.1.1+)
    if (set == 'f'){
      var hash = moons[1] + moons[2] + moons[3] + moons[4];

      //Check if compatible
      for (v = 0; v < version.compat.length; v++){
        if (compatible != 1){
          if (version.compat[v] == hash){
            compatible = 1;
          }
          else {
            compatible = 0;
          }
        }
        else {
          break;
        }
      }

      if (compatible == 1){
        sessionStorage.setItem('fSeed', seed);
        $("#body").load('festival.html')
        setTimeout("clear()", 50);
        //window.open('festival.html','modal')
      }
      else {
        document.getElementById('error').innerHTML = wrongSeed;
        document.getElementById('time').innerHTML = 'Enter A Valid Seed To See Estimate';
      }
    }

    //Any Long (To Be Removed by 3.0.0)
    if (set == 'b'){
      var hash = moons[1] + moons[2] + moons[3] + moons[4];

      //Check if compatible
      for (v = 0; v < version.compat.length; v++){
        if (compatible != 1){
          if (version.compat[v] == hash){
            compatible = 1;
          }
          else {
            compatible = 0;
          }
        }
        else {
          break;
        }
      }

      if (compatible == 1){
        sessionStorage.setItem('bSeed', seed);
        $("#body").load('anylong.html')
        setTimeout("clear()", 50);
        //window.open('anylong.html','modal')
      }
      else {
        document.getElementById('error').innerHTML = wrongSeed;
        document.getElementById('time').innerHTML = 'Enter A Valid Seed To See Estimate';
      }
    }

    //Festival Long (To Be Removed by 3.0.0)
    if (set == 'g'){
      var hash = moons[1] + moons[2] + moons[3] + moons[4];

      //Check if compatible
      for (v = 0; v < version.compat.length; v++){
        if (compatible != 1){
          if (version.compat[v] == hash){
            compatible = 1;
          }
          else {
            compatible = 0;
          }
        }
        else {
          break;
        }
      }

      if (compatible == 1){
        sessionStorage.setItem('gSeed', seed);
        $("#body").load('festivallong.html')
        setTimeout("clear()", 50);
        //window.open('festivallong.html','modal')
      }
      else {
        document.getElementById('error').innerHTML = wrongSeed;
        document.getElementById('time').innerHTML = 'Enter A Valid Seed To See Estimate';
      }
    }

    //World Peace No Clips (v2.2.0+)
    if (set == 'w'){
      var hash = moons[1] + moons[2] + moons[3] + moons[4];

      //Check if compatible
      for (v = 0; v < version.compat.length; v++){
        if (compatible != 1){
          if (version.compat[v] == hash){
            compatible = 1;
          }
          else {
            compatible = 0;
          }
        }
        else {
          break;
        }
      }

      if (compatible == 1){
        sessionStorage.setItem('wSeed', seed);
        $("#body").load('wp.html')
        setTimeout("clear()", 50);
        //window.open('wp.html', 'modal');
      }
      else {
        document.getElementById('error').innerHTML = wrongSeed;
        document.getElementById('time').innerHTML = 'Enter A Valid Seed To See Estimate';
      }
    }

    //World Peace Current Patch (v2.2.0+)
    if (set == 'x'){
      var hash = moons[1] + moons[2] + moons[3] + moons[4];

      //Check if compatible
      for (v = 0; v < version.compat.length; v++){
        if (compatible != 1){
          if (version.compat[v] == hash){
            compatible = 1;
          }
          else {
            compatible = 0;
          }
        }
        else {
          break;
        }
      }

      if (compatible == 1){
        sessionStorage.setItem('wSeed', seed);
        $("#body").load('wpCPClips.html')
        setTimeout("clear()", 50);
        //window.open('wpCPClips.html', 'modal');
      }
      else {
        document.getElementById('error').innerHTML = wrongSeed;
        document.getElementById('time').innerHTML = 'Enter A Valid Seed To See Estimate';
      }
    }
  }
}
