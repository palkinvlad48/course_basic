/* */
ymaps.ready(init);

function init() {
  // Создание карты
  var myMap = new ymaps.Map("myMap_1", {
    center: [55.758542, 37.600993],
    zoom: 16
  });

  /* Создаем геообъект с типом геометрии "Точка" */
  myGeoObject = new ymaps.GeoObject({
    geometry: {
      type: "Point",
      coordinates: [55.758542, 37.600993]
    },
    properties: {
      iconContent: 'Я',
      hintContent: 'здесь'
    }
  })

  /* собственное изображение 
  var myPlacemark = new ymaps.Placemark([55.758542, 37.600993], {}, {
    iconLayout: 'default#image',
    iconImageHref: '../svg/ball.svg',
    iconImageSize: [28, 40],
    iconImageOffset: [-8, -45]
  });
  
    var glyphIcon = new ymaps.Placemark([55.758542, 37.600993], {}, {
      preset: 'islands#redGlyphIcon',
      iconGlyph: 'home' // ???
    });
    /**/
  myMap.geoObjects
    .add(myGeoObject)
  //  .add(myPlacemark)
  //.add(glyphIcon)
}
