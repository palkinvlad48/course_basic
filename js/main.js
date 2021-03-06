//$(document).ready(function () {
let nameAutor, nameImg = ""
const setData = [
  {
    src: './img/future_001.jpg',
    name: 'Без названия',
    autor: "Кандинский Василий",
    date: "1922-1924",
    descr: "Картина написана в 1922 г. ...",
  },
  {
    src: 'realism_022.jpg',
    name: '"Женщина с граблями"',
    autor: "Казимир Малевич ",
    date: "1931-1932",
    descr: "Картина из второй серии крестьянского цикла работ автора. К.Малевич принялся за ее создание в 1930-1931 годах, после того, как<br> 1-й цикл был утерян после Берлинской и Варшавской выставок в 1927 году.",
  }, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {},
  {}, {}, {},
  {
    src: 'realism_028.jpg',
    name: 'Незнакомка',
    autor: "Крамской Иван Николаевич",
    date: "1931-1932",
    descr: 'Картина "Незнакомка" написана в 18... г.<br>На ней он запечатлел....',
  },
  {
    src: '',
    name: 'Незнакомка',
    autor: "Крамской Иван Николаевич",
    date: "1931-1932",
    descr: "Картина 'Незнакомка' написана в 18... г.<br>В ней он запечатлел....",
  }, {}, {}, {},
  {
    src: '',
    name: 'Портрет Ге',
    autor: "Неизвестен",
    date: "1980...",
    descr: "Портрет русского живописца Ге....",
  },
  {
    src: '',
    name: 'Портрет Крамского Ивана Николаевича',
    autor: "С фото",
    date: "1980...",
    descr: "Портрет русского живописца Крамского Ивана Николаевича....",
  }, {},
  {
    src: '',
    name: '"Радостная Структура"',
    autor: "Кандинский Василий ",
    date: "1980...",
    descr: "Какие треугольники и пилы! Веселых ярких красок перелив из звездных блесток, нот цветов и пыли, в картине художника Кандинского Василия слышен радостный мотив ...",
  },
  {
    src: '',
    name: '"Истина"',
    autor: "Ге Никола́й",
    date: "1980...",
    descr: "Картина изображает..."
  }, {},
];


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

  var mySwiper = new Swiper('.galery-container', {
    slidesPerView: 3,
    slidesPerColumn: 2,
    slidesPerColumnFill: "row",// как заполнять слайд слайдами
    spaceBetween: 38,
    loop: false,
    updateOnWindowResize: true,
    parallax: false,

    /*
    pagination: {
      el: '.swiper-pagination',
      dynamicBullets: false,
      clickable: true,
      renderBullet: function (index, slideNum) {
        return '<span class="' + className + '">' + (index + 1) + '</span>';
        //return '<span class="' + className + '"></span>';
      },
    },/* prob */
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'fraction',/**/
      currentClass: 'swiper-pagination-current',
      totalClass: 'swiper-pagination-total',
      formatFractionCurrent: function formatFractionCurrent(number) {
        return number;
      },/*
      formatFractionTotal: function formatFractionTotal(number) {
        console.log('total-' + number)
        return '/' + number;
      },
      renderCustom: function (swiper, current, total) {
        return current + ' of ' + total;
      },/*
      renderFraction: function (currentClass, totalClass) {
        return '<span className="' + currentClass + '"></span>' +
          ' of ' +
          '<span className="' + totalClass + '"></span>';
      }
      /*
      renderFraction: function (currentClass, totalClass, index, total) {
        return '<span class="' + currentClass + '">' + index + ' </span>' +
          ' / ' +
          '<span class="' + totalClass + '">' + total + ' </span>';
      },/**/
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
    slidesPerColumn: 1,
    loop: false,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },/*
    renderFraction: function (num_curr, num_all) {
      return '<span className="' + num_curr + '">(index + 1)</span>' +
        ' / ' + '<span className="' + num_all + '"></span>';
    },/**/
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      type: 'fraction',
      dynamicBullets: false,
      currentClass: '.swiper-pagination-current',
      totalClass: '.swiper-pagination-total',
      renderBullet: function (index, num_curr) {
        console.log('bullet-' + index)
        return '<span class="' + num_curr + '">' + (index + 1) + '</span>';
        //return '<span class="' + num_curr + '"></span>';
      },/**/
    },
    scrollbar: {
      el: '.swiper-scrollbar',
    },

  })
}
initSwiperEditions()

