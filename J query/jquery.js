window.addEventListener("load", function () {
  //cocede here when the page is  laoded
});
$(document).ready(function () {
  //cocede here when the page is  laoded using jquery
});

//document.getElementById("idname")
//document.getElementByClassName("classname")
//ducment.getElementByTagName("p")

//slector in jquery
$(".classname");
$("p");
$("#idname");

// click.handler
//this is the normaal javascript
var button = document.getElementById("idname");

// oiho
button.addEventListener("click", function () {
  //cocede here
});
//same in jquery
$("idname").click(function () {
  //cocede here
});
//JS.css
document.getElementsByTagName("p").style.display = "none";
document.getElementsByTagName("p").style.display = "white";
//jquery.CSS
$("p").css("background-color", "transparent");
//if i eant to hide anyh thing in the code
$("classname").hide();

//<img src="img.png"/>
$("img").attr("scr", "img2.png");
$('img').attr('width', "100%");

$(".classname").height(50);
