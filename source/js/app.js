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

//прелоадер
$(window).load(function () {
    (function() {

        var imgArray = [];
        //отбор самого тяжелого
        $.each($('*'), function () {

            var thisEl = $(this),
                img = thisEl.is('img'),
                background = thisEl.css('background-image'),
                regBack = /^url/;


            if (img) {
                var path = thisEl.attr('src');
                if (path) {
                    imgArray.push(path);
                }
            }

            if (regBack.test(background)) {
                var path = background.replace('url("', '').replace('")', '');
                imgArray.push(path);
            }


        });

        //поведение элемента
        function setPercents(total, current) {
            var percent = Math.ceil(current / total * 100);
            $('body').css({'overflow': 'hidden'});
            if (percent >= 100) {
                $('.preloader').fadeOut();
                $('body').css({'overflow': 'auto'});
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
                load: function () {
                    setPercents(imgArray.length, percentsTotal);
                    percentsTotal++;
                },

                error: function () {
                    percentsTotal++;
                }
            });
        }

    }());

});


//остальное
$(document).ready(function () {

//параллакс по мышке

    (function () {
        if(document.title=='Начальная страница') {
            $(window).on('mousemove', function (e) {

                var
                    cursorX=e.pageX,
                    cursorY=e.pageY,
                    widthW=(window.innerWidth/2)-cursorX,
                    heightW=(window.innerHeight/2)-cursorY,
                    layers=$('.parallax__container').find('.parallax__layer')
                ;

            layers.map(function(key, value) {
                var posX=widthW*(key+5)/100,
                    posY=heightW*(key+2)/100;

                $(value).css({
                    'transform': 'translate3d('+posX+'px,'+posY+'px, 0px)',
                    'margin-bottom': (key*(-5))+'px'

                })

            });

            });
        }
    }());


    //параллакс по скроллу
    (function () {

            $(window).on('scroll', function () {

                var
                    $this=$(this),
                    scrollY=$this.scrollTop(),
                    heightS=(-scrollY),
                    layers=$('.parallax__container').find('.parallax__layer')
                    ;


                layers.map(function(key, value) {
                    var posY=heightS*(key+1)*0.03;

                    $(value).css({
                        'transform' : 'translateY('+posY+'px)'

                    });

                });

            });

    }());

   /* //blur
    (function(){
        $(window).on('resize', function () {
            var blur=$('.form-blur'),
                section=$('.my-work__back'),
                imgWidth = $(section).width(),
                posLeft = section.offset().left-$('.form__wrapper').offset().left,
                posTop = section.offset().top-$('.form__wrapper').offset().top-500;

            blur.css({
                'background-size' : imgWidth+'px '+'auto',
                'background-position' : (posLeft)+'px '+(posTop)+'px'

                })

        });

    }());*/






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

        $('.utab__index').on('click', function (e) {
            e.preventDefault();

            var thisEl=$(this),
                anim=thisEl.closest('.userbox_auth');

            $('.author')
                .fadeIn(1000);

            //после каждого прохода анимации перетираем транзишны, иначе - вертолет

            $(anim)
                .css({
                    'transition':'all 1s'})
                .addClass('userbox_hide')
                .css({
                    'transition':'all 500'})
                .siblings()
                .css({
                    'transition':'all 500'})
                .removeClass('userbox_hide')
                .css({
                    'transition':'all 1s'});
        })

    }());


    //modal
    (function(){
        $('.hamburger').on('click',function(e){
            e.preventDefault();

            var thisEl=$(this),
                container=thisEl.closest('body'),
                modal=container.find('.modal'),
                left=modal.find('.modal_left'),
                right=modal.find('.modal_right'),
                menu=modal.find('.modal__nav'),
                cross=modal.find('.cross');


            thisEl.hide(200);
            modal.show();
            cross.show();
            $('body').css({'overflow':'hidden'});
            left.addClass('modal_left-active');
            right.addClass('modal_right-active');
            menu.fadeIn(1000);


        });
    //закрытие по кресту

        $('.cross').on('click', function(e) {
            e.preventDefault();

            var thisEl = $(this),
                container = thisEl.closest('.modal'),
                nav=container.find('.modal__nav'),
                left=container.find('.modal_left'),
                right=container.find('.modal_right'),
                containerOut = thisEl.closest('body'),
                ham = containerOut.find('.hamburger');

            nav.fadeOut(300);
            left.removeClass('modal_left-active');
            right.removeClass('modal_right-active');
            thisEl.hide();
            ham.show();
            setTimeout(function(){
                container.hide();

                $('body').css({'overflow': 'auto'});
            },2000);



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

    (function() {
        if(document.title=="Мой блог") {


            $(window).on('scroll', function () {
                //e.preventDefault();
                var
                    thisEl = $(this),
                    container = $('.container__blog'),
                    aside = container.find('.blog__nav'),
                    menu = aside.find('.blog__li'),
                    column = container.find('.blog__column'),
                    article = column.find('.blog__article'),
                    id=article.attr('id'),
                    articleActive = article.filter('.blog__article_active'),
                    ndxArt = articleActive.index(),
                    menuActive = menu.eq(ndxArt),
                    top = container.offset().top,
                    scrollTop = thisEl.scrollTop(),
                    diff;

                for(var i=0; i<article.length; i++){

                    topEl=$(article[i]).offset().top;

                    diff = topEl-scrollTop;


                    if ((diff>-150)&&(diff<6)){
                         articleActive=article[i];

                        if(!($(articleActive).hasClass('blog__article_active'))){
                            ($(articleActive)).addClass('blog__article_active')
                                .siblings()
                                .removeClass('blog__article_active');}
                        }

                        }

                if(!menuActive.hasClass('blog__article_active')){
                    menuActive.addClass('blog__li_active')
                        .siblings()
                        .removeClass('blog__li_active');

                }








                //закрепление меню
                if (thisEl.scrollTop() > top) {
                    aside.css({'position': 'fixed'})

                }
                else {
                    aside.css({'position': 'static'})
                }
            });

           // скролл по клику

            $('.blog__li').on('click', function (e) {
                e.preventDefault();
                var
                    $this = $(this),
                    link=$this.children('a'),
                    id = link.attr('href'),
                    top = ($(id).offset().top),
                    container=$this.closest('.container__blog'),
                    article=container.find('.blog__article'),
                    ndx=$this.index(),
                    articleActive=article.eq(ndx);



                if(!$this.hasClass('blog__li_active')){
                        $this.addClass('blog__li_active')
                            .siblings()
                            .removeClass('blog__li_active')
                }

                if(!articleActive.hasClass('blog__article_active')){
                    articleActive.addClass('blog__article_active')
                        .siblings()
                        .removeClass('blog__article_active')
                }


                $('body,html').animate({scrollTop: top}, 1000);
            });


        }
    }());


    //валидация форм
    (function() {
        $('.form__connect').on('submit', function(e){
            //e.preventDefault();

            var $this=$(this),
                inputs=$this.find('.form-connect__el'),
                inputName=$this.find('.input__name'),
                inputEmail=$this.find('.input__email'),
                inputText=$this.find('.conn__textarea'),
                regEmail=(/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,6})+$/);




            if(inputName.val().length==0){
                //console.log('Заполните имя');
                inputName.css({
                    'box-shadow':'0 0 5px red inset'
                })
                    .next($('.toolitp'))
                    .css({'display':'block'});

                return false;

            }
            else
            if ((inputEmail.val().length == 0)||(!regEmail.test(inputEmail.val()))) {
                // console.log('Заполните email');
                inputEmail.css({
                    'box-shadow':'0 0 5px red inset'
                })
                    .next($('.toolitp'))
                    .css({'display':'block'});

                return false;


            }
            else
            if (inputText.val().length == 0) {
                // console.log('Напишите сообщение');
                inputText.css({
                    'box-shadow':'0 0 5px red inset'
                })

                    .next($('.toolitp'))
                    .css({'display':'block'});

                return false;
            }
            else{
                //console.log('Готово');
                inputs.css({
                    'box-shadow':'0 0 5px green inset'
                });
                return true;
            }

        });

        $('.form-connect__el').on('focus', function () {
            $(this).css({'box-shadow':'0 0 5px green inset'})
                .next($('.tooltip'))
                .css({'display':'none'})
        });


        $('.form__connect').on('reset', function () {
            $(this).find($('input'))
                .css({'box-shadow':'none'})
                .next('.tooltip')
                .css({'display':'none'});
        });




        $('.form__auth').on('submit', function(e){
            //e.preventDefault();

            var $this=$(this),
                login=$this.find('.login'),
                loginIcon=login.siblings('.input__icon'),
                password=$this.find('.password'),
                passwordIcon=password.siblings('.input__icon'),
                check1=$this.find('.check__auth');


            if(login.val().length==0){
               login.css({
                    'box-shadow':'0 0 5px red inset'
                })
                    .next($('.tooltip'))
                    .css({'display':'block'});
                loginIcon.css({'fill':'red'});


                return false;

            }
            else
            if(password.val().length==0){
                password.css({
                    'box-shadow':'0 0 5px red inset'
                })
                    .next($('.tooltip'))
                    .css({'display':'block'});
                passwordIcon.css({'fill':'red'});

                return false;

            }
            else
            if(!check1.prop('checked')){
                check1.siblings($('.tooltip'))
                    .css({'display':'inline-block'});
                return false;
            }
            else
            if($('#robot').prop('checked')){
                $('#robot').siblings($('.tooltip'))
                    .css({'display':'inline-block'});
                return false;
            }
            else{
                return true;
            }

        });


        $('.input__window').on('click', function () {

            $(this).css({'box-shadow':'0 0 5px #00bfa5 inset'})
                .next($('.tooltip'))
                .css({'display':'none'})
                .siblings($('.input__icon'))
                .css({'fill':'#00bfa5'})
        });

        $('.check__auth').on('change', function () {
            var
            $this=$(this),
            tooltip=$this.siblings('.tooltip');

                tooltip.css({'display':'none'});

        });

        $('.auth__radio').on('change', function () {
            var
                $this=$(this),
                container=$this.closest('.radio__wrapper'),
                tooltip=container.find('.tooltip');

            tooltip.css({'display':'none'});

        });

    }());


});