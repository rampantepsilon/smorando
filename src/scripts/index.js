var Base64 = require('js-base64').Base64;

function pasteSeed(){
  var pasteText = document.getElementById('seed');
  pasteText.select();
  document.execCommand('paste');
}

function generateSeed(){
  //Get Randomizer Information
  var seed = document.getElementById('seed').value;
  var setValue = document.querySelector('#set:checked').value;
  //var lengthValue = document.querySelector('#length:checked').value;

  //Decode Seed
  var decodedSeed = Base64.decode(seed);
  var moons = decodedSeed.split("");
  for (i = 0; i < moons.length - 4; i++){
    moons[i] = parseInt(moons[i], 36);
  }

  //Determine if Festival or Any
  var set = '';
  if (moons[100] = 'a') set = moons[100];
  if (moons[48] = 'f') set = moons[48];

  //Open page based on seeding
  if (seed == ''){
    if (setValue == 'any'){
      window.open('any.html','modal');
    }
  }
  else {
    if (set == 'a'){
      sessionStorage.setItem('aSeed', seed);
      window.open('any.html');
    }
    if (set == 'f'){
      sessionStorage.setItem('fSeed', seed);
    }
  }
}
