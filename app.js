var inputText = document.querySelector("#inputText");
var btnTranslaion = document.querySelector("#btnTranslation");
var outputText = document.querySelector(".outputText");
var url="https://api.funtranslations.com/translate/pirate.json";
function clickHandler()
{   
    //console.log("clicked");
    var inputValue=inputText.value;
    var finalURL=constructRUL(inputValue);
 fetch(finalURL).then(response=>response.json()).then(json=>
    {
         console.log(json)
         outputText.innerText=json.contents.translated; 
    })
 .catch((error)=>
 {
    alert("some error occurs");
    console.log(error);
});
}
function constructRUL(input)
{
    var encodedeURI=encodeURI(input);
    return `${url}?text=${encodedeURI}`;
}


btnTranslaion.addEventListener("click", clickHandler)