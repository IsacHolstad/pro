//console.log(document.location.querystring)
//console.log(document.url.search)
console.log(document.location.search)

//THIS IS AN EXAMPLE FOR LOCALSTORAGE, 
const squer = document.querySelector(".squer");
const squerActionBTN = document.querySelector("#squerBTN");

const bgColor = localStorage.getItem("bgColor");
//console.log("bgColor: ", bgColor);
squer.style.backgroundColor = bgColor;

squerActionBTN.addEventListener("click", function(){
    //console.log("the butto nhas been clicked");
    squer.style.backgroundColor = "blue"
});

localStorage.setItem("bgColor", "blue");
const name = localStorage.getItem("name")
//console.log("the name is: ", name)




