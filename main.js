function previousSlide(){
  var imgShow = $(".images img.active");
  var imgLast = $(".images img.last");
  var bulletShow = $(".fas.fa-circle.active")
  var bulletLast = $(".fas.fa-circle.last")

  imgShow.removeClass("active");
  bulletShow.removeClass("active");

  if (imgShow.hasClass("first") == true && bulletShow.hasClass("first") == true) {
    imgLast.addClass("active");
    bulletLast.addClass("active");
  }else {
    imgShow.prev().addClass("active");
    bulletShow.prev().addClass("active");
  }
  console.log(bulletShow);
}

function nextSlide(){
  var imgShow = $(".images img.active");
  var imgFirst = $(".images img.first");
  var bulletShow = $(".fas.fa-circle.active")
  var bulletFirst = $(".fas.fa-circle.first")

  imgShow.removeClass("active");
  bulletShow.removeClass("active");

  if (imgShow.hasClass("last") == true && bulletShow.hasClass("last") == true) {
    imgFirst.addClass("active");
    bulletFirst.addClass("active");
  }else {
    imgShow.next().addClass("active");
    bulletShow.next().addClass("active");
  }
  console.log (bulletShow);
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
