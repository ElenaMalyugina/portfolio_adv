var map,
    marker,
    myCenter={lat: 55.819604, lng: 37.563105},
    myPlace= {lat: 55.823542, lng:37.558679 },
    image= 'assets/img/just/map_marker.png';

    function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: myCenter,
        zoom: 15,
        scrollwheel: false,
        streetViewControl: false,
        mapTypeControl: false,
        zoomControlOptions: {
            position: google.maps.ControlPosition.TOP_LEFT
        },

        styles:[
            {
                "featureType": "landscape.natural",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "visibility": "on"
                    },
                    {
                        "color": "#e0efef"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "visibility": "on"
                    },
                    {
                        "hue": "#1900ff"
                    },
                    {
                        "color": "#c0e8e8"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "geometry",
                "stylers": [
                    {
                        "lightness": 100
                    },
                    {
                        "visibility": "simplified"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "labels",
                "stylers": [
                    {
                        "visibility": "off"
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
                        "lightness": 700
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "all",
                "stylers": [
                    {
                        "color": "#7dcdcd"
                    }
                ]
            }
    ]

    });

    marker = new google.maps.Marker({
        position: myPlace,
        map: map,
        icon: image,
        title: 'Я здесь'
    });
}

$(document).ready(function () {
    (function(){
        $('.author').on('click',function(e){
            e.preventDefault();

            var thisEl=$(this),
                anim=thisEl.siblings('.userbox_js');

            $(thisEl)
                .fadeOut(1000);

            $(anim)
                .addClass('userbox_hide')
                .siblings()
                .removeClass('userbox_hide');
        });
    }());


    (function(){
        $('.modal').hide();

        $('.hamburger').on('click',function(e){
            e.preventDefault();

            var thisEl=$(this),
                container=thisEl.closest('body'),
                modal=container.find('.modal');

            thisEl.hide(200);
            modal.show();
        });
    }());

    (function(){
        $('.cross').on('click', function(e){
            e.preventDefault();

            var thisEl=$(this),
                container=thisEl.closest('.modal'),
                containerOut=thisEl.closest('body'),
                ham=containerOut.find('.hamburger');

            container.fadeOut(300);
            ham.show();

        });


    }());





});