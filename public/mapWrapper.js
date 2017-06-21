var MapWrapper = function ( container, params ) {
  this.googleMap = new google.maps.Map( container, params);
}
var iconBase = 'https://maps.google.com/mapfiles/kml/shapes/';

MapWrapper.prototype = {
  addMarker: function (coords) {
    var infowindow = new google.maps.InfoWindow({
          content: "Hola Mundo"
        });
    var marker = new google.maps.Marker({
      position: coords,
      icon: iconBase + 'info-i_maps.png',
      title: "hola",
      map: this.googleMap
    });
    marker.addListener('click', function(){
      infowindow.open(this, marker);
    })
  },

  addClickEvent: function () {
    this.googleMap.addListener('click', function ( event ) {
      console.log("map has been clicked");
      console.log("lat: ",event.latLng.lat());
      console.log("lng: ",event.latLng.lng());
    });
  },

  addMarkerOnClick: function () {
    this.googleMap.addListener('click', function( event ){
      var coords = {
        lat: event.latLng.lat(),
        lng: event.latLng.lng()
      }
      this.addMarker( coords );
    }.bind( this ))
  }
}