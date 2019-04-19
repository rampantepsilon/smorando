
  var seed = [];
  var moonlist = "";
  var moonlist2 = "";
  var hash = "null";
  var moonCount = 0;

  //Seed Comparision Variables
  var set = 'g'; //Denotes Festival%
  var verSeedHash = "201d"; //Hash is [Version][Dev/Full]

  var Base64 = require('js-base64').Base64;

  function moonTotal(id){
    var checkBox = document.getElementById(id);
    var count = document.getElementById('moonCount');
    if (checkBox.checked == true){
      if (id == 'ckm2' || id == 'lakm1' || id == 'wkm2' || id == 'mkm1' || id == 'mkm7'){
        moonCount += 3;
      } else {
        moonCount += 1;
      }
      count.innerHTML = moonCount + " out of 66 moons";
    } else {
      if (id == 'ckm2' || id == 'lakm1' || id == 'wkm2' || id == 'mkm1' || id == 'mkm7'){
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
  };

  function copySeed(){
    var copyText = document.getElementById("seedHash");
    copyText.select();
    document.execCommand("copy");
  };

  function generateSeed(){
      moonlist = "";
      moonlist2 = "";
      hash = document.getElementById("seedHash").value;

      //Setup Lists
      var cascadeList = "<b><u><a href='https://www.mariowiki.com/List_of_Power_Moons_in_the_Cascade_Kingdom' target='_blank'>Cascade Kingdom<a></u></b><br><input type='checkbox' id='ckm1' onclick='moonTotal(this.id)'>" + myObj.cascade[15] + "<br><input type='checkbox' id='ckm2' onclick='moonTotal(this.id)'>" + myObj.cascade[16] + "<br>";
      var sandList = "<br><b><u><a href='https://www.mariowiki.com/List_of_Power_Moons_in_the_Sand_Kingdom' target='_blank'>Sand Kingdom</a></u></b><br>";
      var lakeList = "<br><b><u><a href='https://www.mariowiki.com/List_of_Power_Moons_in_the_Lake_Kingdom' target='_blank'>Lake Kingdom</a></u></b><br><input type='checkbox' id='lakm1' onclick='moonTotal(this.id)'>" + myObj.lake[18] + "<br>";
      var woodList = "<b><u><a href='https://www.mariowiki.com/List_of_Power_Moons_in_the_Wooded_Kingdom' target='_blank'>Wooded Kingdom</a></u></b><br><input type='checkbox' id='wkm1' onclick='moonTotal(this.id)'>" + myObj.wooded[15] + "<br><input type='checkbox' id='wkm2' onclick='moonTotal(this.id)'>" + myObj.wooded[16] + "<br>";
      var lostList = "<br><b><u><a href='https://www.mariowiki.com/List_of_Power_Moons_in_the_Lost_Kingdom' target='_blank'>Lost Kingdom</a></u></b><br>";
      var metroList = "<b><u><a href='https://www.mariowiki.com/List_of_Power_Moons_in_the_Metro_Kingdom' target='_blank'>Metro Kingdom</a></u></b><br><input type='checkbox' id='mkm1' onclick='moonTotal(this.id)'>" + myObj.metro[35] + "<br><font color='red'><input type='checkbox' id='mkm2' onclick='moonTotal(this.id)'>" + myObj.metro[0] + "<br><input type='checkbox' id='mkm3' onclick='moonTotal(this.id)'>" + myObj.metro[1] + "<br><input type='checkbox' id='mkm4' onclick='moonTotal(this.id)'>" + myObj.metro[2] + "<br><input type='checkbox' id='mkm5' onclick='moonTotal(this.id)'>" + myObj.metro[3] + "<br><input type='checkbox' id='mkm6' onclick='moonTotal(this.id)'>" + myObj.metro[36] + "<br></font><input type='checkbox' id='mkm7' onclick='moonTotal(this.id)'>" + myObj.metro[37];

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
          var ba = Math.floor(Math.random() * 32);
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
          var ca = Math.floor(Math.random() * 18);
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

        //Add Version Key
        seed[45] = verSeedHash;

        //Add Lists to moonlist
        moonlist += cascadeList + sandList + lakeList;
        moonlist2 += woodList + lostList + metroList;

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

        //Add top information
        document.getElementById('moonCount').innerHTML = '0 out of 66 moons';
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
        var versionCheck = moons[45] + moons[46] + moons[47] + moons[48];

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
