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
var estTime = '2-5 Hours';

var Base64 = require('js-base64').Base64;

function resetRando() {
  sessionStorage.clear();
  location.reload();
}

function estimateTime() {
  document.getElementById('time').innerHTML = estTime;
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

  if (set == 'a' || set == 'b'){
    document.getElementById('time').innerHTML = '2-5 Hours';
  }
  if (set == 'f' || set == 'g'){
    document.getElementById('time').innerHTML = '< 2 Hours';
  }
}

function lengthSelect(){
  sessionStorage.clear();
  document.getElementById('seed').value = '';
}

function setSelect(set){
  sessionStorage.clear();
  setValue = set;
  document.getElementById('seed').value = '';
  document.getElementById('error').innerHTML = '';
  if (setValue == 'any'){
    estTime = '2-5 Hours';
    $(".long").attr("disabled", false);
  }
  if (setValue == 'festival'){
    estTime = '< 2 Hours';
    $(".long").attr("disabled", false);
  }
  if (setValue == 'wp'){
    estTime = '??? (Work in Progress)';
    $(".normal").prop("checked", true);
    $(".long").attr("disabled", true);
  }
  document.getElementById('time').innerHTML = estTime;
  //document.getElementById('selected').innerHTML = setValue;
}

function generateSeed(){
  //Get Randomizer Information
  var seed = document.getElementById('seed').value;
  var lengthValue = document.querySelector('#length:checked').value;

  //Open page based on seeding
  if (seed == ''){
    if (setValue == 'any' && lengthValue == 'normal'){
      window.open('any.html', 'modal', 'width=820, height=740');
    }
    else if (setValue == 'festival' && lengthValue == 'normal'){
      window.open('festival.html','modal','width=820, height=740');
    }
    else if (setValue == 'any' && lengthValue == 'long'){
      window.open('anylong.html', 'modal', 'width=820, height=740');
    }
    else if (setValue == 'festival' && lengthValue == 'long'){
      window.open('festivallong.html', 'modal', 'width=820, height=740');
    }
    else if (setValue == 'wp' && lengthValue == 'normal'){
      window.open('wp.html','modal','width=820, height=740');
    }
  }
  else {
    //Decode Seed
    var moons = seed.split("");
    for (i = 5; i < moons.length; i++){
      moons[i] = (moons[i].charCodeAt() - 33);
    }

    //Determine if Festival or Any
    var set = moons[0];
    //document.getElementById('selected').innerHTML = set;
    var compatible = 0;

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
        window.open('any.html', 'modal', 'width=820, height=740');
      }
      else {
        document.getElementById('error').innerHTML = wrongSeed;
        document.getElementById('time').innerHTML = 'Enter A Valid Seed To See Estimate';
      }
    }
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
        window.open('festival.html','modal','width=820, height=740')
      }
      else {
        document.getElementById('error').innerHTML = wrongSeed;
        document.getElementById('time').innerHTML = 'Enter A Valid Seed To See Estimate';
      }
    }
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
        window.open('anylong.html','modal','width=820, height=740')
      }
      else {
        document.getElementById('error').innerHTML = wrongSeed;
        document.getElementById('time').innerHTML = 'Enter A Valid Seed To See Estimate';
      }
    }
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
        window.open('festivallong.html','modal','width=820, height=740')
      }
      else {
        document.getElementById('error').innerHTML = wrongSeed;
        document.getElementById('time').innerHTML = 'Enter A Valid Seed To See Estimate';
      }
    }
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
        window.open('wp.html', 'modal', 'width=820, height=740');
      }
      else {
        document.getElementById('error').innerHTML = wrongSeed;
        document.getElementById('time').innerHTML = 'Enter A Valid Seed To See Estimate';
      }
    }
  }
}
