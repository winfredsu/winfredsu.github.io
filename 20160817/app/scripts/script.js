function homepageResponsive() {
  // Homepage aboutus Image Responsive

    var introWidth = $('.introduction').width(),
        introHeight = $('.introduction').height(),
        bgImage = $('.introduction').find('img'),
        menuBgImages = $('.menu > div img');

    if (introWidth > introHeight) {

        bgImage.css({
            width: '100%',
            height: 'auto'
        });
        menuBgImages.css({
            width: '100%',
            height: 'auto'
        });

    } else {

        bgImage.css({
            width: 'auto',
            height: '100%'
        });
        menuBgImages.css({
            width: 'auto',
            height: '100%'
        });

    }

}

function addMarker(location, map, marker_icon) {
    var marker = new google.maps.Marker({
        position: location,
        map: map,
        icon: marker_icon
    });
}

function setBounce(marker) {
    marker.setAnimation(google.maps.Animation.BOUNCE);
    window.setTimeout(function(){
        marker.setAnimation(null);
    }, 2100);
}  

function mapInit() {
    /*  ---------------------
         Google Map Config.
        ---------------------  */
  
    var mapOptions = {
        zoom: 12,
        center: {lat: 40.674, lng: -73.946},  // Brooklyn.
        mapTypeId: 'customMapType'
        };
  
    var customMapType = new google.maps.StyledMapType(
        [
            {
                "featureType": "poi",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#747474"
                    },
                    {
                        "lightness": "23"
                    }
                ]
            },
            {
                "featureType": "poi.attraction",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#f38eb0"
                    }
                ]
            },
            {
                "featureType": "poi.government",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#ced7db"
                    }
                ]
            },
            {
                "featureType": "poi.medical",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#ffa5a8"
                    }
                ]
            },
            {
                "featureType": "poi.park",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#c7e5c8"
                    }
                ]
            },
            {
                "featureType": "poi.place_of_worship",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#d6cbc7"
                    }
                ]
            },
            {
                "featureType": "poi.school",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#c4c9e8"
                    }
                ]
            },
            {
                "featureType": "poi.sports_complex",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#b1eaf1"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "geometry",
                "stylers": [
                    {
                        "lightness": "100"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "labels",
                "stylers": [
                    {
                        "visibility": "off"
                    },
                    {
                        "lightness": "100"
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#ffd4a5"
                    }
                ]
            },
            {
                "featureType": "road.arterial",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#ffe9d2"
                    }
                ]
            },
            {
                "featureType": "road.local",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "simplified"
                    }
                ]
            },
            {
                "featureType": "road.local",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "weight": "3.00"
                    }
                ]
            },
            {
                "featureType": "road.local",
                "elementType": "geometry.stroke",
                "stylers": [
                    {
                        "weight": "0.30"
                    }
                ]
            },
            {
                "featureType": "road.local",
                "elementType": "labels.text",
                "stylers": [
                    {
                        "visibility": "on"
                    }
                ]
            },
            {
                "featureType": "road.local",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#747474"
                    },
                    {
                        "lightness": "36"
                    }
                ]
            },
            {
                "featureType": "road.local",
                "elementType": "labels.text.stroke",
                "stylers": [
                    {
                        "color": "#e9e5dc"
                    },
                    {
                        "lightness": "30"
                    }
                ]
            },
            {
                "featureType": "transit.line",
                "elementType": "geometry",
                "stylers": [
                    {
                        "visibility": "on"
                    },
                    {
                        "lightness": "100"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "all",
                "stylers": [
                    {
                        "color": "#d2e7f7"
                    }
                ]
            }
        ]
        , {
        name: 'Custom Style'
    });  
  
          
    var map = new google.maps.Map(document.getElementById('map-canvas'), {
        center: {lat: 25.829383, lng: 114.892103},
        zoom: 4,
        mapTypeControlOptions: {
            mapTypeIds: []
        },
        mapTypeId: 'custom_style'
    });
    
    map.mapTypes.set('custom_style', customMapType);
        
    var beenTo = [
      {
          name: 'Beijing', location: {lat:39.985225, lng:116.337264}  
      },{
          name: 'Tianjin', location: {lat:39.147064, lng:117.170272}    
      },{
          name: 'Nanjing', location: {lat:32.062632, lng:118.779278}
      },{
          name: 'Shijiazhuang', location: {lat:38.023027, lng:114.541734}
      },{
          name: 'Shanghai', location: {lat:31.199207, lng:121.430888}
      },{
          name: 'Hsinchu', location: {lat:24.796501, lng: 120.996923}
      }
    ];
    
    var destination = [
        {
            name: 'xian', location: {lat:34.259466, lng: 108.946990}
        },{
            name: 'Mauritius', location: {lat:-20.239628, lng: 57.466207}
        }
    ];
    
    var locationHairong = {name: 'Singapore', location: {lat:1.352740, lng:103.868335}};
    
    var locationSufang = {name: 'Rohm', location: {lat:40.005407, lng:116.336155}};
    
    
    
    var beenToMarkers = [];
    var destinationMarkers = [];
       
    var marker_icon = 'images/map/pink_ball4.png';    
    for(var i = beenTo.length;i--;){
        //addMarker(beenTo[i].location, map, marker_icon);
        beenToMarkers.push(new google.maps.Marker({
            position: beenTo[i].location,
            map: map,
            icon: marker_icon
        }));  
    }
    
    marker_icon = {
        url: 'images/map/destination3.png',
        anchor: new google.maps.Point(18,18)
    };                
    for(var i = destination.length;i--;){
        destinationMarkers.push(new google.maps.Marker({
            position: destination[i].location,
            map: map,
            icon: marker_icon
        })); 
    }
    
    marker_icon = {
        url: 'images/map/hairong.png',
        anchor: new google.maps.Point(20,20)
    };
    var hairongMarker = new google.maps.Marker({
        position: locationHairong.location,
        map: map,
        icon: marker_icon
    });
    marker_icon = {
        url: 'images/map/sufang.png',
        anchor: new google.maps.Point(20,20)
    };   
    var sufangMarker = new google.maps.Marker({
        position: locationSufang.location,
        map: map,
        icon: marker_icon,
        zIndex: 999
    });
    
    
    
    
    var objBeenTo = document.getElementById("beento");
    objBeenTo.onmouseenter = function() {
        for(var i = beenToMarkers.length;i--;) {
            setBounce(beenToMarkers[i]);
        }
    }
    
    var objDestination = document.getElementById("destination");
    objDestination.onmouseenter = function() {
        for(var i = destinationMarkers.length;i--;) {
            setBounce(destinationMarkers[i]);
        }
    }
    
    var objHairong = document.getElementById("hairong_portrait");
    objHairong.onmouseenter = function() {
        setBounce(hairongMarker);
    }
    
    var objSufang = document.getElementById("sufang_portrait");
    objSufang.onmouseenter = function() {
        setBounce(sufangMarker);
    }
    
}
/*  ------------------
    Remove Preloader
    ------------------  */

$(window).load(function () {
    $('#preloader').delay(350).fadeOut('slow', function () {
        $('.aboutus-page, .gallery-page, .birthday-page').hide();
    });  
});

$(document).ready(function () {
    'use strict';
    
    /*  ---------------------
         Homepage Responsive
        ---------------------  */

    $(window).on('load resize', homepageResponsive);
  
    /*$('.intro-content .social-media [data-toggle="tooltip"]').tooltip({
        placement: 'bottom'
    });

    $('.contact-details .social-media [data-toggle="tooltip"]').tooltip();*/
    
    mapInit();


    
     
    /*  ---------------------
         Temporary Fade-in
        ---------------------  */    
    
    $('.footprint-page').fadeIn(1200);
    setTimeout(function(){
        google.maps.event.trigger(map,'resize');
    },100);
    
});



