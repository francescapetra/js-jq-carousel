$(function(){
//alert("debug");
// creo variabili esterne per i miei due elementi click
var previous = $(".prev");
var next = $(".next");
//click al prev
previous.click(
  function(){
    var imgShow = $(".images img.active");
    var imgLast = $(".images img.last");

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

    imgShow.removeClass("active");

      if (imgShow.hasClass("first") == true) {
        imgLast.addClass("active");
      }else {
        imgShow.prev().addClass("active");
      }
  }
);
























  }
);
