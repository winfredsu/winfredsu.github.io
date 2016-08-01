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

function setBounce(marker) {
    marker.setAnimation(google.maps.Animation.BOUNCE);
    window.setTimeout(function(){
        marker.setAnimation(null);
    }, 2100);
}  

function setMouseEnterBounce(markers) {
    for(var i = markers.length;i--;) {
        setBounce(markers[i].marker);
    }
}

function setMarker(map, markers, marker_icon, zIndex) {
    for(var i = markers.length;i--;){
        markers[i].marker = new google.maps.Marker({
            position: markers[i].location,
            map: map,
            icon: marker_icon,
            zIndex: zIndex
        });         
    }
}

function setInfoWindow(map, markers) {
    for(var i = markers.length;i--;){
        markers[i].infoWindow = new google.maps.InfoWindow({content: markers[i].content});
        markers[i].marker.addListener('mouseover',function(num) { 
           return function() {
                markers[num].infoWindow.open(map,markers[num].marker); 
           }     
        }(i));
        
        markers[i].marker.addListener('mouseout',function(num) { 
           return function() {
                markers[num].infoWindow.close(map,markers[num].marker); 
           }     
        }(i));
        
        markers[i].infoWindow.addListener('domready', function(num) {
            return function () {
//                $(".gm-style-iw").next("div").remove();
                var content = document.querySelector('.gm-style-iw');
                content.parentNode.removeChild(content.nextElementSibling);
                content.style.setProperty('width', 'auto', 'important');
                content.style.setProperty('right', content.style.left, 'important');
                content.style.setProperty('text-align', 'center', 'important');
            }
        }(i));
        
    }    
}

