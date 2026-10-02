let appList = "'h.app.calc'    -calculator \n 'h.app.browser'    -launch browser \n 'h.app.js'    -exe a js scripts\n 'h.app.localJs'    -run local file js scripts";

function calculator(number,type,number2) {
       if (type == "1") {
              echo("the results is : "+(number+number2))
       }
       
       if (type == "2") {
              echo("the results is : "+(number-number2))
       }
       
       if (type == "3") {
              echo("the results is : "+(number*number2))
       }
       
       if (type == "4") {
              echo("the results is : "+(number/number2))
       }

       if (type !== "1" && type !== "2" && type !== "3" && type !== "4") {
              echo("error the type : '"+type+"' is not a number or a function type choices")
       }
}

function makeBrowser(src) {
       var i = document.createElement("iframe");
       i.src = src;
       i.frameborder = 0;
       i.width=window.innerWidth-50;
       i.height="500";
       document.body.appendChild(i);
       newLine();
       echo("close ?","red").onclick = function () {
              i.src = "null.nihkk";
       }
}