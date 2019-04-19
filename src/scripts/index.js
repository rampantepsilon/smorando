var setValue = 'any';
var verHash = '201d';
var wrongSeed = "<font color='red'>Invalid Seed. Please use a proper v2.0.1-Dev seed.";
var estTime = '2-5 Hours';

var Base64 = require('js-base64').Base64;

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
  var decodedSeed2 = Base64.decode(pasteText.value);
  var moons2 = decodedSeed2.split("");
  for (i = 0; i < moons2.length - 4; i++){
    moons2[i] = parseInt(moons2[i], 36);
  }

  //Determine if Festival or Any
  var set = (moons2[0].toString(36));

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
    var decodedSeed = Base64.decode(seed);
    var moons = decodedSeed.split("");
    for (i = 0; i < moons.length - 4; i++){
      moons[i] = parseInt(moons[i], 36);
    }

    //Determine if Festival or Any
    var set = (moons[0].toString(36));
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
      var hash = moons[45] + moons[46] + moons[47] + moons[48];
      if (hash == verHash){
        sessionStorage.setItem('fSeed', seed);
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
        sessionStorage.setItem('fSeed', seed);
        window.open('festivallong.html','modal','width=820, height=740')
      }
      else {
        document.getElementById('error').innerHTML = wrongSeed;
        document.getElementById('time').innerHTML = 'Enter A Valid Seed To See Estimate';
      }
    }
  }
}
