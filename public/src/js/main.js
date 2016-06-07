function initMap() {
  geocoder = new google.maps.Geocoder();
  var gmapCanvas = document.getElementById("gmap_canvas");
    var geocoder;
    var map;
    var mapTitle = gmapCanvas.getAttribute("data-title");
    var mapAddress = gmapCanvas.getAttribute("data-address");
    var mapContent = gmapCanvas.getAttribute("data-content");
    var div = document.createElement("div");
    div.innerHTML = mapContent;
  var latlng = new google.maps.LatLng(-34.397, 150.644);
  var myOptions = {
    zoom: 14,
    center: latlng,
    mapTypeControl: true,
    mapTypeControlOptions: {
      style: google.maps.MapTypeControlStyle.DROPDOWN_MENU
    },
    navigationControl: true,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };
  map = new google.maps.Map(document.getElementById("gmap_canvas"), myOptions);
  if (geocoder) {
    geocoder.geocode({
      'address': mapAddress
    }, function(results, status) {
      if (status == google.maps.GeocoderStatus.OK) {
        if (status != google.maps.GeocoderStatus.ZERO_RESULTS) {
          map.setCenter(results[0].geometry.location);

          var infowindow = new google.maps.InfoWindow({
            content: '<b>'+mapTitle+'</b><br>'+mapContent,
            size: new google.maps.Size(180, 50)
          });

          var marker = new google.maps.Marker({
            position: results[0].geometry.location,
            map: map,
            title: mapAddress
          });
          infowindow.open(map, marker);
          google.maps.event.addListener(marker, 'click', function() {
            infowindow.open(map, marker);
          });

        } else {
          alert("No results found");
        }
      } else {
        alert("Geocode was not successful for the following reason: " + status);
      }
    });
  }
}

function setSubject() {
    $('select[name="location"]').change(function(){
        var location = $(this).val();
        $('input[name="subjectLine"]').val( 'New Contact For ' + location);
    });
}
$(document).ready(function() {
    setSubject();
    if($('#gmap_canvas').length ) {
       google.maps.event.addDomListener(window, 'load', initMap); 
    }
});