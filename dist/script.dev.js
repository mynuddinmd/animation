"use strict";

//movement animation to happen
var card = document.querySelector(".card");
var container = document.querySelector(".container"); // items

var title = document.querySelector(".title");
var sneaker = document.querySelector(".sneaker img");
var purchase = document.querySelector(".purchase button");
var description = document.querySelector(".info h3");
var sizes = document.querySelector(".sizes"); //moving animation event 

container.addEventListener("mousemove", function (e) {
  var xAxis = (window.innerWidth / 2 - e.pageX) / 25;
  var yAxis = (window.innerHeight / 2 - e.pageY) / 25;
  card.style.transform = "rotateY(".concat(xAxis, "deg) rotateX(").concat(yAxis, "deg)");
}); //Animate In

container.addEventListener("mouseenter", function (e) {
  card.style.transform = "none"; // popout

  title.style.transform = "translateZ(150px)";
  sneaker.style.transform = "translateZ(200px) rotateZ(-45deg)";
  description.style.transform = "translateZ(125px)";
  sizes.style.transform = "translateZ(100px)";
  purchase.style.transform = "translateZ(75px)";
}); //Animate out

container.addEventListener("mouseleave", function (e) {
  card.style.transform = "all 0.5s ease";
  card.style.transform = "rotateY(0deg) rotateX(0deg)"; //popback

  title.style.transform = "translateZ(0px)";
  title.sneaker.transform = "translateZ(0px) rotateZ(0deg)";
  title.description.transform = "translateZ(0px)";
  title.sizes.transform = "translateZ(0px)";
  title.purchase.transform = "translateZ(0px)";
});
//# sourceMappingURL=script.dev.js.map
