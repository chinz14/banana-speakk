var btn = document.querySelector("#btn-translator");
var txtInput = document.querySelector("#txt-inut");
console.log(txtInput);

var outputDiv = document.querySelector("#output");
console.log(outputDiv);
outputDiv.innerText="chinnmay";

function clickEventHandler(){
    outputDiv.innerText="lkjlqwjj"+txtInput.value;
}

btn.addEventListener("click",  clickEventHandler)
   



