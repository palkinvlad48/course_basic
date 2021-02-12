//$(document).ready(function () {
let nameAutor = "123"
const setData = {
  images: [{},
  {
    name: '',
    autor: "Кандинский Василий",
    descr: "Картина написана в 1922 г. ...",
  },
  {
    name: 'Заросший пруд',
    autor: "Серов ",
    descr: "Картина написана в 1889 г.<br>В ней он запечатлел....",
  }, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {},
  {}, {}, {},
  {
    name: 'Незнакомка',
    autor: "Крамской Иван Николаевич",
    descr:"Картина написана в 1889 г.<br>В ней он запечатлел...." ,
  }, {}, {}, {}, {}, {}, {}, {},
  {
    name: 'Картина Радостная Структура',
    autor: "Кандинский Василий ",
    descr: "Какие треугольники и пилы! Веселых ярких красок перелив из звездных блесток, нот цветов и пыли, в картине художника Кандинского Василия слышен радостный мотив ...",
  }, 
  {}, {},
  ],
}
/* заготовка модального окна */
function clickGalery() { //alert('yes')
  const targ = document.querySelectorAll('.swiper-slide')
  const valueG = document.getElementById('currG')

  targ.forEach((el) => {
    el.addEventListener('click', function (e) {
      const tarG = e.target
      let valSpan = tarG.parentElement.ariaLabel
      valueG.innerHTML = valSpan
      let img = tarG.src.indexOf('/img') + 5
      let nameImg = tarG.src.slice(img)
      let num = nameImg.slice(-7, -4)
      let numInt = parseInt(num)
      if (tarG.src.includes('_0') || setData.images[numInt].descr != undefined) {

        //      console.log(nameImg + 'beg-' + img + '-end -' + num);
        viewImg(nameImg, num)
      } else { alert('Описание картины не готово! ') }
    })
  })

  function viewImg(name, num) {
    console.log(name)
    const objectV = document.getElementById('imgV')
    // .toggle('modal-window')
    objectV.classList.remove('img-hide')
    objectV.classList.add('modal-window')

    let numInt = parseInt(num)

    objectV.innerHTML = "<img class='modal-img' src='./img/" + name + "'>" +
      "<div class='modal-img-descr'>" + setData.images[numInt].descr + "</div>";
    $('#imgV').css({ 'left': '500px' })
    //objectV.nextSibling.src = './img/' + name + '>';

  }
}
clickGalery()
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
    slidesPerColumnFill: "row",// как заполнять слайд слайдами
    spaceBetween: 38,
    loop: true,
    updateOnWindowResize: true,
    parallax: false,
    pagination: {
      el: '.swiper-pagination',
      dynamicBullets: false,
      clickable: true,/*
      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + (index + 1) + '</span>';
        return '<span class="' + className + '"></span>';
      },*/
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
    },/*
    renderFraction: function (num_curr, num_all) {
      return '<span className="' + num_curr + '">(index + 1)</span>' +
        ' / ' +
        '<span className="' + num_all + '"></span>';
    },/**/
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: false,

      renderBullet: function (index, num_curr) {
        //   console.log('bullet-'+index)
        return '<span class="' + num_curr + '- yes' + '">' + (index + 1) + '</span>';
        //return '<span class="' + num_curr + '"></span>';
      },/**/
    },
    scrollbar: {
      el: '.swiper-scrollbar',
    },


  })

}
initSwiperEditions()
/* заготовка */
function clickSlide() {
  const targ = document.querySelectorAll('.editions-slide')
  const valueR = document.getElementById('currE')
  targ.forEach((el) => {
    el.addEventListener('click', function (e) {
      // e.stopPropagation()
      const tarE = e.target
      let valSpan = tarE.parentNode.parentElement.ariaLabel
      console.log('1-' + valSpan)
      valueR.innerHTML = valSpan
      //swiper-slide swiper-slide-active
    })
  })
}
clickSlide()

/* заготовка модального окна 
function clickGalery() {
  const targ = document.querySelectorAll('.swiper-slide')
  const valueG = document.getElementById('currG')
  //console.log(valueG.parentElement + '-' + targ.ariaLabel)
  valueG.innerHTML = targ.ariaLabel

  targ.forEach((el) => {
    el.addEventListener('click', function (e) {
      const tarG = e.target
      let valSpan = tarG.parentElement.ariaLabel
      valueG.innerHTML = valSpan
      let img = tarG.src.indexOf('img/')
      let nameImg = tarG.src.slice(img + 4)
      let num = nameImg.slice(-5, -4)
      console.log('beg-' + num + '-end')
      viewImg(nameImg, num)
    })
  })
  
  function viewImg(name, num) {
    console.log(name)
    const objectV = document.getElementById('imgV')
    //$('#imgV').classList.add('modal-window') //toggle('modal-window')
    objectV.classList.remove('img-hide')
    objectV.classList.add('modal-window')
    //$('#imgV')
    objectV.innerHTML = "<img src='./img/" + name + "'>" +
      "<div style='color: #fff;'>" + descr[num] + "</div>";
    $('#imgV').css({ 'left': '500px' })
    //objectV.nextSibling.src = './img/' + name + '>';
    console.log('Yes: ' + name + '-' + objectV.classList)
    //const ob = objectV.parentNode.appendChild('img')
    //objectV.innerHTML = "<img class='.img-proba' src=" + "./img/"+ name +">";
    //console.log(objectV.innerHTML)
  }
}
clickGalery() */
/* вывод номера текущего слайда */
function initGalery() {
  const targ = document.querySelector('.swiper-slide-active') //.swiper-slide')
  const valueSpan = document.getElementById('currG')
  //console.log()
  valueSpan.innerHTML = targ.ariaLabel;
}
initGalery()

/* partners */
function initSwiperPartners() {
  var mySwiperPartners = new Swiper('.swiper-container', {
    slidesPerView: 3,
    loop: true,
    centerSlides: true,
    /*  direction: 'horizontal',
    height: '240px',*/
    autoHeight: false,
    slideClass: 'partners-slide',/**/
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
        delY = 750
      }

      $('html, body').animate({ scrollTop: $(tarhref).offset().top + delY }, 600)

    })
  })
}
scrollMenu()
/* */
function scrollContacts() {

  const targ = document.querySelector('.btn-hero')

  targ.addEventListener('click', function (e) {

    e.preventDefault()

    const tar = e.target
    const tarhref = $(this).attr('href')

    $('html, body').animate({ scrollTop: $(tarhref).offset().top }, 700)

  })
}
scrollContacts()

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