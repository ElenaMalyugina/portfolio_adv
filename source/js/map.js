function initMap() {
    var map,
        marker,
        myCenter={lat: 55.819604, lng: 37.563105},
        myPlace= {lat: 55.823542+0.0015, lng:37.557679 },
        image= {
            path: 'M11.004,7.835c0-1.883-1.538-3.414-3.43-3.414c-1.889,0-3.431,1.531-3.431,3.414c0,1.884,1.542,3.419,3.431,3.419C9.466,11.254,11.004,9.719,11.004,7.835zM7.574,21.654l1.388-1.817c1.455-1.925,6.189-8.469,6.189-12.049C15.151,3.132,12.106,0,7.574,0C3.045,0,0,3.132,0,7.788c0,3.854,5.56,11.223,6.192,12.049L7.574,21.654z M2.792,7.835c0-2.628,2.146-4.77,4.782-4.77c2.64,0,4.785,2.142,4.785,4.77c0,2.63-2.146,4.771-4.785,4.771C4.938,12.605,2.792,10.465,2.792,7.835z',
            scale: 2.5,
            strokeColor: 'transparent',
            fillColor: '#00bfa5',
            fillOpacity: 1

        };





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
