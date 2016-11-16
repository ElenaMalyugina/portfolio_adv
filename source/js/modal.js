var modal= function(){
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
};
