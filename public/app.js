var initialize = function () {
  var location = { lat: 55.953252, lng:-3.188267 };
  var zoom = 12;
  var edinburgh = {
    center: location,
    zoom: zoom
  };
  var location2 = { lat: 25.761680, lng:-80.191790 };
  var miami = {
    center: location2,
    zoom: zoom
  };
  var container = document.querySelector( '#main-map' );
  var mainMap = new MapWrapper( container, edinburgh );
  mainMap.addMarker( location);
  mainMap.addMarkerOnClick();

  var button1 = document.querySelector( '#btn1' );
  button1.addEventListener('click', function(){
    mainMap = new MapWrapper( container, edinburgh);
  });

  var button2 = document.querySelector( '#btn2' );
  button2.addEventListener('click', function(){
    mainMap = new MapWrapper( container, miami);
  });
  
};

window.addEventListener('load', initialize);


