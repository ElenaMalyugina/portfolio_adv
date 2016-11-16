var admin_tabs=function() {
    $('.tab-admin__a').on('click', function (e) {
        e.preventDefault();
    });


    $('.tab-header__li').on('click', function (e) {
        e.preventDefault();

        var $this=$(this),
            container=$this.closest('.container'),
            tabs=container.find('.tab-header__li'),
            ndx=$this.index(),
            content=container.find('.admin-content__li'),
            activeContent=content.eq(ndx)
            ;


        activeContent.addClass('admin-content__li_active')
            .siblings()
            .removeClass('admin-content__li_active');


        if(!$this.hasClass('tab-header__li_active')) {
            $this.addClass('tab-header__li_active')
                .siblings()
                .removeClass('tab-header__li_active');

        }

    });
};
