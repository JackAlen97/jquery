var listItems = document.getElementsByTagName("li");
for (var item = 0; item < listItems.length; item++) {
  //for (var item in listItems){

  //we created element tag span

  var span = document.createElement("span");
  //we create a text with letter x
  var textNode = document.createTextNode("x");
  // we give the span className
  span.className = "close";
  //we added the x letter inside the span
  span.appendChild(textNode);
  // we will add each span created to each listItems inside the for loop
  listItems[item].appendChild(span);
  console.log(listItems[item]);
}

var closeSpanArray = document.getElementsByClassName("close");

for (
  let closeButtonIndex = 0;
  closeButtonIndex < closeSpanArray.length;
  closeButtonIndex++
) {
  //closeButtonArray[closeButtonIndex].addEventListener("click", function(){

  // }
  closeSpanArray[closeButtonIndex].addEventListener("click", function () {
    //this.StyleSheet.display="none"
    let parent = this.parentElement;

    parent.style.display = "none";
  });
}
//var listItem = document.getElementsByClassName("close");

//for (let closeButtonIndex = 0; closeButtonIndex<listItem.length; closeButtonIndex++) {
//closeButtonArray[closeButtonIndex].addEventListener("click", function(){

// }
// listItem[closeButtonIndex].addEventListener("click", function () {
//this.StyleSheet.display="none"
// let parent = this.parentElement;

// parent.style.display = "none";
// });
//}

var list = document.querySelector("ul");
list.addEventListener("click", function (ev) {
  if (ev.target.tagName === "LI") {
    ev.target.classList.toggle("completed");
  }
});

var addButton = document.getElementById("addButton");
addButton.addEventListener("click", function () {
  let newLi = document.createElement("li");
  let inputValue = document.getElementById("tasksInput").value;
  let newTextNode = document.createTextNode(inputValue);

  newLi.appendChild(newTextNode);
  //list.appendChild(newLi);
  if (inputValue !== "") {
    list.appendChild(newLi);
  } else {
    alert("please enter a value");
  }

  document.getElementById("tasksInput").value = "";
  let newClose = document.createElement("span");
  let newCloseXText = document.createTextNode("x");
  newClose.className = "close";
  newClose.appendChild(newCloseXText);
  newLi.appendChild(newClose);

  for (let i = 0; i < closeSpanArray.length; i++) {
    closeSpanArray[i].addEventListener("click", function () {
      var parent = this.parentElement;
      parent.style.display = "none";
    });
  }
});
