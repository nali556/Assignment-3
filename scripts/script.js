//1) Select the section with an id of container without using querySelector.
const selectedContainer = document.getElementById("container")

//2) Select the section with an id of container using querySelector.
const queryContainer = document.querySelector("#container")

//3) Select all of the list items with a class of "second".
const allSecond = document.querySelectorAll(".second")

//4) Select a list item with a class of third, but only the list item inside of the ol tag.
const olThird = document.querySelector("ul .third")

//5) Give the section with an id of container the text "Hello!".
queryContainer.append("Hello!")

//6) Add the class main to the div with a class of footer.
const footer = document.querySelector(".footer")
footer.classList.add("main")

//7) Remove the class main on the div with a class of footer.
footer.classList.remove("main")

//8) Create a new li element.
const newli = document.createElement("li")

//9) Give the li the text "four".
const newContent = document.createTextNode("four")
newli.appendChild(newContent)

//10) Append the li to the ul element.
const ulSelector = document.querySelector("ul")
ulSelector.append(newli)

//12) Loop over all of the lis inside the ol tag and give them a background color of "green".
const olSelector = document.querySelector("ol")
const listItems = olSelector.children
const listArr = Array.from(listItems)
listArr.forEach(element => element.style.color = "green")

//13) Remove the div with a class of footer.
//footer selected before
footer.remove()