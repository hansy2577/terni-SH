let terminal = {
      version: 1.5,
      credit: "hansy2577b"
}

function exeCommande(name) {
      sessionStorage.setItem("command","€"+name);
}

function commandEcho(text,color = "grey") {
      var commandText = document.createElement("i");
      commandText.innerText = "> "+text.substr(1, 999);
      commandText.style.color = color;
      commandText.style.fontSize = "12px";
      document.body.appendChild(commandText);

      document.body.appendChild(document.createElement("br"));
}

function echo(text,color = "white") {
      var commandText = document.createElement("a");
      commandText.innerText = "< "+text;
      commandText.style.color = color;
      document.body.appendChild(commandText);

      document.body.appendChild(document.createElement("br"));
      document.body.appendChild(document.createElement("br"));
      return commandText;
}

function clearCanvas() {
      window.location = ""
}

function newLine() {
      document.body.appendChild(document.createElement("br"));
}


function echo_more(textere,color,link){
      document.body.appendChild(document.createElement("br"));

      var more = document.createElement("a");
      document.body.appendChild(more);
    
      more.style.color = color;
      more.innerText = "< "+textere;
      
      if (link == null) {
            
      } else {
            more.href = link;
      }
}

function changeSession(name) {
      localStorage.setItem("terminal session",name);
      clearCanvas();
}