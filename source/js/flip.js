var flip= function(){
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

};
