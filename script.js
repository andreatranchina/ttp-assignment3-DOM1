//1- Select the section with an id of container without using querySelector.
document.getElementById("container");
//check
// document.getElementById("container").style.color = "blue";

//2 - Select the section with an id of container using querySelector.
document.querySelector("#container");
//check
// document.querySelector("section#container").style.fontSize = "2rem";

//3 - Select all of the list items with a class of "second".
document.querySelectorAll("li.second");
//check
// document.querySelectorAll("li.second")[0].style.color = "black";
// let liSecondNodeList = document.querySelectorAll("li.second");
// let liSecondArray = [...liSecondNodeList];
// liSecondArray[1].style.color = "pink";

//4 - Select a list item with a class of third, but only the list item inside of the ol tag.
document.querySelector("ol .third"); //or "ol li.third"
//check
// document.querySelector("ol .third").style.fontWeight = 900;

//5 - Give the section with an id of container the text "Hello!".
// document.querySelector("section#container").innerText = "Hello!";

//6 -  Add the class main to the div with a class of footer
document.querySelector("div.footer").classList.add("main");

//7 - Remove the class main on the div with a class of footer.
document.querySelector("div.footer").classList.remove("main");


//8 -  Create a new li element.
let newElement = document.createElement("li");

//9 - Give the li the text "four".
newElement.innerText = "four"
//following also works
// newElement.textContent = "four";


//10 - Append the li to the ul element.
document.querySelector("ul").appendChild(newElement); //or .append()

//11 - Loop over all of the lis inside the ol tag and give them a background color of "green".
let liInOlNodeList = document.querySelectorAll("ol li");
let liInOlArray = [...liInOlNodeList];
for (let li of liInOlArray){
    li.style.backgroundColor = "green";
}

//12 - Remove the div with a class of footer.
let childToRemove = document.querySelector("div.footer");
childToRemove.parentNode.removeChild(childToRemove);
//or childToRemove.remove()

//end of hw