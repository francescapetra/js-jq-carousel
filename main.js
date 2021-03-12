$(function(){
//alert("debug");
// creo variabili esterne per i miei due elementi click
var previous = $(".prev");
var next = $(".next");
var bullet = $(".nav >i")
//click al prev
previous.click(
  function(){
    var imgShow = $(".images img.active");
    var imgLast = $(".images img.last");
    var imgFirst = $(".images img.first");

    imgShow.removeClass("active");

      if (imgShow.hasClass("first") == true) {
        imgLast.addClass("active");

      }else {
        imgShow.prev().addClass("active");
      }
  }
);
// click al next
next.click(
  function(){
    var imgShow = $(".images img.active");
    var imgLast = $(".images img.last");
    var imgFirst = $(".images img.first");

    imgShow.removeClass("active");

      if (imgShow.hasClass("last") == true) {
        imgFirst.addClass("active");
      }else {
        imgShow.next().addClass("active");
      }
  }
);

bullet.click(
  function(){
    var bulletShow = $(".nav i.active");
    var bulletLast = $(".nav i.last");
    var bulletFirst = $(".nav i.first");

    bulletShow.removeClass("active");

      if (bulletShow.hasClass("last") == true) {
        bulletShow.addClass("active");
      }else {
        bulletShow.next().addClass("active");
  }
}
);






















  }
);