function mapInit() {
    /*  ---------------------
         Google Map Config.
        ---------------------  */
  
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
  
          
    map = new google.maps.Map(document.getElementById('map-canvas'), {
        center: {lat: 25.829383, lng: 114.892103},
        zoom: 4,
        mapTypeControlOptions: {
            mapTypeIds: []
        },
        mapTypeId: 'custom_style'
    });
    
    map.mapTypes.set('custom_style', customMapType);
        
    var markerBeenTo = [
      {
          name: 'Beijing', location: {lat:39.985225, lng:116.337264},
          content:
          '<div class="iw-container">'+
          '<h5 class="iw-title">Beijing <small><i> Jan. 2016</i></small></h5>'+
          '<img src="images/map/InfoWindow/beijing.jpg"></div>'
      },{
          name: 'Tianjin', location: {lat:39.147064, lng:117.170272},
          content:
          '<div class="iw-container">'+
          '<h5 class="iw-title">Tianjin <small><i> May. 2016</i></small></h5>'+
          '<img src="images/map/InfoWindow/tianjin.jpg"></div>'
      },{
          name: 'Nanjing', location: {lat:32.062632, lng:118.779278},
          content:
          '<div class="iw-container">'+
          '<h5 class="iw-title">Nanjing <small><i> Jun. 2016</i></small></h5>'+
          '<img src="images/map/InfoWindow/nanjing.jpg"></div>'
      },{
          name: 'Shijiazhuang', location: {lat:38.023027, lng:114.541734},
          content:
          '<div class="iw-container">'+
          '<h5 class="iw-title">Shijiazhuang <small><i> Apr. 2016</i></small></h5>'+
          '<img src="images/map/InfoWindow/shijiazhuang.jpg"></div>'
      },{
          name: 'Shanghai', location: {lat:31.199207, lng:121.430888},
          content:
          '<div class="iw-container">'+
          '<h5 class="iw-title">Shanghai <small><i> Feb. 2016</i></small></h5>'+
          '<img src="images/map/InfoWindow/shanghai.jpg"></div>'
      },{
          name: 'Hsinchu', location: {lat:24.796501, lng: 120.996923},
          content:
          '<div class="iw-container">'+
          '<h5 class="iw-title">Hsinchu <small><i> Sep. 2013</i></small></h5>'+
          '<img src="images/map/InfoWindow/hsinchu.jpg"></div>'
      }
    ];
    
    var markerDestination = [
        {
            name: 'Xi\'an', location: {lat:34.259466, lng: 108.946990},
            content: 
            '<div class="iw-container">'+
            '<h5 class="iw-title">Xi\'an <small><i> Sep. 2016</i></small></h5>'+
            '<img src="images/map/InfoWindow/xian.jpg"></div>'
        },{
            name: 'Mauritius', location: {lat:-20.239628, lng: 57.466207},
            content: 
            '<div class="iw-container">'+
            '<h5 class="iw-title">Mauritius <small><i> Graduation Trip</i></small></h5>'+
            '<img src="images/map/InfoWindow/mauritius.jpg"></div>'
        },{
            name: 'Harbin', location: {lat:45.774270, lng: 126.668986},
            content:
            '<div class="iw-container">'+
            '<h5 class="iw-title">Harbin <small><i> Hairong\'s Home</i></small></h5>'+
            '<img src="images/map/InfoWindow/harbin.jpg"></div>'
        }
    ];
    
    var markerHairong = [
        {
            name: 'Singapore', location: {lat:1.352740, lng:103.868335}, 
            content: '<div class="iw-container">'+
            '<div class="iw-container">'+
            '<h5 class="iw-title">Hairong <small><i> Aug. 2016</i></small></h5>'+
            '<img src="images/map/InfoWindow/sg.jpg"></div>'
        }
    ];
    
    var markerSufang = [{name: 'Rohm Building', location: {lat:40.005407, lng:116.336155}}];
    

    var markerIcons = {
        markerBeenToIcon: 'images/map/pink_ball4.png',
        markerDestinationIcon: {
            url: 'images/map/destination3.png',
            anchor: new google.maps.Point(18,18)
        },
        markerHairongIcon: {
            url: 'images/map/hairong.png',
            anchor: new google.maps.Point(20,20)
        },
        markerSufangIcon: {
            url: 'images/map/sufang.png',
            anchor: new google.maps.Point(20,20)            
        }       
    };

    setMarker(map, markerBeenTo, markerIcons.markerBeenToIcon, 1);
    setInfoWindow(map, markerBeenTo);
        
    setMarker(map, markerDestination, markerIcons.markerDestinationIcon, 1);
    setInfoWindow(map, markerDestination);

    setMarker(map, markerHairong, markerIcons.markerHairongIcon, 1);
    setInfoWindow(map, markerHairong);
    
    setMarker(map, markerSufang, markerIcons.markerSufangIcon, 999);

    
    
    
    var objBeenTo = document.getElementById("beento");
    objBeenTo.onmouseenter = function() {
        setMouseEnterBounce(markerBeenTo);
    }
    
    var objDestination = document.getElementById("destination");
    objDestination.onmouseenter = function() {
        setMouseEnterBounce(markerDestination);
    }
    
    var objHairong = document.getElementById("hairong_portrait");
    objHairong.onmouseenter = function() {
        setMouseEnterBounce(markerHairong);
    }
    
    var objSufang = document.getElementById("sufang_portrait");
    objSufang.onmouseenter = function() {
        setMouseEnterBounce(markerSufang);
    } 
    
    //return map;
}

function calcDays() {
    var msInADay = 24*60*60*1000;
    var dateToday = new Date();
    var dateLastMet = new Date();
    var dateFellInLove = new Date();
    var dateFirstSignt = new Date();
    var dateHRBirthday = new Date();
    
    dateLastMet.setFullYear(2016, 5, 12);
    dateFellInLove.setFullYear(2015, 11, 24);
    dateFirstSignt.setFullYear(2013, 8, 10);
    dateHRBirthday.setFullYear(1993, 7, 17);
    
    daysLastMet = (dateToday - dateLastMet)/msInADay;
    daysFellInLove = (dateToday - dateFellInLove)/msInADay;
    daysFirstSight = (dateToday - dateFirstSignt)/msInADay;
    daysHRBirthday = (dateToday - dateHRBirthday)/msInADay;
    
    document.getElementById("days-last-met").innerHTML = daysLastMet;
    document.getElementById("days-fell-in-love").innerHTML = daysFellInLove;
    document.getElementById("days-first-sight").innerHTML = daysFirstSight;
    document.getElementById("days-hr-birthday").innerHTML = daysHRBirthday;
}


/*  ------------------
    Remove Preloader
    ------------------  */

$(window).load(function () {
    $('#preloader').delay(350).fadeOut('slow', function () {
        $('.aboutus-page, .gallery-page, .birthday-page, footprint-page').hide();
    });  
});

