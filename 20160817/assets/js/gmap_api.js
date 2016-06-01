    var mapCanvas = document.getElementById('map-canvas');
    var mapOptions = {
        center: new google.maps.LatLng(24.909439, 91.833800),
        zoom: 3,
        scrollwheel: false,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    }
    var map = new google.maps.Map(mapCanvas, mapOptions)

    var marker = new google.maps.Marker({
            position: new google.maps.LatLng(24.909439, 91.833800),
            title:"Boots4 Office"
        });

        // To add the marker to the map, call setMap();
        marker.setMap(map);

    //google.maps.event.addDomListener(window, 'load', initialize);

