
  var seed = [];
  var moonlist = "";
  var moonlist2 = "";
  var moonlist3 = "";
  var moonlist4 = "";
  var hash = "null";
  var moonCount = 0;
  var compatible = 0;

  //Seed Comparision Variables
  var set = 'w'; //Denotes Clips
  var verHash = version.compat[1]; //Hash is version.compat[location in version.js]

  function moonTotal(id){
    var checkBox = document.getElementById(id);
    var count = document.getElementById('moonCount');
    if (!id.includes('Marked'))
    {
      if (id == 'ckmm1' || id == 'sakmm1' || id == 'lakmm1' || id == 'wkmm1' || id == 'wkmm2' || id == 'mkmm1' || id == 'mkmm2' || id == 'snkmm1' || id == 'seakmm1' || id == 'lukmm1' || id == 'lukmm2' || id == 'rkm1' || id == 'bkmm1'){
        moonCount += 3;
      } else {
        moonCount += 1;
      }
      count.innerHTML = moonCount + " out of 124 moons";
    } else {
      if (id == 'ckmm1Marked' || id == 'sakmm1Marked' || id == 'lakmm1Marked' || id == 'wkmm1Marked' || id == 'wkmm2Marked' || id == 'mkmm1Marked' || id == 'mkmm2Marked' || id == 'snkmm1Marked' || id == 'seakmm1Marked' || id == 'lukmm1Marked' || id == 'lukmm2Marked' || id == 'rkm1Marked' || id == 'bkmm1Marked'){
        moonCount -= 3;
      } else {
        moonCount -= 1;
      }
      count.innerHTML = moonCount + " out of 124 moons";
    }
  }

  function clear(){
    var a = sessionStorage.getItem('wSeed');
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
      var cascadeList = "<b><u><a href='https://www.mariowiki.com/List_of_Power_Moons_in_the_Cascade_Kingdom' target='_blank'>Cascade Kingdom<a></u></b><div id='ckr1' onclick='highlight(this.id)'>" + myObj.cascade[15] + "</div><div id='ckmm1' onclick='highlight(this.id)'>" + myObj.cascade[16] + "</div>";
      var sandList = "<br><b><u><a href='https://www.mariowiki.com/List_of_Power_Moons_in_the_Sand_Kingdom' target='_blank'>Sand Kingdom</a></u></b><div id='sakr1' onclick='highlight(this.id)'><font color='red'>" + myObj.sand[36] + "</div><div id='sakr2' onclick='highlight(this.id)'>" + myObj.sand[37] + "</font></div><div id='sakr3' onclick='highlight(this.id)'>" + myObj.sand[38] + "</div><div id='sakmm1' onclick='highlight(this.id)'>" + myObj.sand[39] + "</div>";
      var lakeList = "<br><b><u><a href='https://www.mariowiki.com/List_of_Power_Moons_in_the_Lake_Kingdom' target='_blank'>Lake Kingdom</a></u></b><div id='lakmm1' onclick='highlight(this.id)'>" + myObj.lake[17] + "</div>";
      var woodList = "<b><u><a href='https://www.mariowiki.com/List_of_Power_Moons_in_the_Wooded_Kingdom' target='_blank'>Wooded Kingdom</a></u></b><div id='wkr1' onclick='highlight(this.id)'>" + myObj.wooded[28] + "</div><div id='wkmm1' onclick='highlight(this.id)'>" + myObj.wooded[29] + "</div><div id='wkr2' onclick='highlight(this.id)'>" + myObj.wooded[30] + "</div><div id='wkmm2' onclick='highlight(this.id)'>" + myObj.wooded[31] + "</div>";
      var lostList = "<br><b><u><a href='https://www.mariowiki.com/List_of_Power_Moons_in_the_Lost_Kingdom' target='_blank'>Lost Kingdom</a></u></b>";
      var metroList = "<b><u><a href='https://www.mariowiki.com/List_of_Power_Moons_in_the_Metro_Kingdom' target='_blank'>Metro Kingdom</a></u></b><div id='mkmm1' onclick='highlight(this.id)'>" + myObj.metro[33] + "</div><div id='mkr1' onclick='highlight(this.id)'>" + myObj.metro[34] + "</div><div id='mkr2' onclick='highlight(this.id)'>" + myObj.metro[35] + "</div><div id='mkr3' onclick='highlight(this.id)'>" + myObj.metro[36] + "</div><div id='mkr4' onclick='highlight(this.id)'>" + myObj.metro[37] + "</div><div id='mkr5' onclick='highlight(this.id)'>" + myObj.metro[38] + "</div><div id='mkmm2' onclick='highlight(this.id)'>" + myObj.metro[39] + "</div>";
      var snowList = "<br><b><u><a href='https://www.mariowiki.com/List_of_Power_Moons_in_the_Snow_Kingdom' target='_blank'>Snow Kingdom</a></u></b><div id='snkr1' onclick='highlight(this.id)'><font color='red'>" + myObj.snow[9] +"</div><div id='snkr2' onclick='highlight(this.id)'>" + myObj.snow[10] +"</div><div id='snkr3' onclick='highlight(this.id)'>" + myObj.snow[11] +"</div><div id='snkr4' onclick='highlight(this.id)'>" + myObj.snow[12] +"</font></div><div id='snkmm1' onclick='highlight(this.id)'>" + myObj.snow[13] +"</div>";
      var seasideList = "<b><u><a href='https://www.mariowiki.com/List_of_Power_Moons_in_the_Seaside_Kingdom' target='_blank'>Seaside Kingdom</a></u></b><div id='seakr1' onclick='highlight(this.id)'>" + myObj.seaside[32] + "</div><div id='seakr2' onclick='highlight(this.id)'>" + myObj.seaside[33] + "</div><div id='seakr3' onclick='highlight(this.id)'>" + myObj.seaside[34] + "</div><div id='seakr4' onclick='highlight(this.id)'>" + myObj.seaside[35] + "</div><div id='seakmm1' onclick='highlight(this.id)'>" + myObj.seaside[36] + "</div>";
      var luncheonList = "<br><b><u><a href='https://www.mariowiki.com/List_of_Power_Moons_in_the_Luncheon_Kingdom' target='_blank'>Luncheon Kingdom</a></u></b><div id='lukr1' onclick='highlight(this.id)'>" + myObj.luncheon[36] + "</div><div id='lukr2' onclick='highlight(this.id)'>" + myObj.luncheon[37] + "</div><div id='lukmm1' onclick='highlight(this.id)'>" + myObj.luncheon[38] + "</div><div id='lukr3' onclick='highlight(this.id)'>" + myObj.luncheon[39] + "</div><div id='lukmm2' onclick='highlight(this.id)'>" + myObj.luncheon[40] + "</div>";
      var ruinedList = "<br><b><u><a href='https://www.mariowiki.com/List_of_Power_Moons_in_the_Ruined_Kingdom' target='_blank'>Ruined Kingdom</a></u></b><div id='rkm1' onclick='highlight(this.id)'>" + myObj.ruined[0] + "</div>";
      var bowserList = "<br><b><u><a href='https://www.mariowiki.com/List_of_Power_Moons_in_Bowser&apos;s_Kingdom' target='_blank'>Bowser's Kingdom</a></u></b><div id='bkr1' onclick='highlight(this.id)'>" + myObj.bowser[21] + "</div><div id='bkr2' onclick='highlight(this.id)'>" + myObj.bowser[22] + "</div><div id='bkr3' onclick='highlight(this.id)'>" + myObj.bowser[23] + "</div><div id='bkmm1' onclick='highlight(this.id)'>" + myObj.bowser[24] + "</div>";

      //Determine Moons Based On Hash/Randomize
      if (hash == ''){
        //Add Any% Tag
        seed[0] = set;

        //Cascade Randomizer
        for (a=0; a < 1; a++){
          var aa = Math.floor(Math.random() * 15);
          cascadeList = cascadeList + "<div id='ckm3' onclick='highlight(this.id)'>" + myObj.cascade[aa] + "</div>";
          var aSeed = aa;
          seed[5] = String.fromCharCode(aSeed+33);
        }

        //Sand Randomizer
        var sandArr = [];
        while(sandArr.length < 10){
          var ba = Math.floor(Math.random() * 36);
          if (sandArr.indexOf(ba) === -1) sandArr.push(ba);
        }
        sandArr.sort(function(a, b){return a-b});
        for (bb=0; bb < 10; bb++){
          var sandVal = bb+1;
          var sandCheck = "<div id='skm" + sandVal +"' onclick='highlight(this.id)'>";
          sandList = sandList + sandCheck + myObj.sand[sandArr[bb]] + "</div>";
        }
        for (bc=0; bc < 10; bc++){
          var bd = bc+6;
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
          var cd = cc+16;
          seed[cd] = String.fromCharCode(lakeArr[cc]+33);
        }

        //Wooded Randomizer
        var woodArr = [];
        while(woodArr.length < 8){
          var da = Math.floor(Math.random() * 28);
          if (woodArr.indexOf(da) === -1) woodArr.push(da);
        }
        woodArr.sort(function(a, b){return a-b});
        for (d = 0; d < 8; d++){
          var woodVal = d+3;
          var woodCheck = "<div id='wkm" + woodVal + "' onclick='highlight(this.id)'>";
          woodList = woodList + woodCheck + myObj.wooded[woodArr[d]] + "</div>";
        }
        for (dc = 0; dc < 8; dc++){
          var dd = dc+21;
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
          var ed = ec+29;
          seed[ed] = String.fromCharCode(lostArr[ec]+33);
        }

        //Metro Randomizer
        var metroArr = [];
        var metroDump = [];
        while(metroArr.length < 9){
          var fa = Math.floor(Math.random() * 33);
          if (metroArr.indexOf(fa) === -1){
            if (fa == 16 && metroArr.indexOf(15) !== -1){
              metroArr.push(fa);
            } else if (fa == 16){
              metroDump.push(fa)
            } else {
              metroArr.push(fa);
            }
          }
        }
        metroArr.sort(function(a, b){return a-b});
        for (f = 0; f < 9; f++){
          var metroVal = f+2;
          var metroCheck = "<div id='mkm" + metroVal +"' onclick='highlight(this.id)'>";
          metroList = metroList + metroCheck + myObj.metro[metroArr[f]] + "</div>";
        }
        for (fc = 0; fc < 9; fc++){
          var fd = fc+39;
          seed[fd] = String.fromCharCode(metroArr[fc]+33);
        }

        //Snow Randomizer
        var snowArr = [];
        while(snowArr.length < 3){
          var ga = Math.floor(Math.random() * 9);
          if (snowArr.indexOf(ga) === -1) snowArr.push(ga);
        }
        snowArr.sort(function(a, b){return a-b});
        for (g = 0; g < 3; g++){
          var snowVal = g+1;
          var snowCheck = "<div id='snkm" + snowVal +"' onclick='highlight(this.id)'>";
          snowList += snowCheck + myObj.snow[snowArr[g]] + "</div>";
        }
        for (gc = 0; gc < 3; gc++){
          var gd = gc+48;
          seed[gd] = String.fromCharCode(snowArr[gc]+33);
        }

        //Seaside Randomizer
        var seasideArr = [];
        while(seasideArr.length < 3){
          var ha = Math.floor(Math.random() * 32);
          if (seasideArr.indexOf(ha) === -1) seasideArr.push(ha);
        }
        seasideArr.sort(function(a, b){return a-b});
        for (h = 0; h < 3; h++){
          var seasideVal = h+1;
          var seasideCheck = "<div id='sekm" + seasideVal +"' onclick='highlight(this.id)'>";
          seasideList += seasideCheck + myObj.seaside[seasideArr[h]] + "</div>";
        }
        for (hc = 0; hc < 3; hc++){
          var hd = hc+51;
          seed[hd] = String.fromCharCode(seasideArr[hc]+33);
        }

        //Luncheon Randomizer
        var luncheonArr = [];
        while(luncheonArr.length < 9){
          var ia = Math.floor(Math.random() * 36);
          if (luncheonArr.indexOf(ia) === -1) luncheonArr.push(ia);
        }
        luncheonArr.sort(function(a, b){return a-b});
        for (i = 0; i < 9; i++){
          var luncheonVal = i+4;
          var luncheonCheck = "<div id='lukm" + luncheonVal +"' onclick='highlight(this.id)'>";
          luncheonList += luncheonCheck + myObj.luncheon[luncheonArr[i]] + "</div>";
        }
        for (ic = 0; ic < 9; ic++){
          var id = ic+54;
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
          var jd = jc + 63;
          seed[jd] = String.fromCharCode(bowserArr[jc]+33);
        }

        //Add Version Key
        var ver = verHash.split("");
        seed[1] = ver[0];
        seed[2] = ver[1];
        seed[3] = ver[2];
        seed[4] = ver[3];

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
        for (i = 5; i < moons.length; i++){
          moons[i] = (moons[i].charCodeAt()-33);
        }

        var setCheck = moons[0];
        var versionCheck = moons[1] + moons[2] + moons[3] + moons[4];

        var cs = "<div id='";
        var ce = "' onclick='highlight(this.id)'>";

        //Version Check
        for (v = 0; v < version.compat.length; v++){
          if (compatible != 1){
            if (version.compat[v] == versionCheck){
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
          //Add Moons to Lists
          cascadeList += cs + 0 + ce + myObj.cascade[moons[5]] + "</div>";
          for (az = 6; az < 16; az++){
            sandList += cs + az + ce + myObj.sand[moons[az]] + "</div>";
          }
          for (bz = 16; bz < 21; bz++){
            lakeList += cs + bz + ce + myObj.lake[moons[bz]] + "</div>";
          }
          for (cz = 21; cz < 29; cz++){
            woodList += cs + cz + ce + myObj.wooded[moons[cz]] + "</div>";
          }
          for (dz = 29; dz < 39; dz++){
            lostList += cs + dz + ce + myObj.lost[moons[dz]] + "</div>";
          }
          for (ez = 39; ez < 48; ez++){
            metroList += cs + ez + ce + myObj.metro[moons[ez]] + "</div>";
          }
          for (fz = 48; fz < 51; fz++){
            snowList += cs + fz + ce + myObj.snow[moons[fz]] + "</div>";
          }
          for (gz = 51; gz < 54; gz++){
            seasideList += cs + gz + ce + myObj.seaside[moons[gz]] + "</div>";
          }
          for (hz = 54; hz < 63; hz++){
            luncheonList += cs + hz + ce + myObj.luncheon[moons[hz]] + "</div>";
          }
          for (iz = 63; iz < 65; iz++){
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

function streamLayout(){
  moonlist = "";
  moonlist2 = "";
  moonlist3 = "";
  moonlist4 = "";
  hash = document.getElementById("seedHash").value;

  //Setup Lists
  var cascadeList = "<b><u><a href='https://www.mariowiki.com/List_of_Power_Moons_in_the_Cascade_Kingdom' target='_blank'>Cascade Kingdom<a></u></b><div id='ckr1' onclick='highlight(this.id)'>" + myObj.cascade[15] + "</div><div id='ckmm1' onclick='highlight(this.id)'>" + myObj.cascade[16] + "</div>";
  var sandList = "<br><b><u><a href='https://www.mariowiki.com/List_of_Power_Moons_in_the_Sand_Kingdom' target='_blank'>Sand Kingdom</a></u></b><div id='sakr1' onclick='highlight(this.id)'><font color='red'>" + myObj.sand[36] + "</div><div id='sakr2' onclick='highlight(this.id)'>" + myObj.sand[37] + "</font></div><div id='sakr3' onclick='highlight(this.id)'>" + myObj.sand[38] + "</div><div id='sakmm1' onclick='highlight(this.id)'>" + myObj.sand[39] + "</div>";
  var lakeList = "<br><b><u><a href='https://www.mariowiki.com/List_of_Power_Moons_in_the_Lake_Kingdom' target='_blank'>Lake Kingdom</a></u></b><div id='lakmm1' onclick='highlight(this.id)'>" + myObj.lake[17] + "</div>";
  var woodList = "<b><u><a href='https://www.mariowiki.com/List_of_Power_Moons_in_the_Wooded_Kingdom' target='_blank'>Wooded Kingdom</a></u></b><div id='wkr1' onclick='highlight(this.id)'>" + myObj.wooded[28] + "</div><div id='wkmm1' onclick='highlight(this.id)'>" + myObj.wooded[29] + "</div><div id='wkr2' onclick='highlight(this.id)'>" + myObj.wooded[30] + "</div><div id='wkmm2' onclick='highlight(this.id)'>" + myObj.wooded[31] + "</div>";
  var lostList = "<br><b><u><a href='https://www.mariowiki.com/List_of_Power_Moons_in_the_Lost_Kingdom' target='_blank'>Lost Kingdom</a></u></b>";
  var metroList = "<b><u><a href='https://www.mariowiki.com/List_of_Power_Moons_in_the_Metro_Kingdom' target='_blank'>Metro Kingdom</a></u></b><div id='mkmm1' onclick='highlight(this.id)'>" + myObj.metro[33] + "</div><div id='mkr1' onclick='highlight(this.id)'>" + myObj.metro[34] + "</div><div id='mkr2' onclick='highlight(this.id)'>" + myObj.metro[35] + "</div><div id='mkr3' onclick='highlight(this.id)'>" + myObj.metro[36] + "</div><div id='mkr4' onclick='highlight(this.id)'>" + myObj.metro[37] + "</div><div id='mkr5' onclick='highlight(this.id)'>" + myObj.metro[38] + "</div><div id='mkmm2' onclick='highlight(this.id)'>" + myObj.metro[39] + "</div>";
  var snowList = "<br><b><u><a href='https://www.mariowiki.com/List_of_Power_Moons_in_the_Snow_Kingdom' target='_blank'>Snow Kingdom</a></u></b><div id='snkr1' onclick='highlight(this.id)'><font color='red'>" + myObj.snow[9] +"</div><div id='snkr2' onclick='highlight(this.id)'>" + myObj.snow[10] +"</div><div id='snkr3' onclick='highlight(this.id)'>" + myObj.snow[11] +"</div><div id='snkr4' onclick='highlight(this.id)'>" + myObj.snow[12] +"</font></div><div id='snkmm1' onclick='highlight(this.id)'>" + myObj.snow[13] +"</div>";
  var seasideList = "<b><u><a href='https://www.mariowiki.com/List_of_Power_Moons_in_the_Seaside_Kingdom' target='_blank'>Seaside Kingdom</a></u></b><div id='seakr1' onclick='highlight(this.id)'>" + myObj.seaside[32] + "</div><div id='seakr2' onclick='highlight(this.id)'>" + myObj.seaside[33] + "</div><div id='seakr3' onclick='highlight(this.id)'>" + myObj.seaside[34] + "</div><div id='seakr4' onclick='highlight(this.id)'>" + myObj.seaside[35] + "</div><div id='seakmm1' onclick='highlight(this.id)'>" + myObj.seaside[36] + "</div>";
  var luncheonList = "<br><b><u><a href='https://www.mariowiki.com/List_of_Power_Moons_in_the_Luncheon_Kingdom' target='_blank'>Luncheon Kingdom</a></u></b><div id='lukr1' onclick='highlight(this.id)'>" + myObj.luncheon[36] + "</div><div id='lukr2' onclick='highlight(this.id)'>" + myObj.luncheon[37] + "</div><div id='lukmm1' onclick='highlight(this.id)'>" + myObj.luncheon[38] + "</div><div id='lukr3' onclick='highlight(this.id)'>" + myObj.luncheon[39] + "</div><div id='lukmm2' onclick='highlight(this.id)'>" + myObj.luncheon[40] + "</div>";
  var ruinedList = "<br><b><u><a href='https://www.mariowiki.com/List_of_Power_Moons_in_the_Ruined_Kingdom' target='_blank'>Ruined Kingdom</a></u></b><div id='rkm1' onclick='highlight(this.id)'>" + myObj.ruined[0] + "</div>";
  var bowserList = "<br><b><u><a href='https://www.mariowiki.com/List_of_Power_Moons_in_Bowser&apos;s_Kingdom' target='_blank'>Bowser's Kingdom</a></u></b><div id='bkr1' onclick='highlight(this.id)'>" + myObj.bowser[21] + "</div><div id='bkr2' onclick='highlight(this.id)'>" + myObj.bowser[22] + "</div><div id='bkr3' onclick='highlight(this.id)'>" + myObj.bowser[23] + "</div><div id='bkmm1' onclick='highlight(this.id)'>" + myObj.bowser[24] + "</div>";

  //Decode Hash
  var moons = hash.split("");
  for (i = 5; i < moons.length; i++){
    moons[i] = (moons[i].charCodeAt()-33);
  }

  var setCheck = moons[0];
  var versionCheck = moons[1] + moons[2] + moons[3] + moons[4];

  var cs = "<div id='";
  var ce = "' onclick='highlight(this.id)'>";

  //Version Check
  for (v = 0; v < version.compat.length; v++){
    if (compatible != 1){
      if (version.compat[v] == versionCheck){
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
    //Add Moons to Lists
    cascadeList += cs + 0 + ce + myObj.cascade[moons[5]] + "</div>";
    for (az = 6; az < 16; az++){
      sandList += cs + az + ce + myObj.sand[moons[az]] + "</div>";
    }
    for (bz = 16; bz < 21; bz++){
      lakeList += cs + bz + ce + myObj.lake[moons[bz]] + "</div>";
    }
    for (cz = 21; cz < 29; cz++){
      woodList += cs + cz + ce + myObj.wooded[moons[cz]] + "</div>";
    }
    for (dz = 29; dz < 39; dz++){
      lostList += cs + dz + ce + myObj.lost[moons[dz]] + "</div>";
    }
    for (ez = 39; ez < 48; ez++){
      metroList += cs + ez + ce + myObj.metro[moons[ez]] + "</div>";
    }
    for (fz = 48; fz < 51; fz++){
      snowList += cs + fz + ce + myObj.snow[moons[fz]] + "</div>";
    }
    for (gz = 51; gz < 54; gz++){
      seasideList += cs + gz + ce + myObj.seaside[moons[gz]] + "</div>";
    }
    for (hz = 54; hz < 63; hz++){
      luncheonList += cs + hz + ce + myObj.luncheon[moons[hz]] + "</div>";
    }
    for (iz = 63; iz < 65; iz++){
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
  document.getElementById("moons").innerHTML = moonlist + "<br>" + moonlist2 + "<br>" + moonlist3 + "<br>" + moonlist4 + "<br><br><br><br>";
  document.getElementById("moons2").innerHTML = '';
  document.getElementById("moons3").innerHTML = '';
  document.getElementById("moons4").innerHTML = '';
  $('#list2').hide();
  $('#list3').hide();
  $('#list4').hide();

  //Add top information
  document.getElementById('moonCount').innerHTML = '0 out of 124 moons';
  document.getElementById('disclaimer').innerHTML = '<font color="red">Red moons</font> = Required | <font color="blue">Blue moons</font> = Sub-Area | <font color="purple">Purple moons</font> = Shop/Slots<br>Click the Kingdom Name for list of moons.';

  //Add seed to textbox
  document.getElementById('seedHash').innerHTML = hash;
}
