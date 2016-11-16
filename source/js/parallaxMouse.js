var parallaxMouse=function () {
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
};
