$(function(){
//alert("debug");
// creo variabili esterne per i miei due elementi click
var previous = $(".prev");
var next = $(".next");
var bullet = $(".nav .fa-circle")
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
        imgShow.prev().addClass("active");
      }
  }
);

// bullet.click(
//   function(){
//     var imgShow = $(".images img.active");
//     var imgLast = $(".images img.last");
//
//     bullet.removeClass("active");
//
//       if (bullet.hasClass("first") == true) {
//         bullet.addClass("active");
//   }
// }
// );






















  }
);