$(document).ready(function () {
    'use strict';
    
    /*  ---------------------
         Homepage Responsive
        ---------------------  */

    $(window).on('load resize', homepageResponsive);
  
//    $('.intro-content .social-media [data-toggle="tooltip"]').tooltip({
//        placement: 'bottom'
//    });
//
//    $('.contact-details .social-media [data-toggle="tooltip"]').tooltip();

    mapInit();
    $('.menu > div').on('click', function () {

        var introWidth = $('.introduction').width(),
            menuWidth = $('.menu').width();

        $('.introduction').animate({
            left: '-' + introWidth
        }, 1000, 'easeOutQuart');
        $('.menu').animate({
            left: menuWidth
        }, 1000, 'easeOutQuart', function () {
            $('.home-page').css({
                visibility: 'hidden'
            });
        });
    });

    $('.menu div.footprint-btn').on('click', function () {
        $('.footprint-page').fadeIn(1200);
        setTimeout(function(){
            var center = map.getCenter();
            google.maps.event.trigger(map,'resize');
            map.setCenter(center);
 
        },10);
    });

    $('.menu div.gallery-btn').on('click', function () {
        $('.gallery-page').fadeIn(1200);
        setTimeout(function(){
            $('#projects').mixItUp();
        }, 100);
    });
    
    $('.menu div.birthday-btn').on('click', function () {
        $('.birthday-page').fadeIn(1200);
    });
    
    $('.menu div.aboutus-btn').on('click', function() {
        $('.aboutus-page').fadeIn(1200);
        
        calcDays();
    
        $('.facts-icon p').hide(0);
        $('.facts-overlay').hover(function(){
            $('.facts-content', this).insertBefore($('.facts-icon', this));
            $('.facts-icon p', this).stop(true,false);
            $('.facts-icon i', this).stop(true,false).fadeOut(500, 'linear', function() {
                $(this).siblings('p').fadeIn(500, 'linear');    
            });
            
            //$('.facts-content::before', this).toggle();   
        },function(){
            $('.facts-content', this).insertAfter($('.facts-icon', this));
            $('.facts-icon i', this).stop(true,false);
            $('.facts-icon p', this).stop(true,false).fadeOut(0, 'linear', function() {
                $(this).siblings('i').fadeIn(800, 'linear');
            });
            
        });
            
        
        setTimeout(function(){
            $('.count').each(function () {
                $(this).prop('Counter',0).animate({
                    Counter: $(this).text()
                }, {
                    duration: 1500,
                    easing: 'swing',
                    step: function (now) {
                        $(this).text(Math.ceil(now));
                    }
                });
            });
        }, 100);       
        
        
    });
    

    // Close Button, Hide Menu
    $('.close-btn').on('click', function () {
        $('.home-page').css({
            visibility: 'visible'
        });
        $('.introduction, .menu').animate({
            left: 0
        }, 1000, 'easeOutQuart');
        $('.aboutus-page, .gallery-page, .birthday-page, .footprint-page').fadeOut(800);
    });
    
    
    $(function () {
        $('.show-popup').popup({
            keepInlineChanges: true,
            speed: 500
        });
    });
    /*  ---------------------
         Temporary Fade-in
        ---------------------  */    
//    
//    $('.footprint-page').fadeIn(1200);
//    setTimeout(function(){
//        google.maps.event.trigger(map,'resize');
//    },100);
//      
    
//        $('.aboutus-page').fadeIn(1200);
//        
//        calcDays();
//    
//        $('.facts-icon p').hide(0);
//        $('.facts-overlay').hover(function(){
//            $('.facts-content', this).insertBefore($('.facts-icon', this));
//            $('.facts-icon p', this).stop(true,false);
//            $('.facts-icon i', this).stop(true,false).fadeOut(500, 'linear', function() {
//                $(this).siblings('p').fadeIn(500, 'linear');    
//            });
//            
//            //$('.facts-content::before', this).toggle();   
//        },function(){
//            $('.facts-content', this).insertAfter($('.facts-icon', this));
//            $('.facts-icon i', this).stop(true,false);
//            $('.facts-icon p', this).stop(true,false).fadeOut(500, 'linear', function() {
//                $(this).siblings('i').fadeIn(500, 'linear');
//            });
//            
//        });
//            
//        
//        setTimeout(function(){
//            $('.count').each(function () {
//                $(this).prop('Counter',0).animate({
//                    Counter: $(this).text()
//                }, {
//                    duration: 1500,
//                    easing: 'swing',
//                    step: function (now) {
//                        $(this).text(Math.ceil(now));
//                    }
//                });
//            });
//        }, 100);
});



