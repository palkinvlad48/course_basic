//$(document).ready(function () {
/* Italia */
function initAccItalia() {
  $("#accordion_1").accordion({
    collapsible: true,
    active: false,
    heightStyle: 'content'
  });
}
initAccItalia()
/* Russia */
function initAccRussia() {
  $("#accordion_2").accordion({
    collapsible: true,
    active: false,
    heightStyle: 'content'
  });
}
initAccRussia()
/* select */
function initSelect() {

  const element = document.querySelector('#selectCustom')
  const choices = new Choices(element, {
    searchEnables: false,
    searchChoices: false,
    //  silent: true,
    noResultsText: '', //пункт не найден',
    itemSelectText: '',//кликните для выбора',
    shouldSort: false, //порядок следования
  })
}
initSelect()
/* галерея */
function initSwiper() {

  var mySwiper = new Swiper('.swiper-container', {
    slidesPerView: 3,
    slidesPerColumn: 2,
    spaceBetween: 39,
    loop: false,
    updateOnWindowResize: true,
    parallax: false,
    pagination: {
      el: '.swiper-pagination',
      dynamicBullets: false,
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + (index + 1) + '</span>';
        return '<span class="' + className + '"></span>';
      },
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  })
}
initSwiper()

/* editions */
function initSwiperEditions() {
  var mySwiperEditions = new Swiper('.editions-container', {

    slidesPerView: 3,
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    renderFraction: function (currentClass, totalClass) {
      return '<span className="' + currentClass + '"></span>' +
        ' of ' +
        '<span className="' + totalClass + '"></span>';
    },
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  })
}
initSwiperEditions()

/* partners */
function initSwiperPartners() {
  var mySwiperPartners = new Swiper('.swiper-partners-container', {

    slidesPerView: 3,
    loop: false,
    centerSlides: true,
    direction: 'horizontal',/*
  height: '240px',*/
    autoHeight: false,
    slideClass: 'partners-slide',
    slideNextClass: 'slide-next',
    slidePrevClass: 'slide-prev',
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  })
}
initSwiperPartners()

// признак клика аккордеона
let activeBut = [false, false, false, false, false, false, false, false]
let prevId = 0
let prevTar, tarC = Object
/* для иконки аккордеона */
function accordionIconClick() {

  $('body').on('click', '.circle', function (event) {

    event.stopPropagation()
    let tar = event.target
    console.log(tar + '-' + activeBut)
    let butId = tar.id
    let ind = 0
    let delta = 0
    //let ind_icon = 0

    if (butId > 10) {
      delta = 20
      //ind_icon = 
    }

    if (butId != undefined) {
      ind = parseInt(butId) - delta

      console.log('до: id' + butId + '  - ' + activeBut[ind] + ' prevId - ' + prevId + '-' + activeBut[prevId])

      if (ind != prevId) {
        if (!activeBut[ind]) {
          tar.classList.toggle('circle-up')
          activeBut[ind] = true/*
          if (activeBut[prevId]) {
            prevTar.classList.toggle('circle-up')
            activeBut[prevId] = false
          }*/
        }
      } else {
        tar.classList.toggle('circle-up')
        activeBut[prevId] = false
      }
    }
    console.log('tek1: id - ' + butId + '  - ' + activeBut[ind] + ' prevId - ' + prevId + '-' + activeBut[prevId])

    prevId = ind
    prevTar = tar
    console.log('tek2: id ' + butId + '  - ' + activeBut[ind] + ' prevId - ' + prevId + '-' + activeBut[prevId])


  })
}
/* для кнопки аккордеона */
function accordionBtnClick(num) {

  $('#accordion_' + num).on('click', '.list-autors', function (event) {

    let tar = this
    let butId = tar.id
    let idInt, ind = 0
    let delta = 0
    let delta_icon = 0

    if (num === 2) {
      delta = 14
      delta_icon = 20
    }

    if (butId) {
      if (butId.length < 8) {
        idInt = parseInt(butId.slice(-1))
      } else {
        idInt = parseInt(butId.slice(-2))
      }
      idInt = idInt - delta
      ind = Math.ceil(idInt / 2)

      tarC = document.getElementById(ind + delta_icon)
      //console.log('No :' + idInt + ' id- ' + ind + ' - ' + activeBut[ind])

      if (ind != prevId) {
        if (!activeBut[ind]) {
          tarC.classList.toggle('circle-up')
          activeBut[ind] = true
          if (activeBut[prevId]) {
            prevTar.classList.toggle('circle-up')
            activeBut[prevId] = false
          }
        }
      } else {
        tarC.classList.toggle('circle-up')
        activeBut[prevId] = false
      }
    }
    else {
      console.log('err: ' + activeBut)
    }
    prevId = ind
    prevTar = tarC
    //console.log('tek2: ' + ind + '-' + activeBut[prevId] + '; prev - ' + prevId + '-' + activeBut[prevId])
  })
}
accordionIconClick()
accordionBtnClick(1)
accordionBtnClick(2)
/* все новости */
function eventsAllClick() {

  const target = document.querySelector('.all-events')

  target.addEventListener('click', function () {

    const cart = document.querySelectorAll('.card-events')
    const par = document.querySelector('.events-body')

    par.classList.toggle('events-body-wrap')

    cart[3].classList.remove('card-hidden')
    cart[4].classList.remove('card-hidden')
    cart[5].classList.remove('card-hidden')

    this.classList.add('card-hidden')
    //console.log(cart[3].classList)
  })
}
eventsAllClick()
/* скролл от меню  */
function scrollMenu() {

  const targ = document.querySelectorAll('.menu-head__item-link')

  targ.forEach((elem) => {
    elem.addEventListener('click', function (e) {

      e.preventDefault()

      const tar = e.target
      let delY = 0
      let tarhref = $(tar).attr('href')

      if (tarhref === "#about-us") {
        delY = 800
      }

      $('html, body').animate({ scrollTop: $(tarhref).offset().top + delY }, 600)

    })
  })
}
scrollMenu()
/* */
function scrollContacts() {

  const targ = document.querySelector('.btn-head')

  targ.addEventListener('click', function (e) {

    e.preventDefault()

    const tar = e.target
    const tarhref = $(this).attr('href')

    $('html, body').animate({ scrollTop: $(tarhref).offset().top }, 700)

  })
}
scrollContacts()

/* фильтр по цене */
let valueFilterGalery = 0

function filterGalery() {
  const sel = document.getElementById('selectCustom')

  valueFilterGalery = sel.addEventListener('change', () => {
    let valt = sel.options[sel.selectedIndex].value;
    valueFilter(valt)
  })

  function valueFilter(nam) {
    valueFilterGalery = nam
    //  console.log(valueFilterGalery);

    const arrGalery = document.querySelectorAll('.swiper-slide')
    console.log(nam + ' ' + arrGalery)
    let i = 0
    let ii = 0

    arrGalery.forEach((elem) => {
      const slgnСurrent = elem.dataset.filtr
    
      if (slgnСurrent != nam) {
        elem.parentNode.removeChild(elem);
        ii++
      } else {
        i++
      }
      
    })
    console.log('elem - '+ i + '-' + ii)
  }
}
filterGalery()
//console.log(valueFilterGalery)