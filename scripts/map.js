jQuery.ajax({
  url: "/ymap/map/" + uid,
  type: 'get',
  dataType: 'json',
  success: function(data) {
    addr = data;
    var myMap = new ymaps.Map("map", {
      center: [data.city[1], data.city[0]],
      zoom: 11
    }),
    // Первый способ задания метки
    //myPlacemark = new ymaps.Placemark([55.8, 37.6]),
    // Второй способ
    myGeoObject = new ymaps.GeoObject({
      // Геометрия.
      geometry: {
        // Тип геометрии - точка
        type: "Point",
        // Координаты точки.
        coordinates: [data.address[1], data.address[0]]
      },

      properties: {
        iconContent: data.address_raw
      }
    }, {

      preset: 'twirl#pinkStretchyIcon'

    });

    // Добавляем метки на карту
    myMap.geoObjects
    .add(myGeoObject);
    myMap.controls
    .add('zoomControl')
    .add('typeSelector');
  }
});

