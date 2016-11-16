var slider= function(){
    var flag = true;



    $('.saggitSl').on('click', function (e) {
        e.preventDefault();

        var endAnim = $.Deferred();


        if(flag) {
            flag=false;

            var
                container = $('.my_work__container'),
                slide = container.find('.slider__li'),
                activeSlide = slide.filter('.slider__li_active'),
                prevSlide = activeSlide.prev(),
                nextSlide = activeSlide.next(),
                firstSlide = slide.first(),
                lastSlide = slide.last(),
                toggle = container.find('.slider-toggle');




            if ($(this).hasClass('saggit__next')) {

                if (nextSlide.length) {
                    activeSlide.animate({'left': '100%'});
                    nextSlide.animate({'left': '0%'})
                        .addClass('slider__li_active')
                        .siblings()
                        .removeClass('slider__li_active')
                        .css({'left': '-100%'})
                }
                else {
                    activeSlide.animate({'left': '100%'});
                    firstSlide.animate({'left': '0%'})
                        .addClass('slider__li_active')
                        .siblings()
                        .removeClass('slider__li_active')
                        .css({'left': '-100%'});
                }


                toggleActive = toggle.eq(activeSlide.index() - 3);////?????????
                if (!toggleActive.hasClass('slider-toggle_active')) {
                    toggleActive.addClass('slider-toggle_active')
                        .siblings()
                        .removeClass('slider-toggle_active')
                }

            }




            if ($(this).hasClass('saggit__pre')) {
                if (prevSlide.length) {
                    activeSlide.animate({'left': '-100%'});
                    prevSlide.animate({'left': '0%'})
                        .addClass('slider__li_active')
                        .siblings()
                        .removeClass('slider__li_active')
                        .css({'left': '100%'});
                }
                else {
                    activeSlide.animate({'left': '-100%'});
                    lastSlide.animate({'left': '0%'})
                        .addClass('slider__li_active')
                        .siblings()
                        .removeClass('slider__li_active')
                        .css({'left': '100%'});
                }


                toggleActive = toggle.eq(activeSlide.index() - 1);////?????????
                if (!toggleActive.hasClass('slider-toggle_active')) {
                    toggleActive.addClass('slider-toggle_active')
                        .siblings()
                        .removeClass('slider-toggle_active')
                }


            }
            endAnim.resolve();
        }

        endAnim.done(function(){
            setTimeout(function(){flag=true}, 400);
        });

    });

};
