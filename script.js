


var outputText = document.getElementById("text-output");



function updateText(){
  var content = document.getElementById("text-input").value;
  outputText.innerHTML = content;
}

function makeBold(elem){
  elem.classList.toggle("active");
  outputText.classList.toggle("bold");
}

function makeItalic(elem){
  elem.classList.toggle("active");
  outputText.classList.toggle("italic");
}

function makeUnderline(elem){
  elem.classList.toggle("active");
  outputText.classList.toggle("underline");
}

function alignText(elem, alignType){
  elem.classList.toggle("active");
  outputText.style.textAlign = alignType;
  var buttonList = document.getElementsByClassName("align");
  for(let i=0;i<buttonList.length;i++){
    if(buttonList[i] == elem){
    }else{
      buttonList[i].classList.remove("active");
    }
  }
}