/* заготовка
paginationHTML = "<span class=\"" + params.currentClass + "\"></span>" + ' / ' + ("<span class=\"" + 
params.totalClass + "\"></span>");

*/
/* editions: по клику - текущий сайд / общее число */
function clickSlide() {
  const targ = document.querySelectorAll('.editions-slide')
  const valueR = document.getElementById('currE')
  targ.forEach((el) => {
    el.addEventListener('click', function (e) {
      // e.stopPropagation()
      const tarE = e.target
      let valSpan = tarE.parentNode.parentElement.ariaLabel
      //console.log('1-' + valSpan)
      valueR.innerHTML = valSpan
      //swiper-slide swiper-slide-active
    })
  })
}
clickSlide()

/* вывод номера текущего слайда - не получилось */
function initGalery() {
  const targ = document.querySelector('.swiper-slide-active') //.swiper-slide')
  const valueSpan = document.getElementById('currG')
  //console.log()
  valueSpan.innerHTML = targ.ariaLabel
}
initGalery()

/* partners */
function initSwiperPartners() {
  var mySwiperPartners = new Swiper('.swiper-partners-container', {
    slidesPerView: 3,
    slidesPerColumn: 1,
    loop: false,/*
    centerSlides: true,*/
    direction: 'horizontal',
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
let tarOld = ''
/* для кнопки аккордеона */
function accordionBtnClick() {

  $('body').on('click', '.list-autors', function (event) {

    let tar = this
    let butId = tar.id
    let idInt, ind = 0
    let delta = 0
    let delta_icon = 0
    //   console.log(butId)

    if (butId) {
      if (butId.length < 8) {
        idInt = parseInt(butId.slice(-1))
        tarOld = 'domeniko'
      } else {
        idInt = parseInt(butId.slice(-2))
        if (idInt > 14) {
          delta = 14
          delta_icon = 20
          tarOld = 'kramskoy'
        }
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
accordionBtnClick()

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
/* скролл от шапки  */
function scrollMenu() {

  const targ = document.querySelectorAll('.menu-head__item-link')

  targ.forEach((elem) => {
    elem.addEventListener('click', function (e) {

      e.preventDefault()

      const tar = e.target
      let delY = 0
      let tarhref = $(tar).attr('href')

      if (tarhref === "#about-us") {
        delY = 650
      }

      $('html, body').animate({ scrollTop: $(tarhref).offset().top + delY }, 600)

    })
  })
}
scrollMenu()
/* фильтр галереи */
let valueFilterGalery = 0

function filterGalery() {
  const sel = document.getElementById('selectCustom')

  valueFilterGalery = sel.addEventListener('change', () => {
    let valt = sel.options[sel.selectedIndex].value;
    valueFilter(valt)
  })

  function valueFilter(nam) {
    valueFilterGalery = nam

    const arrGalery = document.querySelectorAll('.swiper-slide')

    let i = 0
    let ii = 0

    arrGalery.forEach((elem) => {
      const slgnСurrent = elem.dataset.filtr

      if (slgnСurrent != nam) {
        elem.parentNode.removeChild(elem)
        ii++
      } else {
        i++
      }

    })
    console.log('elem - ' + i + '-' + ii)
  }
}
filterGalery()

/* карточка автора */

function showAutor() {
  /*
    let root = document.querySelector(':root')
    const rootStyles = getComputedStyle(root)
    console.log(root)
    tarOld = rootStyles.getPropertyValue('--name-current')
    console.log(tarOld)*/
  let tarO = Object
  const tar = document.querySelectorAll('.wrap-autor-link')

  tar.forEach((elem) => {

    elem.addEventListener('click', function (e) {

      e.preventDefault()

      const tarEv = e.target

      if (tarEv.dataset.link != tarOld) {
        tarO = document.getElementById(tarOld)

        const tarNew = document.getElementById(tarEv.dataset.link)

        //  console.log('autor-'+tarNew)

        tarNew.classList.toggle('card-hide')

        tarO.classList.add('card-hide')

        tarOld = tarEv.dataset.link
      }
    })
  })

}
showAutor()
/* Замена рисунка при ховере */
function uploadImgPartner() {

  const target = document.querySelectorAll('.img-partner')

  target.forEach((elem) => {

    elem.addEventListener('mouseover', function (e) {
      const act_img = e.target
      //console.log('act_img-' + '-' + act_img.src); 
      let varI = act_img.src.indexOf('svg');
      
      let varN = act_img.src.substr(0, varI) + 'png'
      
      act_img.src = varN
    })
    elem.addEventListener('mouseout', function (e) {
      const noact_img = e.target
      
      let varI = noact_img.src.indexOf('.png');
      
      let varN = noact_img.src.substr(0, varI) 
      
      noact_img.src = varN + '.svg'
    })
  })
}
uploadImgPartner()