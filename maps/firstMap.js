var initialLocation;
var browserSupportFlag = new Boolean();

var toggleBounce = function(marker) {
    if(marker.getAnimation() !== null) {
        marker.setAnimation(null);
    }else{
        console.log(google.maps.Animation);
        marker.setAnimation(google.maps.Animation.DROP);
    }
};


var setMarker = function(position ,map){
    var marker = new google.maps.Marker({
        position: position,
        map: map
    });
    marker.setMap(null);
    marker.setMap(map);
    marker.addListener('click',function(){toggleBounce(marker)});
};

var showLocation = function(map){
    var address = $('#location').val();
    var url = 'http://maps.googleapis.com/maps/api/geocode/json?address='+address.replace(/\s/gi,'+');
    $.get(url,function(data){
        var address = data.results[0].geometry.location;
        initialLocation = new google.maps.LatLng(address.lat,address.lng);
        map.setCenter(initialLocation);
        setMarker(initialLocation,map);
    });
};

var handleNoGeolocation = function(errorFlag ,map) {
    if (errorFlag == true) {
        alert("Geolocation service failed.");
        initialLocation = india;
    } else {
        alert("Your browser doesn't support geolocation. We've placed you in India.");
        initialLocation = india;
    }
    map.setCenter(initialLocation);
}

var initializeMap = function() {
    var india = new google.maps.LatLng(21.0000, 78.0000);
    var map = new google.maps.Map($("#map")[0],{zoom: 8});
    if (navigator.geolocation) {
        browserSupportFlag = true;
        navigator.geolocation.getCurrentPosition(function(position) {
            initialLocation = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
            map.setCenter(initialLocation);
           setMarker(initialLocation ,map);
        }, function() {
            handleNoGeolocation(browserSupportFlag,map);
        });
    }
    else {
        browserSupportFlag = false;
        handleNoGeolocation(browserSupportFlag,map);
    }
    $('#btn').click(function(){showLocation(map)});
};
