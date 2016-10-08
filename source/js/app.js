function initMap() {
        var map,
            marker,
            myCenter={lat: 55.819604, lng: 37.563105},
            myPlace= {lat: 55.823542, lng:37.558679 },
            image= 'assets/img/just/map_marker.png';


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




//остальное
$(document).ready(function () {

    //скроллы
    (function(){
        $('.saggit').on('click', function(e){
            e.preventDefault();
            var
                id=$(this).attr('href'),
                top = $(id).offset().top;

            $('body,html').animate({scrollTop: top}, 1000);
        });
    }());



    //flip
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

    //modal
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

    //закрытие по кресту
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


    //слайдер
    (function(){
        $('.saggit__next').on('click', function(e){
            e.preventDefault();

            var thisEl=$(this),
                container=thisEl.closest('.my_work__container'),
                activeSlide=container.find('.slider__li_active')
                flag=true;


                if(flag){
                    flag=false;
                    activeSlide.animate(
                        {
                            'left': '100%'
                        })
                        .removeClass('slider__li_active')
                        .next()
                        .animate(
                            {
                                'left': '0'
                            })
                        .addClass('slider__li_active')
                        .next()
                        .css({'left': '-100%'});
                        $('.slider__item').append(activeSlide);
                    flag=true;
                } });
    }());

    (function(){
        $('.saggit__pre').on('click', function(e){
            e.preventDefault();
            var thisEl=$(this),
                container=thisEl.closest('.my_work__container'),
                slide=container.find('.slider__li_active'),
                activeSlide=container.find('.slider__li_active'),
                flag=true;

           if(flag){
               flag=false;
                activeSlide.animate(
                    {
                        'left': '-100%'
                    })
                    .removeClass('slider__li_active')
                    .next()
                    .animate(
                        {
                            'left': '0'
                        })
                    .addClass('slider__li_active')
                    .next()
                    .css({'left': '100%'});
                $('.slider__item').append(activeSlide);
                timer=setTimeout(1000);
                flag=true;
            }

        });
    }());

    (function() {
        $('.slider-toggle').on('click', function (e) {
            e.preventDefault();
            var
                thisEl=$(this),
                toggleNDX=thisEl.index(),
                slider=thisEl.closest('.slider_window'),
                slide=slider.find('.slider__li'),
                slideToggle=slide.eq(toggleNDX);

            thisEl.addClass('slider-toggle_active')
                    .siblings()
                    .removeClass('slider-toggle_active');

            slideToggle.addClass('slider__li_active')
                    .animate({'left':'0'})
                    .siblings()
                    .removeClass('slider__li_active')
                    .css({'left':'-100%'});


        });
    }());

    // //скролл блог
    // (function(){
    //     $(window).on('scroll', function(e){
    //         e.preventDefault();
    //         var
    //             thisEl=$(this),
    //             menu=thisEl.find('.blog__li'),
    //             ndx= menu.index(),
    //             container=thisEl.find('.blog__column'),
    //             content = container.find('.blog__article'),
    //             blogIndex=content.eq(ndx),
    //             h=content.offset().top;
    //
    //
    //
    //
    //
    //
    //
    //     });
    // }());


});