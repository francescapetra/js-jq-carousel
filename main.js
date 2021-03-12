function previousSlide(){
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

function nextSlide(){
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


$(function(){

var previous = $(".prev");
var next = $(".next");
var bullet = $(".nav .fas.fa-circle");
//click al prev
previous.click(
  function(){
    previousSlide();
  }
);

// click al next
next.click(
  function(){
    nextSlide();
  }

);
// bulletShow
 bullet.click(
  function(){
  var imgNow = $(".images img.active");
  var img = $(".images img");
  var bulletShow = $(".nav .fas.fa-circle.active")
  var indice = bullet.index($(this));


  $(this).addClass("active");
  bulletShow.removeClass("active");
  imgNow.removeClass("active");
  img.eq(indice).addClass("active");

  }
);

// keydown
$(document).keydown(
  function(e){
    if (e.keyCode == 37){
      previousSlide();
    }
    else if (e.keyCode == 39){
      nextSlide();
    }
  }
);

  }
);
