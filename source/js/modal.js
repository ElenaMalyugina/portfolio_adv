var modal= function(){

    $('.hamburger').on('click',function(e){
        e.preventDefault();

        var thisEl=$(this),
            container=thisEl.closest('body'),
            modal=container.find('.modal'),
            menu=modal.find('.modal__nav'),
            cross=modal.find('.cross'),
            arrow=$('.saggit_down');


        thisEl.hide(200);
        modal.show();
        cross.show();
        arrow.hide();
        menu.fadeIn(1000);


    });
    //закрытие по кресту

    $('.cross').on('click', function(e) {
        e.preventDefault();

        var thisEl = $(this),
            container = thisEl.closest('.modal'),
            nav=container.find('.modal__nav'),
            containerOut = thisEl.closest('body'),
            arrow=$('.saggit_down'),
            ham = containerOut.find('.hamburger');

        nav.fadeOut(300);
        thisEl.hide();
        ham.show();
        arrow.show();
        container.css({'animation-name':'modal-back'});
        setTimeout(function(){
            container.hide();
            container.css({'animation-name':'modal'})}, 1000);

    });
};
