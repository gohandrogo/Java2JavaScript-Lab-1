" use strict ";

var display = document.getElementById("display");

function yourFunctionName (){
  display.innerHTML = "hello";
}
// code prints one to ten on a new line
function oneToTen (){
  var str = "***Output***";
  for(var i=0 ; i<=10 ; i++ ){
    str += "<br>"+ i;
  }
  display.innerHTML = str;
}

function oddNumbers(){
  var str = "***Output***";
  for(var i=1; i<=20; i=i+2){
    str += "<br>"+i;
  }
  display.innerHTML = str;
}

function squares(){
  var str = "***Output***";
  for(var i=0 ; i<=10 ; i++ ){
    str += "<br>"+ i*i;
  }
  display.innerHTML = str;
}

function fourRandys(){
  var str = "***Output***";
  for(var i=1; i<=4; i++){
    str += "<br>"+Math.floor(Math.random()*100);
  }
  display.innerHTML = str;
}

function even(num){
  var str = "***Output***";
  for(var i=2; i<=num; i+=2){
    str += "<br>"+i;
  }
  display.innerHTML = str;
}


function powers(num){
  var str = "***Output***";
  for(var i=0 ; i<=num ; i++ ){
    str += "<br>"+ Math.pow(2,i);
  }
  display.innerHTML = str;
}

function AreWeThereYet(){
  var answer = false
  while(!answer){
    var response = prompt("Are We there yet?");
    if(response.toLowerCase() === "yes"){
      display.innerHTML = "<p style='font-size: 200px'> GOOD!</p>";
      answer = !answer;
    }
  }
}

function triangle(){
  var str = "***Output***";
  var triangles="";
  for(var i=0 ; i<=5 ; i++ ){
    triangles += "*";
    str += "<br>"+ triangles;
  }
  display.innerHTML = str;
}

function tableSquare(){
  var str = "***Output***"+"<br>"+" A4x4tablesquare"+"<br> ";
  var line = "";
  for(var i=1 ; i<=4 ; i++ ){
    for(var j=1 ; j<=4 ; j++ ){
      line += " | "+i*j+" |"
    }
    line+="<br>"
  }

  display.innerHTML = line;
}


function tableSquares(num){
  var str = "***Output***"+"<br>"+" A4x4tablesquare"+"<br> ";
  var line = "";
  for(var i=1 ; i<=num ; i++ ){
    for(var j=1 ; j<=num ; j++ ){
      line += "<div class='block'> "+i*j+" </div>";
    }
    line+="<br>"
  }

  display.innerHTML = line;
}
