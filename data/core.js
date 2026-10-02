let command = "";
let fileFunction = "";
let data = "";

if (localStorage.getItem("terminal session") == "" || localStorage.getItem("terminal session") == undefined) {
  localStorage.setItem("terminal session","default")
}

getCommand()
function getCommand() {
  var rawFile = new XMLHttpRequest();
  var reload = 0;
  rawFile.open("get","assets/"+localStorage.getItem("terminal session")+"/command.terni", true);
  rawFile.onreadystatechange = function() {
    reload++;
    if (rawFile.readyState === 4) {
      var allText = rawFile.responseText;
    }
    if (reload == 3 ) {
      
      if (allText == "Error 404, file not found.") {
        alert("fail to found terminal command")
        localStorage.setItem("terminal session","default")

        window.location = "";
       } else {
        fileFunction = allText;
        data = JSON.parse(allText.split("\n")[0])
        
        makeScripts(data.scripts)
        startLoop()
      }
    }
  }
  rawFile.send();
}


function startLoop() {
  setInterval(function(){
    if (sessionStorage.getItem("command")[0] == "€") {
      var command = sessionStorage.getItem("command");
      sessionStorage.setItem("command","")

      verify = false;
    
      var listN = fileFunction.split("\n");
      commandEcho(command,"grey")
      if (command.substr(1, 999) !== "" && command.substr(1, 999) !== " ") {
      for (var i = 1; i < listN.length; i++) {
        if (listN[i][0] == "[") {
        var output = (listN[i].replace("[","")).replace("]","");
      
        if (output == command.substr(1, 999)) {
          var s = document.createElement("script");
          s.innerText = listN[i+1];
          document.body.appendChild(s);
        
          verify = true;
        }
        }
      } 
      } else {
        verify = true;
      }
      
      if (verify == false) { // get error
        echo("# ERROR :\n'"+command.substr(1,999)+"' not a command or a function.","red");
        
        verify = true;
      }
      
      command = "";
    }
  },50)
}

function makeScripts(data) {
  var e = document.createElement("script");
  e.src = "assets/"+localStorage.getItem("terminal session")+"/"+data;
  document.body.appendChild(e);
}
