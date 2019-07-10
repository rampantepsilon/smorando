
  var seed = [];
  var moonlist = "";
  var moonlist2 = "";
  var moonlist3 = "";
  var moonlist4 = "";
  var hash = "null";
  var moonCount = 0;

  //Seed Comparision Variables
  var set = 'a'; //Denotes Any%
  var verSeedHash = "210f"; //Hash is [Version][Dev/Full]

  function moonTotal(id){
    var checkBox = document.getElementById(id);
    var count = document.getElementById('moonCount');
    if (!id.includes('Marked'))
    {
      if (id == 'ckm2' || id == 'lakm1' || id == 'wkm2' || id == 'mkm1' || id == 'lukm3' || id == 'rkm1' || id == 'bkm4'){
        moonCount += 3;
      } else {
        moonCount += 1;
      }
      count.innerHTML = moonCount + " out of 124 moons";
    } else {
      if (id == 'ckm2Marked' || id == 'lakm1Marked' || id == 'wkm2Marked' || id == 'mkm1Marked' || id == 'lukm3Marked' || id == 'rkm1Marked' || id == 'bkm4Marked'){
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

  function highlight(id){
    moonTotal(id);
    if (id.includes('Marked')){
      document.getElementById(id).style.backgroundColor = 'rgba(0,0,0,0)'
      document.getElementById(id).style.color = 'black';
      document.getElementById(id).style.textShadow = 'rgba(0,0,0,0) 0px 0px';
      document.getElementById(id).id = id.replace('Marked', '');
    }
    else{
      document.getElementById(id).style.backgroundColor = 'rgb(52,255,38)';
      document.getElementById(id).style.textShadow = 'rgb(255,255,255) 1px 1px';
      document.getElementById(id).id = id.concat('Marked');
    }
  }

  function generateSeed(){
      moonlist = "";
      moonlist2 = "";
      moonlist3 = "";
      moonlist4 = "";
      hash = document.getElementById("seedHash").value;

      //Setup Lists
      var cascadeList = "<b><u><a href='https://www.mariowiki.com/List_of_Power_Moons_in_the_Cascade_Kingdom' target='_blank'>Cascade Kingdom<a></u></b><div id='ckm1' onclick='highlight(this.id)'>" + myObj.cascade[15] + "</div><div id='ckm2' onclick='highlight(this.id)'>" + myObj.cascade[16] + "</div>";
      var sandList = "<br><b><u><a href='https://www.mariowiki.com/List_of_Power_Moons_in_the_Sand_Kingdom' target='_blank'>Sand Kingdom</a></u></b>";
      var lakeList = "<br><b><u><a href='https://www.mariowiki.com/List_of_Power_Moons_in_the_Lake_Kingdom' target='_blank'>Lake Kingdom</a></u></b><div id='lakm1' onclick='highlight(this.id)'>" + myObj.lake[17] + "</div>";
      var woodList = "<b><u><a href='https://www.mariowiki.com/List_of_Power_Moons_in_the_Wooded_Kingdom' target='_blank'>Wooded Kingdom</a></u></b><div id='wkm1' onclick='highlight(this.id)'>" + myObj.wooded[15] + "</div><div id='wkm2' onclick='highlight(this.id)'>" + myObj.wooded[16] + "</div>";
      var lostList = "<br><b><u><a href='https://www.mariowiki.com/List_of_Power_Moons_in_the_Lost_Kingdom' target='_blank'>Lost Kingdom</a></u></b>";
      var metroList = "<b><u><a href='https://www.mariowiki.com/List_of_Power_Moons_in_the_Metro_Kingdom' target='_blank'>Metro Kingdom</a></u></b><div id='mkm1' onclick='highlight(this.id)'>" + myObj.metro[32] + "</div>";
      var snowList = "<br><b><u><a href='https://www.mariowiki.com/List_of_Power_Moons_in_the_Snow_Kingdom' target='_blank'>Snow Kingdom</a></u></b>";
      var seasideList = "<b><u><a href='https://www.mariowiki.com/List_of_Power_Moons_in_the_Seaside_Kingdom' target='_blank'>Seaside Kingdom</a></u></b>";
      var luncheonList = "<br><b><u><a href='https://www.mariowiki.com/List_of_Power_Moons_in_the_Luncheon_Kingdom' target='_blank'>Luncheon Kingdom</a></u></b><div id='lukm1' onclick='highlight(this.id)'>" + myObj.luncheon[24] + "</div><div id='lukm2' onclick='highlight(this.id)'>" + myObj.luncheon[25] + "</div><div id='lukm3' onclick='highlight(this.id)'>" + myObj.luncheon[26] + "</div>";
      var ruinedList = "<br><b><u><a href='https://www.mariowiki.com/List_of_Power_Moons_in_the_Ruined_Kingdom' target='_blank'>Ruined Kingdom</a></u></b><div id='rkm1' onclick='highlight(this.id)'>" + myObj.ruined[0] + "</div>";
      var bowserList = "<br><b><u><a href='https://www.mariowiki.com/List_of_Power_Moons_in_Bowser&apos;s_Kingdom' target='_blank'>Bowser's Kingdom</a></u></b><div id='bkm1' onclick='highlight(this.id)'>" + myObj.bowser[18] + "</div><div id='bkm2' onclick='highlight(this.id)'>" + myObj.bowser[19] + "</div><div id='bkm3' onclick='highlight(this.id)'>" + myObj.bowser[20] + "</div><div id='bkm4' onclick='highlight(this.id)'>" + myObj.bowser[21] + "</div>";

      //Determine Moons Based On Hash/Randomize
      if (hash == ''){
        //Add Any% Tag
        seed[0] = set;

        //Cascade Randomizer
        for (a=0; a < 1; a++){
          var aa = Math.floor(Math.random() * 15);
          cascadeList = cascadeList + "<div id='ckm3' onclick='highlight(this.id)'>" + myObj.cascade[aa] + "</div>";
          var aSeed = aa;
          seed[1] = String.fromCharCode(aSeed+33);
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
          var sandCheck = "<div id='skm" + sandVal +"' onclick='highlight(this.id)'>";
          sandList = sandList + sandCheck + myObj.sand[sandArr[bb]] + "</div>";
        }
        for (bc=0; bc < 16; bc++){
          var bd = bc+2;
          seed[bd] = String.fromCharCode(sandArr[bc]+33);
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
          var lakeCheck = "<div id='lakm" + lakeVal + "' onclick='highlight(this.id)'>";
          lakeList = lakeList + lakeCheck + myObj.lake[lakeArr[c]] + "</div>";
        }
        for (cc = 0; cc < 5; cc++){
          var cd = cc+18;
          seed[cd] = String.fromCharCode(lakeArr[cc]+33);
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
          var woodCheck = "<div id='wkm" + woodVal + "' onclick='highlight(this.id)'>";
          woodList = woodList + woodCheck + myObj.wooded[woodArr[d]] + "</div>";
        }
        for (dc = 0; dc < 12; dc++){
          var dd = dc+23;
          seed[dd] = String.fromCharCode(woodArr[dc]+33);
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
          var lostCheck = "<div id='lkm" + lostval +"' onclick='highlight(this.id)'>";
          lostList = lostList + lostCheck + myObj.lost[lostArr[e]] + "</div>";
        }
        for (ec = 0; ec < 10; ec++){
          var ed = ec+35;
          seed[ed] = String.fromCharCode(lostArr[ec]+33);
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
          var metroCheck = "<div id='mkm" + metroVal +"' onclick='highlight(this.id)'>";
          metroList = metroList + metroCheck + myObj.metro[metroArr[f]] + "</div>";
        }
        for (fc = 0; fc < 17; fc++){
          var fd = fc+45;
          seed[fd] = String.fromCharCode(metroArr[fc]+33);
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
          var snowCheck = "<div id='snkm" + snowVal +"' onclick='highlight(this.id)'>";
          snowList += snowCheck + myObj.snow[snowArr[g]] + "</div>";
        }
        for (gc = 0; gc < 10; gc++){
          var gd = gc+62;
          seed[gd] = String.fromCharCode(snowArr[gc]+33);
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
          var seasideCheck = "<div id='sekm" + seasideVal +"' onclick='highlight(this.id)'>";
          seasideList += seasideCheck + myObj.seaside[seasideArr[h]] + "</div>";
        }
        for (hc = 0; hc < 10; hc++){
          var hd = hc+72;
          seed[hd] = String.fromCharCode(seasideArr[hc]+33);
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
          var luncheonCheck = "<div id='lukm" + luncheonVal +"' onclick='highlight(this.id)'>";
          luncheonList += luncheonCheck + myObj.luncheon[luncheonArr[i]] + "</div>";
        }
        for (ic = 0; ic < 13; ic++){
          var id = ic+82;
          seed[id] = String.fromCharCode(luncheonArr[ic]+33);
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
          var bowserCheck = "<div id='bkm" + bowserVal +"' onclick='highlight(this.id)'>";
          bowserList += bowserCheck + myObj.bowser[bowserArr[j]] + "</div>";
        }
        for (jc = 0; jc < 2; jc++){
          var jd = jc + 95;
          seed[jd] = String.fromCharCode(bowserArr[jc]+33);
        }

        //Add Version Key
        seed[97] = verSeedHash;

        //Add Lists to moonlist
        moonlist += cascadeList + sandList + lakeList;
        moonlist2 += woodList + lostList;
        moonlist3 += metroList + snowList;
        moonlist4 += seasideList + luncheonList + ruinedList + bowserList;

        //Encode seed
        var encodedSeed = seed.join("");

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
        var moons = hash.split("");
        for (i = 1; i < moons.length - 4; i++){
          moons[i] = (moons[i].charCodeAt()-33);
        }

        var setCheck = moons[0];
        var versionCheck = moons[97] + moons[98] + moons[99] + moons[100];

        var cs = "<div id='";
        var ce = "' onclick='highlight(this.id)'>";

        //Version Check
        if (versionCheck == verSeedHash){
          //Add Moons to Lists
          cascadeList += cs + 0 + ce + myObj.cascade[moons[1]] + "</div>";
          for (az = 2; az < 18; az++){
            sandList += cs + az + ce + myObj.sand[moons[az]] + "</div>";
          }
          for (bz = 18; bz < 23; bz++){
            lakeList += cs + bz + ce + myObj.lake[moons[bz]] + "</div>";
          }
          for (cz = 23; cz < 35; cz++){
            woodList += cs + cz + ce + myObj.wooded[moons[cz]] + "</div>";
          }
          for (dz = 35; dz < 45; dz++){
            lostList += cs + dz + ce + myObj.lost[moons[dz]] + "</div>";
          }
          for (ez = 45; ez < 62; ez++){
            metroList += cs + ez + ce + myObj.metro[moons[ez]] + "</div>";
          }
          for (fz = 62; fz < 72; fz++){
            snowList += cs + fz + ce + myObj.snow[moons[fz]] + "</div>";
          }
          for (gz = 72; gz < 82; gz++){
            seasideList += cs + gz + ce + myObj.seaside[moons[gz]] + "</div>";
          }
          for (hz = 82; hz < 95; hz++){
            luncheonList += cs + hz + ce + myObj.luncheon[moons[hz]] + "</div>";
          }
          for (iz = 95; iz < 97; iz++){
            bowserList += cs + iz + ce + myObj.bowser[moons[iz]] + "</div>";
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
