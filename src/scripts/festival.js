
  var seed = [];
  var moonlist = "";
  var moonlist2 = "";
  var hash = "null";
  var moonCount = 0;
  var compatible = 0;

  //Seed Comparision Variables
  var set = 'f'; //Denotes Festival%
  var verHash = version.compat[0]; //Hash is [Version][Dev/Full]

  function moonTotal(id){
    var checkBox = document.getElementById(id);
    var count = document.getElementById('moonCount');
    if (!id.includes('Marked')){
      if (id == 'ckm2' || id == 'lakm1' || id == 'wkmm1' || id == 'mkm1' || id == 'mkm7'){
        moonCount += 3;
      } else {
        moonCount += 1;
      }
      count.innerHTML = moonCount + " out of 66 moons";
    } else {
      if (id == 'ckm2Marked' || id == 'lakm1Marked' || id == 'wkmm1Marked' || id == 'mkm1Marked' || id == 'mkm7Marked'){
        moonCount -= 3;
      } else {
        moonCount -= 1;
      }
      count.innerHTML = moonCount + " out of 66 moons";
    }
  }

  function clear(){
    var a = sessionStorage.getItem('fSeed');
    document.getElementById('seedHash').value = a;
    generateSeed();
    sessionStorage.setItem('fSeed','');
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
      hash = document.getElementById("seedHash").value;

      //Setup Lists
      var cascadeList = "<b><u><a href='https://www.mariowiki.com/List_of_Power_Moons_in_the_Cascade_Kingdom' target='_blank'>Cascade Kingdom<a></u></b><div id='ckm1' onclick='highlight(this.id)'>" + myObj.cascade[15] + "</div><div id='ckm2' onclick='highlight(this.id)'>" + myObj.cascade[16] + "</div>";
      var sandList = "<br><b><u><a href='https://www.mariowiki.com/List_of_Power_Moons_in_the_Sand_Kingdom' target='_blank'>Sand Kingdom</a></u></b>";
      var lakeList = "<br><b><u><a href='https://www.mariowiki.com/List_of_Power_Moons_in_the_Lake_Kingdom' target='_blank'>Lake Kingdom</a></u></b><div id='lakm1' onclick='highlight(this.id)'>" + myObj.lake[17] + "</div>";
      var woodList = "<b><u><a href='https://www.mariowiki.com/List_of_Power_Moons_in_the_Wooded_Kingdom' target='_blank'>Wooded Kingdom</a></u></b><div id='wkm1' onclick='highlight(this.id)'>"/* + myObj.wooded[15] + "</div><div id='wkm2' onclick='highlight(this.id)'>"*/ + myObj.wooded[16] + "</div>";
      var lostList = "<br><b><u><a href='https://www.mariowiki.com/List_of_Power_Moons_in_the_Lost_Kingdom' target='_blank'>Lost Kingdom</a></u></b>";
      var metroList = "<b><u><a href='https://www.mariowiki.com/List_of_Power_Moons_in_the_Metro_Kingdom' target='_blank'>Metro Kingdom</a></u></b><div id='mkm1' onclick='highlight(this.id)'>" + myObj.metro[32] + "</div><font color='red'><div id='mkm2' onclick='highlight(this.id)'>" + myObj.metro[0] + "</div><div id='mkm3' onclick='highlight(this.id)'>" + myObj.metro[1] + "</div><div id='mkm4' onclick='highlight(this.id)'>" + myObj.metro[2] + "</div><div id='mkm5' onclick='highlight(this.id)'>" + myObj.metro[3] + "</div><div id='mkm6' onclick='highlight(this.id)'>" + myObj.metro[33] + "</div></font><div id='mkm7' onclick='highlight(this.id)'>" + myObj.metro[34]+"</div>";

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
          var cd = cc+22;
          seed[cd] = String.fromCharCode(lakeArr[cc]+33);
        }

        //Wooded Randomizer
        var woodArr = [];
        var woodDump = [];
        var woodCount = 0;
        while(woodCount < 15){
          var da = Math.floor(Math.random() * 16);
          if (woodArr.indexOf(da) === -1){
            if (da == 0){
              if (woodCount < 12){
                woodCount += 3;
                woodArr.push(da);
              }
              else{
                woodDump.push(da);
              }
            }
            else{
              woodCount += 1;
              woodArr.push(da);
            }
          }
        }
        woodArr.sort(function(a, b){return a-b});
        for (d = 0; d < woodArr.length; d++){
          var woodVal = d+3;
          var woodCheck = "<div id='wkm" + woodVal + "' onclick='highlight(this.id)'>";
          if (myObj.wooded[woodArr[d]] != 'Flower Thieves to Sky Garden (+3)'){
              woodList = woodList + woodCheck + myObj.wooded[woodArr[d]] + "</div>";
          }
          else{
            woodList = woodList + "<div id='wkmm1' onclick='highlight(this.id)'>" + myObj.wooded[woodArr[d]] + "</div>";
          }
        }
        for (dc = 0; dc < 15; dc++){
          var dd = dc+27;
          if (woodArr[dc] != null){
            seed[dd] = String.fromCharCode(woodArr[dc]+33);
          }
          else {
            seed[dd] = String.fromCharCode(80);
          }
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
          var ed = ec+42;
          seed[ed] = String.fromCharCode(lostArr[ec]+33);
        }

        //Add Version Key
        var ver = verHash.split("");
        seed[1] = ver[0];
        seed[2] = ver[1];
        seed[3] = ver[2];
        seed[4] = ver[3];

        //Add Lists to moonlist
        moonlist += cascadeList + sandList + lakeList;
        moonlist2 += woodList + lostList + '<br>' + metroList;

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

        //Add top information
        document.getElementById('moonCount').innerHTML = '0 out of 66 moons';
        document.getElementById('disclaimer').innerHTML = '<font color="red">Red moons</font> = Required | <font color="blue">Blue moons</font> = Sub-Area | <font color="purple">Purple moons</font> = Shop/Slots<br>Click the Kingdom Name for list of moons.';

        //Add seed to textbox
        document.getElementById('seedHash').value = encodedSeed;
        //document.getElementById('seedHash').value = seed[1];
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
          for (az = 6; az < 22; az++){
            sandList += cs + az + ce + myObj.sand[moons[az]] + "</div>";
          }
          for (bz = 22; bz < 27; bz++){
            lakeList += cs + bz + ce + myObj.lake[moons[bz]] + "</div>";
          }
          for (cz = 27; cz < 42; cz++){
            if (moons[cz] != 47){
              if (moons[cz] == 0){
                woodList += cs + "wkmm1" + ce + myObj.wooded[moons[cz]] + "</div>";
              }
              else {
                woodList += cs + cz + ce + myObj.wooded[moons[cz]] + "</div>";
              }
            }
            else {
              break;
            }
          }
          for (dz = 42; dz < 52; dz++){
            lostList += cs + dz + ce + myObj.lost[moons[dz]] + "</div>";
          }

          //Add Lists to moonlist
          moonlist += cascadeList + sandList + lakeList;
          moonlist2 += woodList + lostList + metroList;
        }
        else {
          moonlist = wrongSeed;
        }

        //Set Outline
        $("#list1").css("border-style", "solid");
        $("#list2").css("border-style", "solid");
        $("#list3").css("border-style", "solid");
        $("#list4").css("border-style", "solid");

        //Add moons to viewpoint
        document.getElementById("moons").innerHTML = moonlist;
        document.getElementById("moons2").innerHTML = moonlist2;

        //Add top information
        document.getElementById('moonCount').innerHTML = '0 out of 66 moons';
        document.getElementById('disclaimer').innerHTML = '<font color="red">Red moons</font> = Required | <font color="blue">Blue moons</font> = Sub-Area | <font color="purple">Purple moons</font> = Shop/Slots<br>Click the Kingdom Name for list of moons.';

        //Add seed to textbox
        document.getElementById('seedHash').innerHTML = hash;
      }
  };

  function streamLayout(){
    moonCount = 0;
    moonlist = "";
    moonlist2 = "";
    hash = document.getElementById("seedHash").value;

    //Setup Lists
    var cascadeList = "<b><u><a href='https://www.mariowiki.com/List_of_Power_Moons_in_the_Cascade_Kingdom' target='_blank'>Cascade Kingdom<a></u></b><div id='ckm1' onclick='highlight(this.id)'>" + myObj.cascade[15] + "</div><div id='ckm2' onclick='highlight(this.id)'>" + myObj.cascade[16] + "</div>";
    var sandList = "<br><b><u><a href='https://www.mariowiki.com/List_of_Power_Moons_in_the_Sand_Kingdom' target='_blank'>Sand Kingdom</a></u></b>";
    var lakeList = "<br><b><u><a href='https://www.mariowiki.com/List_of_Power_Moons_in_the_Lake_Kingdom' target='_blank'>Lake Kingdom</a></u></b><div id='lakm1' onclick='highlight(this.id)'>" + myObj.lake[17] + "</div>";
    var woodList = "<b><u><a href='https://www.mariowiki.com/List_of_Power_Moons_in_the_Wooded_Kingdom' target='_blank'>Wooded Kingdom</a></u></b><div id='wkm1' onclick='highlight(this.id)'>"/* + myObj.wooded[15] + "</div><div id='wkm2' onclick='highlight(this.id)'>"*/ + myObj.wooded[16] + "</div>";
    var lostList = "<br><b><u><a href='https://www.mariowiki.com/List_of_Power_Moons_in_the_Lost_Kingdom' target='_blank'>Lost Kingdom</a></u></b>";
    var metroList = "<b><u><a href='https://www.mariowiki.com/List_of_Power_Moons_in_the_Metro_Kingdom' target='_blank'>Metro Kingdom</a></u></b><div id='mkm1' onclick='highlight(this.id)'>" + myObj.metro[32] + "</div><font color='red'><div id='mkm2' onclick='highlight(this.id)'>" + myObj.metro[0] + "</div><div id='mkm3' onclick='highlight(this.id)'>" + myObj.metro[1] + "</div><div id='mkm4' onclick='highlight(this.id)'>" + myObj.metro[2] + "</div><div id='mkm5' onclick='highlight(this.id)'>" + myObj.metro[3] + "</div><div id='mkm6' onclick='highlight(this.id)'>" + myObj.metro[33] + "</div></font><div id='mkm7' onclick='highlight(this.id)'>" + myObj.metro[34]+"</div>";

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
      for (az = 6; az < 22; az++){
        sandList += cs + az + ce + myObj.sand[moons[az]] + "</div>";
      }
      for (bz = 22; bz < 27; bz++){
        lakeList += cs + bz + ce + myObj.lake[moons[bz]] + "</div>";
      }
      for (cz = 27; cz < 42; cz++){
        if (moons[cz] != 47){
          if (moons[cz] == 0){
            woodList += cs + "wkmm1" + ce + myObj.wooded[moons[cz]] + "</div>";
          }
          else {
            woodList += cs + cz + ce + myObj.wooded[moons[cz]] + "</div>";
          }
        }
        else {
          break;
        }
      }
      for (dz = 42; dz < 52; dz++){
        lostList += cs + dz + ce + myObj.lost[moons[dz]] + "</div>";
      }

      //Add Lists to moonlist
      moonlist += cascadeList + sandList + lakeList;
      moonlist2 += woodList + lostList + '<br>' + metroList;
    }
    else {
      moonlist = wrongSeed;
    }

    //Set Outline
    $("#list1").css("border-style", "solid");
    $("#list2").css("border-style", "solid");
    $("#list3").css("border-style", "solid");
    $("#list4").css("border-style", "solid");

    //Add moons to viewpoint
    document.getElementById("moons").innerHTML = moonlist + "<br>" + moonlist2 + "<br><br><br><br>";
    document.getElementById("moons2").innerHTML = '';
    $('#list2').hide();

    //Add top information
    document.getElementById('moonCount').innerHTML = '0 out of 66 moons';
    document.getElementById('disclaimer').innerHTML = '<font color="red">Red moons</font> = Required | <font color="blue">Blue moons</font> = Sub-Area | <font color="purple">Purple moons</font> = Shop/Slots<br>Click the Kingdom Name for list of moons.';

    //Add seed to textbox
    document.getElementById('seedHash').innerHTML = hash;
}
