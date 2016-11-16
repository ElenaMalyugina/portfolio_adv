var parallaxScroll=function () {

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

};
