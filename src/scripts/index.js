var setValue = 'any';
var verHash = '210f';
var wrongSeed = "<font color='red'>Invalid Seed. Please use a proper v2.1.0 seed.";
var estTime = '2-5 Hours';

var Base64 = require('js-base64').Base64;

function resetRando() {
  sessionStorage.clear();
  location.reload();
}

function estimateTime() {
  document.getElementById('time').innerHTML = estTime;
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

  if (set == 'a'){
    document.getElementById('time').innerHTML = '2-4 Hours';
  }
  if (set == 'f'){
    document.getElementById('time').innerHTML = '< 1 Hour';
  }
  if (set == 'b'){
    document.getElementById('time').innerHTML = '2-5 Hours';
  }
  if (set == 'g'){
    document.getElementById('time').innerHTML = '< 2 Hours';
  }
}

function setSelect(set){
  sessionStorage.clear();
  setValue = set;
  document.getElementById('seed').value = '';
  document.getElementById('error').innerHTML = '';
  if (setValue == 'any'){
    estTime = '2-5 Hours';
  }
  if (setValue == 'festival'){
    estTime = '< 2 Hours';
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
  }
  else {
    //Decode Seed
    var moons = seed.split("");
    for (i = 1; i < moons.length - 4; i++){
      moons[i] = (moons[i].charCodeAt() - 33);
    }

    //Determine if Festival or Any
    var set = moons[0];
    //document.getElementById('selected').innerHTML = set;

    if (set == 'a'){
      var hash = moons[97] + moons[98] + moons[99] + moons[100];
      if (hash == verHash){
        sessionStorage.setItem('aSeed', seed);
        window.open('any.html', 'modal', 'width=820, height=740');
      }
      else {
        document.getElementById('error').innerHTML = wrongSeed;
        document.getElementById('time').innerHTML = 'Enter A Valid Seed To See Estimate';
      }
    }
    if (set == 'f'){
      var hash = moons[45] + moons[46] + moons[47] + moons[48];
      if (hash == verHash){
        sessionStorage.setItem('fSeed', seed);
        window.open('festival.html','modal','width=820, height=740')
      }
      else {
        document.getElementById('error').innerHTML = wrongSeed;
        document.getElementById('time').innerHTML = 'Enter A Valid Seed To See Estimate';
      }
    }
    if (set == 'b'){
      var hash = moons[97] + moons[98] + moons[99] + moons[100];
      if (hash == verHash){
        sessionStorage.setItem('bSeed', seed);
        window.open('anylong.html','modal','width=820, height=740')
      }
      else {
        document.getElementById('error').innerHTML = wrongSeed;
        document.getElementById('time').innerHTML = 'Enter A Valid Seed To See Estimate';
      }
    }
    if (set == 'g'){
      var hash = moons[45] + moons[46] + moons[47] + moons[48];
      if (hash == verHash){
        sessionStorage.setItem('gSeed', seed);
        window.open('festivallong.html','modal','width=820, height=740')
      }
      else {
        document.getElementById('error').innerHTML = wrongSeed;
        document.getElementById('time').innerHTML = 'Enter A Valid Seed To See Estimate';
      }
    }
  }
}
