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


    //прелоадер

    (function(){

        var imgArray=[];
        //отбор самого тяжелого
        $.each($('*'),function(){

            var thisEl=$(this),
                img=thisEl.is('img'),
                background=thisEl.css('background-image');


            if(img){
                var path=thisEl.attr('src');
                if(path){
                    imgArray.push(path);
                }
            }

            if (background != 'none') {
                var path = background.replace('url("', '').replace('")','');
                imgArray.push(path);
            }


        });

        //поведение элемента
        function setPercents(total, current) {
            var percent = Math.ceil(current / total * 100);
            $('body').css({'overflow':'hidden'});
            if (percent >= 100) {
                $('.preloader').fadeOut();
                $('body').css({'overflow':'auto'});
            }

            $('.preloader__percent').text(percent + '%');
        }


        var percentsTotal = 1;

        for (var i = 0; i < imgArray.length; i++) {
            var image = $('<img>', {
                attr: {
                    src: imgArray[i]
                }
            });

            image.on({
                load : function () {
                    setPercents(imgArray.length, percentsTotal);
                    percentsTotal++;
                },

                error : function () {
                    percentsTotal++;
                }
            });
        }



    }());

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
            $('body').css({'overflow':'hidden'});
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
            $('body').css({'overflow':'auto'});

        });
    }());


    //слайдер
    (function(){
        flag=true;


        $('.saggit__next').on('click', function(e){
            e.preventDefault();

            var thisEl=$(this),
                container=thisEl.closest('.my_work__container'),
                slide=container.find('.slider__li'),
                activeSlide=container.find('.slider__li_active'),
                slideActiveIndex=activeSlide.attr('ID'),
                toggle=container.find('.slider-toggle'),
                toggleActive=toggle.eq(slideActiveIndex-3),////?????????
                endAnim=$.Deferred();



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

                    if(!toggleActive.hasClass('slider-toggle_active')){

                      toggleActive.addClass('slider-toggle_active')
                                .siblings()
                                .removeClass('slider-toggle_active');}


                    endAnim.resolve($(this));


              }
                $.when(endAnim).done(function(){
                setTimeout(function(){flag=true}, 400);
            });
        });

    }());

    (function(){
        flag=true;


        $('.saggit__pre').on('click', function(e){
            e.preventDefault();
            var thisEl=$(this),
                container=thisEl.closest('.my_work__container'),
                slide=container.find('.slider__li'),
                activeSlide=container.find('.slider__li_active'),
                slideActiveIndex=activeSlide.attr('ID'),
                toggle=container.find('.slider-toggle'),
                toggleActive=toggle.eq(slideActiveIndex-3),////?????????
                endAnim=$.Deferred();


           if(flag){
               flag=false;
                activeSlide
                    .css({'left': '0'})
                    .animate(
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

                if(!toggleActive.hasClass('slider-toggle_active')){

                   toggleActive.addClass('slider-toggle_active')
                       .siblings()
                       .removeClass('slider-toggle_active');}

               endAnim.resolve($(this));
            }

            $.when(endAnim).done(function(){
                setTimeout(function(){flag=true}, 400);

            });

        });


    }());



    //Переключение слайдера по кнопкам. Очень глючно
 /*   (function() {
        $('.slider-toggle').on('click', function (e) {
            e.preventDefault();
            var
                thisEl=$(this),
                toggleNDX=thisEl.index(),
                slider=thisEl.closest('.slider_window'),
                slide=slider.find('.slider__li'),
                slideIndex=slide.attr('ID'),
                activeSlide=slide.eq(toggleNDX);



            thisEl.addClass('slider-toggle_active')
                    .siblings()
                    .removeClass('slider-toggle_active');

            if(!activeSlide.hasClass('slider__li_active')){
            activeSlide.addClass('slider__li_active')
                    .animate({'left':'0'})
                    .siblings()
                    .removeClass('slider__li_active')
                    .css({'left':'-100%'});}


        });
    }());*/


    //скролл блог
    (function(){
        $(window).on('scroll', function(e){
            e.preventDefault();
            var
                thisEl=$(this),
                container=$('.container__blog'),
                aside=container.find('.blog__menu'),
                menu=aside.find('.blog__li'),
                column=container.find('.blog__column'),
                article=column.find('.blog__article'),
                articleActive=column.find('.blog__article_active'),
                ndxArt=articleActive.index(),
                menuActive=menu.eq(ndxArt),
                top=container.offset().top;



            console.log(menuActive);


            if(thisEl.scrollTop()>top){
                aside.css({'position':'fixed'})

            }
            else{
                aside.css({'position':'static'})
            }

            if ((thisEl.scrollTop()) == ($(article[1]).offset().top)) {
                    $(article[1]).addClass('blog__article_active')
                        .siblings()
                        .removeClass('blog__article_active');

                if(!menuActive.hasClass('blog__li_active')){

                    menuActive.addClass('blog__li_active')
                        .siblings()
                        .removeClass('blog__li_active');}
                }











        });
    }());


});