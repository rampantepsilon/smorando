
  var seed = [];
  var moonlist = "";
  var moonlist2 = "";
  var moonlist3 = "";
  var moonlist4 = "";
  var hash = "null";
  var moonCount = 0;

  //Seed Comparision Variables
  var set = 'a'; //Denotes Any%
  var verSeedHash = "201d"; //Hash is [Version][Dev/Full]

  var Base64 = require('js-base64').Base64;

  function moonTotal(id){
    var checkBox = document.getElementById(id);
    var count = document.getElementById('moonCount');
    if (checkBox.checked == true){
      if (id == 'ckm2' || id == 'lakm1' || id == 'wkm2' || id == 'mkm1' || id == 'lukm3' || id == 'rkm1' || id == 'bkm4'){
        moonCount += 3;
      } else {
        moonCount += 1;
      }
      count.innerHTML = moonCount + " out of 124 moons";
    } else {
      if (id == 'ckm2' || id == 'lakm1' || id == 'wkm2' || id == 'mkm1' || id == 'lukm3' || id == 'rmk1' || id == 'bkm4'){
        moonCount -= 3;
      } else {
        moonCount -= 1;
      }
      count.innerHTML = moonCount + " out of 124 moons";
    }
  }

  function clear(){
    var a = sessionStorage.getItem('aSeed');
    document.getElementById('seedHash').value = a;
    generateSeed();
  };

  function copySeed(){
    var copyText = document.getElementById("seedHash");
    copyText.select();
    document.execCommand("copy");
  };

  function generateSeed(){
      moonlist = "";
      moonlist2 = "";
      moonlist3 = "";
      moonlist4 = "";
      hash = document.getElementById("seedHash").value;

      //Setup Lists
      var cascadeList = "<b><u><a href='https://www.mariowiki.com/List_of_Power_Moons_in_the_Cascade_Kingdom' target='_blank'>Cascade Kingdom<a></u></b><br><input type='checkbox' id='ckm1' onclick='moonTotal(this.id)'>" + myObj.cascade[15] + "<br><input type='checkbox' id='ckm2' onclick='moonTotal(this.id)'>" + myObj.cascade[16] + "<br>";
      var sandList = "<br><b><u><a href='https://www.mariowiki.com/List_of_Power_Moons_in_the_Sand_Kingdom' target='_blank'>Sand Kingdom</a></u></b><br>";
      var lakeList = "<br><b><u><a href='https://www.mariowiki.com/List_of_Power_Moons_in_the_Lake_Kingdom' target='_blank'>Lake Kingdom</a></u></b><br><input type='checkbox' id='lakm1' onclick='moonTotal(this.id)'>" + myObj.lake[17] + "<br>";
      var woodList = "<b><u><a href='https://www.mariowiki.com/List_of_Power_Moons_in_the_Wooded_Kingdom' target='_blank'>Wooded Kingdom</a></u></b><br><input type='checkbox' id='wkm1' onclick='moonTotal(this.id)'>" + myObj.wooded[15] + "<br><input type='checkbox' id='wkm2' onclick='moonTotal(this.id)'>" + myObj.wooded[16] + "<br>";
      var lostList = "<br><b><u><a href='https://www.mariowiki.com/List_of_Power_Moons_in_the_Lost_Kingdom' target='_blank'>Lost Kingdom</a></u></b><br>";
      var metroList = "<b><u><a href='https://www.mariowiki.com/List_of_Power_Moons_in_the_Metro_Kingdom' target='_blank'>Metro Kingdom</a></u></b><br><input type='checkbox' id='mkm1' onclick='moonTotal(this.id)'>" + myObj.metro[32] + "<br>";
      var snowList = "<br><b><u><a href='https://www.mariowiki.com/List_of_Power_Moons_in_the_Snow_Kingdom' target='_blank'>Snow Kingdom</a></u></b><br>";
      var seasideList = "<b><u><a href='https://www.mariowiki.com/List_of_Power_Moons_in_the_Seaside_Kingdom' target='_blank'>Seaside Kingdom</a></u></b><br>";
      var luncheonList = "<br><b><u><a href='https://www.mariowiki.com/List_of_Power_Moons_in_the_Luncheon_Kingdom' target='_blank'>Luncheon Kingdom</a></u></b><br><input type='checkbox' id='lukm1' onclick='moonTotal(this.id)'>" + myObj.luncheon[24] + "<br><input type='checkbox' id='lukm2' onclick='moonTotal(this.id)'>" + myObj.luncheon[25] + "<br><input type='checkbox' id='lukm3' onclick='moonTotal(this.id)'>" + myObj.luncheon[26] + "<br>";
      var ruinedList = "<br><b><u><a href='https://www.mariowiki.com/List_of_Power_Moons_in_the_Ruined_Kingdom' target='_blank'>Ruined Kingdom</a></u></b></br><input type='checkbox' id='rkm1' onclick='moonTotal(this.id)'>" + myObj.ruined[0] + "<br>";
      var bowserList = "<br><b><u><a href='https://www.mariowiki.com/List_of_Power_Moons_in_Bowser&apos;s_Kingdom' target='_blank'>Bowser's Kingdom</a></u></b><br><input type='checkbox' id='bkm1' onclick='moonTotal(this.id)'>" + myObj.bowser[18] + "<br><input type='checkbox' id='bkm2' onclick='moonTotal(this.id)'>" + myObj.bowser[19] + "<br><input type='checkbox' id='bkm3' onclick='moonTotal(this.id)'>" + myObj.bowser[20] + "<br><input type='checkbox' id='bkm4' onclick='moonTotal(this.id)'>" + myObj.bowser[21] + "<br>";

      //Determine Moons Based On Hash/Randomize
      if (hash == ''){
        //Add Any% Tag
        seed[0] = set;

        //Cascade Randomizer
        for (a=0; a < 1; a++){
          var aa = Math.floor(Math.random() * 15);
          cascadeList = cascadeList + "<input type='checkbox' id='ckm3' onclick='moonTotal(this.id)'>" + myObj.cascade[aa] + "<br>";
          var aSeed = aa;
          seed[1] = aSeed.toString(36);
        }

        //Sand Randomizer
        var sandArr = [];
        while(sandArr.length < 16){
          var ba = Math.floor(Math.random() * 26);
          if (sandArr.indexOf(ba) === -1) sandArr.push(ba);
        }
        sandArr.sort(function(a, b){return a-b});
        for (bb=0; bb < 16; bb++){
          var sandVal = bb+1;
          var sandCheck = "<input type='checkbox' id='skm" + sandVal +"' onclick='moonTotal(this.id)'>";
          sandList = sandList + sandCheck + myObj.sand[sandArr[bb]] + "<br>";
        }
        for (bc=0; bc < 16; bc++){
          var bd = bc+2;
          seed[bd] = (sandArr[bc]).toString(36);
        }

        //Lake Randomizer
        var lakeArr = [];
        while(lakeArr.length < 5){
          var ca = Math.floor(Math.random() * 17);
          if (lakeArr.indexOf(ca) === -1) lakeArr.push(ca);
        }
        lakeArr.sort(function(a, b){return a-b});
        for (c = 0; c < 5; c++){
          var lakeVal = c+2;
          var lakeCheck = "<input type='checkbox' id='lakm" + lakeVal + "' onclick='moonTotal(this.id)'>";
          lakeList = lakeList + lakeCheck + myObj.lake[lakeArr[c]] + "<br>";
        }
        for (cc = 0; cc < 5; cc++){
          var cd = cc+18;
          seed[cd] = (lakeArr[cc]).toString(36);
        }

        //Wooded Randomizer
        var woodArr = [];
        while(woodArr.length < 12){
          var da = Math.floor(Math.random() * 15);
          if (woodArr.indexOf(da) === -1) woodArr.push(da);
        }
        woodArr.sort(function(a, b){return a-b});
        for (d = 0; d < 12; d++){
          var woodVal = d+3;
          var woodCheck = "<input type='checkbox' id='wkm" + woodVal + "' onclick='moonTotal(this.id)'>";
          woodList = woodList + woodCheck + myObj.wooded[woodArr[d]] + "<br>";
        }
        for (dc = 0; dc < 12; dc++){
          var dd = dc+23;
          seed[dd] = (woodArr[dc]).toString(36);
        }

        //Lost Randomizer
        var lostArr = [];
        while(lostArr.length < 10){
          var ea = Math.floor(Math.random() * 20);
          if (lostArr.indexOf(ea) === -1) lostArr.push(ea);
        }
        lostArr.sort(function(a, b){return a-b});
        for (e = 0; e < 10; e++){
          var lostval = e+1;
          var lostCheck = "<input type='checkbox' id='lkm" + lostval +"' onclick='moonTotal(this.id)'>";
          lostList = lostList + lostCheck + myObj.lost[lostArr[e]] + "<br>";
        }
        for (ec = 0; ec < 10; ec++){
          var ed = ec+35;
          seed[ed] = (lostArr[ec]).toString(36);
        }

        //Metro Randomizer
        var metroArr = [];
        var metroDump = [];
        while(metroArr.length < 17){
          var fa = Math.floor(Math.random() * 32);
          if (metroArr.indexOf(fa) === -1){
            if (fa == 19 && metroArr.indexOf(18) !== -1){
              metroArr.push(fa);
            } else if (fa == 19){
              metroDump.push(fa)
            } else {
              metroArr.push(fa);
            }
          }
        }
        metroArr.sort(function(a, b){return a-b});
        for (f = 0; f < 17; f++){
          var metroVal = f+2;
          var metroCheck = "<input type='checkbox' id='mkm" + metroVal +"' onclick='moonTotal(this.id)'>";
          metroList = metroList + metroCheck + myObj.metro[metroArr[f]] + "<br>";
        }
        for (fc = 0; fc < 17; fc++){
          var fd = fc+45;
          seed[fd] = (metroArr[fc]).toString(36);
        }

        //Snow Randomizer
        var snowArr = [];
        while(snowArr.length < 10){
          var ga = Math.floor(Math.random() * 12);
          if (snowArr.indexOf(ga) === -1) snowArr.push(ga);
        }
        snowArr.sort(function(a, b){return a-b});
        for (g = 0; g < 10; g++){
          var snowVal = g+1;
          var snowCheck = "<input type='checkbox' id='snkm" + snowVal +"' onclick='moonTotal(this.id)'>";
          snowList += snowCheck + myObj.snow[snowArr[g]] + "<br>";
        }
        for (gc = 0; gc < 10; gc++){
          var gd = gc+62;
          seed[gd] = (snowArr[gc]).toString(36);
        }

        //Seaside Randomizer
        var seasideArr = [];
        while(seasideArr.length < 10){
          var ha = Math.floor(Math.random() * 26);
          if (seasideArr.indexOf(ha) === -1) seasideArr.push(ha);
        }
        seasideArr.sort(function(a, b){return a-b});
        for (h = 0; h < 10; h++){
          var seasideVal = h+1;
          var seasideCheck = "<input type='checkbox' id='sekm" + seasideVal +"' onclick='moonTotal(this.id)'>";
          seasideList += seasideCheck + myObj.seaside[seasideArr[h]] + "<br>";
        }
        for (hc = 0; hc < 10; hc++){
          var hd = hc+72;
          seed[hd] = (seasideArr[hc]).toString(36);
        }

        //Luncheon Randomizer
        var luncheonArr = [];
        while(luncheonArr.length < 13){
          var ia = Math.floor(Math.random() * 24);
          if (luncheonArr.indexOf(ia) === -1) luncheonArr.push(ia);
        }
        luncheonArr.sort(function(a, b){return a-b});
        for (i = 0; i < 13; i++){
          var luncheonVal = i+4;
          var luncheonCheck = "<input type='checkbox' id='lukm" + luncheonVal +"' onclick='moonTotal(this.id)'>";
          luncheonList += luncheonCheck + myObj.luncheon[luncheonArr[i]] + "<br>";
        }
        for (ic = 0; ic < 13; ic++){
          var id = ic+82;
          seed[id] = (luncheonArr[ic]).toString(36);
        }

        //Bowser Randomizer
        var bowserArr = [];
        while(bowserArr.length < 2){
          var ja = Math.floor(Math.random() * 18);
          if (bowserArr.indexOf(ja) === -1) bowserArr.push(ja);
        }
        bowserArr.sort(function(a, b){return a-b});
        for (j = 0; j < 2; j++){
          var bowserVal = j+5;
          var bowserCheck = "<input type='checkbox' id='bkm" + bowserVal +"' onclick='moonTotal(this.id)'>";
          bowserList += bowserCheck + myObj.bowser[bowserArr[j]] + "<br>";
        }
        for (jc = 0; jc < 2; jc++){
          var jd = jc + 95;
          seed[jd] = (bowserArr[jc]).toString(36);
        }

        //Add Version Key
        seed[97] = verSeedHash;

        //Add Lists to moonlist
        moonlist += cascadeList + sandList + lakeList;
        moonlist2 += woodList + lostList;
        moonlist3 += metroList + snowList;
        moonlist4 += seasideList + luncheonList + ruinedList + bowserList;

        //Encode seed
        var encodedSeed = Base64.encode(seed.join(""));

        //Set Outline
        $("#list1").css("border-style", "solid");
        $("#list2").css("border-style", "solid");
        $("#list3").css("border-style", "solid");
        $("#list4").css("border-style", "solid");

        //Add moons to viewpoint
        document.getElementById("moons").innerHTML = moonlist;
        document.getElementById("moons2").innerHTML = moonlist2;
        document.getElementById("moons3").innerHTML = moonlist3 + "<br><br>";
        document.getElementById("moons4").innerHTML = moonlist4 + "<br><br>";

        //Add top information
        document.getElementById('moonCount').innerHTML = '0 out of 124 moons';
        document.getElementById('disclaimer').innerHTML = '<font color="red">Red moons</font> = Required | <font color="blue">Blue moons</font> = Sub-Area | <font color="purple">Purple moons</font> = Shop/Slots<br>Click the Kingdom Name for list of moons.';

        //Add seed to textbox
        document.getElementById('seedHash').value = encodedSeed;
      }
      else{
        //Decode Hash
        var decodedSeed = Base64.decode(hash);

        var moons = decodedSeed.split("");
        for (i = 0; i < moons.length - 4; i++){
          moons[i] = parseInt(moons[i], 36);
        }

        var setCheck = (moons[0].toString(36));
        var versionCheck = moons[97] + moons[98] + moons[99] + moons[100];

        var cs = "<input type='checkbox' id='";
        var ce = "' onclick='moonTotal(this.id)'>";

        //Version Check
        if (versionCheck == verSeedHash){
          //Add Moons to Lists
          cascadeList += cs + 0 + ce + myObj.cascade[moons[1]] + "<br>";
          for (az = 2; az < 18; az++){
            sandList += cs + az + ce + myObj.sand[moons[az]] + "<br>";
          }
          for (bz = 18; bz < 23; bz++){
            lakeList += cs + bz + ce + myObj.lake[moons[bz]] + "<br>";
          }
          for (cz = 23; cz < 35; cz++){
            woodList += cs + cz + ce + myObj.wooded[moons[cz]] + "<br>";
          }
          for (dz = 35; dz < 45; dz++){
            lostList += cs + dz + ce + myObj.lost[moons[dz]] + "<br>";
          }
          for (ez = 45; ez < 62; ez++){
            metroList += cs + ez + ce + myObj.metro[moons[ez]] + "<br>";
          }
          for (fz = 62; fz < 72; fz++){
            snowList += cs + fz + ce + myObj.snow[moons[fz]] + "<br>";
          }
          for (gz = 72; gz < 82; gz++){
            seasideList += cs + gz + ce + myObj.seaside[moons[gz]] + "<br>";
          }
          for (hz = 82; hz < 95; hz++){
            luncheonList += cs + hz + ce + myObj.luncheon[moons[hz]] + "<br>";
          }
          for (iz = 95; iz < 97; iz++){
            bowserList += cs + iz + ce + myObj.bowser[moons[iz]] + "<br>";
          }

          //Add Lists to moonlist
          moonlist += cascadeList + sandList + lakeList;
          moonlist2 += woodList + lostList;
          moonlist3 += metroList + snowList;
          moonlist4 += seasideList + luncheonList + ruinedList + bowserList;
        }

        //Set Outline
        $("#list1").css("border-style", "solid");
        $("#list2").css("border-style", "solid");
        $("#list3").css("border-style", "solid");
        $("#list4").css("border-style", "solid");

        //Add moons to viewpoint
        document.getElementById("moons").innerHTML = moonlist;
        document.getElementById("moons2").innerHTML = moonlist2;
        document.getElementById("moons3").innerHTML = moonlist3 + "<br><br>";
        document.getElementById("moons4").innerHTML = moonlist4 + "<br><br>";

        //Add top information
        document.getElementById('moonCount').innerHTML = '0 out of 124 moons';
        document.getElementById('disclaimer').innerHTML = '<font color="red">Red moons</font> = Required | <font color="blue">Blue moons</font> = Sub-Area | <font color="purple">Purple moons</font> = Shop/Slots<br>Click the Kingdom Name for list of moons.';

        //Add seed to textbox
        document.getElementById('seedHash').innerHTML = hash;
      }
  };
