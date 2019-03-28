
  var seed = [];
  var moonlist = "";
  var hash = "null";
  var check = "<input type='checkbox'>";

  //Seed Comparision Variables
  var verSeedHash = "112f";
  var wrongSeed = "<br><br>Invalid Seed<br>Please use a proper v1.1.2 seed.";

  var Base64 = require('js-base64').Base64;

  function clear(){
    document.getElementById("seedHash").value = "";
  };

  function copySeed(){
    var copyText = document.getElementById("seedHash");
    copyText.select();
    document.execCommand("copy");
  };

  function pasteSeed(){
    var pasteText = document.getElementById("seedHash");
    pasteText.select();
    document.execCommand("paste");
    generateSeed();
  }

  function generateSeed(){
      moonlist = "<br>"
      hash = document.getElementById("seedHash").value;

      //Setup Lists
      var cascadeList = "<br><b><u>Cascade Kingdom</u></b><br><input type='checkbox'>" + myObj.cascade[15] + "<br><input type='checkbox'>" + myObj.cascade[16] + "<br>";
      var sandList = "<br><b><u>Sand Kingdom</u></b><br>";
      var lakeList = "<br><b><u>Lake Kingdom</u></b><br><input type='checkbox'>" + myObj.lake[16] + "<br>";
      var woodList = "<br><b><u>Wooded Kingdom</u></b><br><input type='checkbox'>" + myObj.wooded[15] + "<br><input type='checkbox'>" + myObj.wooded[16] + "<br>";
      var lostList = "<br><b><u>Lost Kingdom</u></b><br>";
      var metroList = "<br><b><u>Metro Kingdom</u></b><br><input type='checkbox'>" + myObj.metro[35] + "<br>";
      var snowList = "<br><b><u>Snow Kingdom</u></b><br>";
      var seasideList = "<br><b><u>Seaside Kingdom</u></b><br>";
      var luncheonList = "<br><b><u>Luncheon Kingdom</u></b><br>" + check + myObj.luncheon[29] + "<br>" + check + myObj.luncheon[30] + "<br>" + check + myObj.luncheon[31] + "<br>";
      var ruinedList = "<br><b><u>Ruined Kingdom</u></b></br>" + check + myObj.ruined[0] + "<br>";
      var bowserList = "<br><b><u>Bowser's Kingdom</u></b><br>" + check + myObj.bowser[23] + "<br>" + check + myObj.bowser[24] + "<br>" + check + myObj.bowser[25] + "<br>" + check + myObj.bowser[26] + "<br>";

      //Determine Moons Based On Hash/Randomize
      if (hash == ''){
        //Cascade Randomizer
        for (a=0; a < 1; a++){
          var aa = Math.floor(Math.random() * 15);
          cascadeList = cascadeList + check + myObj.cascade[aa] + "<br>";
          var aSeed = aa;
          seed[0] = aSeed.toString(36);
        }

        //Sand Randomizer
        var sandArr = [];
        while(sandArr.length < 16){
          var ba = Math.floor(Math.random() * 27);
          if (sandArr.indexOf(ba) === -1) sandArr.push(ba);
        }
        for (bb=0; bb < 16; bb++){
          sandList = sandList + check + myObj.sand[sandArr[bb]] + "<br>";
        }
        for (bc=0; bc < 16; bc++){
          var bd = bc+1;
          seed[bd] = (sandArr[bc]).toString(36);
        }

        //Lake Randomizer
        var lakeArr = [];
        while(lakeArr.length < 5){
          var ca = Math.floor(Math.random() * 16);
          if (lakeArr.indexOf(ca) === -1) lakeArr.push(ca);
        }
        for (c = 0; c < 5; c++){
          lakeList = lakeList + check + myObj.lake[lakeArr[c]] + "<br>";
        }
        for (cc = 0; cc < 5; cc++){
          var cd = cc+17;
          seed[cd] = (lakeArr[cc]).toString(36);
        }

        //Wooded Randomizer
        var woodArr = [];
        while(woodArr.length < 12){
          var da = Math.floor(Math.random() * 15);
          if (woodArr.indexOf(da) === -1) woodArr.push(da);
        }
        for (d = 0; d < 12; d++){
          woodList = woodList + check + myObj.wooded[woodArr[d]] + "<br>";
        }
        for (dc = 0; dc < 12; dc++){
          var dd = dc+22;
          seed[dd] = (woodArr[dc]).toString(36);
        }

        //Lost Randomizer
        var lostArr = [];
        while(lostArr.length < 10){
          var ea = Math.floor(Math.random() * 20);
          if (lostArr.indexOf(ea) === -1) lostArr.push(ea);
        }
        for (e = 0; e < 10; e++){
          lostList = lostList + check + myObj.lost[lostArr[e]] + "<br>";
        }
        for (ec = 0; ec < 10; ec++){
          var ed = ec+34;
          seed[ed] = (lostArr[ec]).toString(36);
        }

        //Metro Randomizer
        var metroArr = [];
        while(metroArr.length < 17){
          var fa = Math.floor(Math.random() * 35);
          if (metroArr.indexOf(fa) === -1) metroArr.push(fa);
        }
        for (f = 0; f < 17; f++){
          metroList = metroList + check + myObj.metro[metroArr[f]] + "<br>";
        }
        for (fc = 0; fc < 17; fc++){
          var fd = fc+44;
          seed[fd] = (metroArr[fc]).toString(36);
        }

        //Snow Randomizer
        var snowArr = [];
        while(snowArr.length < 10){
          var ga = Math.floor(Math.random() * 13);
          if (snowArr.indexOf(ga) === -1) snowArr.push(ga);
        }
        for (g = 0; g < 10; g++){
          snowList += check + myObj.snow[snowArr[g]] + "<br>";
        }
        for (gc = 0; gc < 10; gc++){
          var gd = gc+61;
          seed[gd] = (snowArr[gc]).toString(36);
        }

        //Seaside Randomizer
        var seasideArr = [];
        while(seasideArr.length < 10){
          var ha = Math.floor(Math.random() * 36);
          if (seasideArr.indexOf(ha) === -1) seasideArr.push(ha);
        }
        for (h = 0; h < 10; h++){
          seasideList += check + myObj.seaside[seasideArr[h]] + "<br>";
        }
        for (hc = 0; hc < 10; hc++){
          var hd = hc+71;
          seed[hd] = (seasideArr[hc]).toString(36);
        }

        //Luncheon Randomizer
        var luncheonArr = [];
        while(luncheonArr.length < 13){
          var ia = Math.floor(Math.random() * 29);
          if (luncheonArr.indexOf(ia) === -1) luncheonArr.push(ia);
        }
        for (i = 0; i < 13; i++){
          luncheonList += check + myObj.luncheon[luncheonArr[i]] + "<br>";
        }
        for (ic = 0; ic < 13; ic++){
          var id = ic+81;
          seed[id] = (luncheonArr[ic]).toString(36);
        }

        //Bowser Randomizer
        var bowserArr = [];
        while(bowserArr.length < 2){
          var ja = Math.floor(Math.random() * 23);
          if (bowserArr.indexOf(ja) === -1) bowserArr.push(ja);
        }
        for (j = 0; j < 2; j++){
          bowserList += check + myObj.bowser[bowserArr[j]] + "<br>";
        }
        for (jc = 0; jc < 2; jc++){
          var jd = jc + 94;
          seed[jd] = (bowserArr[jc]).toString(36);
        }

        //Add Version Keyy
        seed[96] = verSeedHash;

        //Add Lists to moonlist
        moonlist += cascadeList + sandList + lakeList + woodList + lostList + metroList + snowList + seasideList + luncheonList + ruinedList + bowserList;

        //Encode seed
        var encodedSeed = Base64.encode(seed.join(""));

        document.getElementById("moons").innerHTML = moonlist + "<br><br>";
        //document.getElementById('seed').innerHTML = hash;
        document.getElementById('seedHash').value = /*seed.join("").toUpperCase()*/encodedSeed;
      }
      else{
        //Decode Hash
        var decodedSeed = Base64.decode(hash);

        var moons = decodedSeed.split("");
        for (i = 0; i < moons.length - 4; i++){
          moons[i] = parseInt(moons[i], 36);
        }

        var versionCheck = moons[96] + moons[97] + moons[98] + moons[99]

        //Version Check
        if (versionCheck == verSeedHash){
          //Add Moons to Lists
          cascadeList += check + myObj.cascade[moons[0]] + "<br>";
          for (az = 1; az < 17; az++){
            sandList += check + myObj.sand[moons[az]] + "<br>";
          }
          for (bz = 17; bz < 22; bz++){
            lakeList += check + myObj.lake[moons[bz]] + "<br>";
          }
          for (cz = 22; cz < 34; cz++){
            woodList += check + myObj.wooded[moons[cz]] + "<br>";
          }
          for (dz = 34; dz < 44; dz++){
            lostList += check + myObj.lost[moons[dz]] + "<br>";
          }
          for (ez = 44; ez < 61; ez++){
            metroList += check + myObj.metro[moons[ez]] + "<br>";
          }
          for (fz = 61; fz < 71; fz++){
            snowList += check + myObj.snow[moons[fz]] + "<br>";
          }
          for (gz = 71; gz < 81; gz++){
            seasideList += check + myObj.seaside[moons[gz]] + "<br>";
          }
          for (hz = 81; hz < 94; hz++){
            luncheonList += check + myObj.luncheon[moons[hz]] + "<br>";
          }
          for (iz = 94; iz < 96; iz++){
            bowserList += check + myObj.bowser[moons[iz]] + "<br>";
          }

          //Add Lists to moonlist
          moonlist += cascadeList + sandList + lakeList + woodList + lostList + metroList + snowList + seasideList + luncheonList + ruinedList + bowserList;
        }
        else {
          moonlist = wrongSeed;
        }

        document.getElementById("moons").innerHTML = moonlist + "<br><br>";
        document.getElementById('seedHash').innerHTML = hash;
        //document.getElementById('seed').innerHTML = seed.join("").toUpperCase();
      }
  };
