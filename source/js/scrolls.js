var scrolls=function(){
    $('.saggit').on('click', function(e){
        e.preventDefault();
        var
            id=$(this).attr('href'),
            top = $(id).offset().top;

        $('body,html').animate({scrollTop: top}, 1000);
    });
};
