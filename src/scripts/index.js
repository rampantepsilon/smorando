var setValue = 'any';
var verHash = '130d'
var wrongSeed = "<font color='red'>Invalid Seed. Please use a proper v1.3.0 seed.";

var Base64 = require('js-base64').Base64;

function pasteSeed(){
  var pasteText = document.getElementById('seed');
  pasteText.select();
  document.execCommand('paste');
  document.getElementById('error').innerHTML = '';
}

function setSelect(set){
  setValue = set;
  document.getElementById('seed').value = '';
  document.getElementById('error').innerHTML = '';
  //document.getElementById('selected').innerHTML = setValue;
}

function generateSeed(){
  //Get Randomizer Information
  var seed = document.getElementById('seed').value;
  //var lengthValue = document.querySelector('#length:checked').value;

  //Open page based on seeding
  if (seed == ''){
    if (setValue == 'any'){
      window.open('any.html', '', 'width=800, height=720');
    }
    else if (setValue == 'festival'){
      window.open('festival.html','','width=800, height=720');
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
        window.open('any.html', '', 'width=800, height=720');
      }
      else {
        document.getElementById('error').innerHTML = wrongSeed;
      }
    }
    if (set == 'f'){
      var hash = moons[45] + moons[46] + moons[47] + moons[48];
      if (hash == verHash){
        sessionStorage.setItem('fSeed', seed);
        window.open('festival.html','','width=800, height=720')
      }
      else {
        document.getElementById('error').innerHTML = wrongSeed;
      }
    }
  }
}
