/*  $(window).mousemove(function (pos) {
      $(".custom-cursor").css({ "transform": "translate3d(" + pos.originalEvent.clientX + "px, " + pos.originalEvent.clientY + "px, 0px)" });
    });
 
    function toggleHover(isHover) {
      $(".custom-cursor .hover").toggle(isHover);
    }
 
    $('.hover-block').hover(function () {
      toggleHover(true);
    }, function () {
      toggleHover(false);
    });*/

targ = document.querySelectorAll('.future .swiper-slide')
let tr = false
//targ.forEach((el) => 
for (let i = 0; i < targ.length; i++) {

  targ[i].addEventListener('mouseover', function (e) {
    //e.stopPropagation()
    const tarh = e.target
    let top = 0,
      left = 0
    let xx = getCoords(tarh)
    let dY = 0
    let topM = pageYOffset
    let topG = $('#galery').offset().top;
    //console.log('topm - ' + topM + ' topg -' + topG + ' xx - ' + xx.top)
    dY = topM - topG + 30;
    $(".galery-hover").css({
      "left": xx.left + 30,
      "top": xx.top + dY
    })
    targ[i].addEventListener('click', clickGalery)
    tr = true
  })
  targ[i].addEventListener('mouseout', function (e) {
    $(".galery-hover").css({
      "left": - 630
    })
  })/**/
  if (tr) { break }
}

function getCoords(elem) {
  var box = elem.getBoundingClientRect();
  return {
    top: box.top,
    left: box.left + pageXOffset
  }
}

const hovact = document.querySelector(".galery-hover")
hovact.addEventListener('click', function () {
  clickGalery()
  $(".galery-hover").css({
    "left": - 630
  })/* не всегда срабатывает !? причина в дрожании ховера ??? */
})
/* не работает !???
    btn_s.onmouseover = function () {
      $('#s_inp').css({ "color": "red" })
      console.log('on')
    };
  /*btn_s.onmouseout = function () {
    $('s_inp').css({ "border-bottom": "1px solid #fff" }) };*/
