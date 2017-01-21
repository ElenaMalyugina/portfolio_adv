var blog =function() {
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
                aside.css({'position': 'fixed'});

                if($(window).width()<769) {
                    $('.blog__trigger').css({'visibility': 'visible'});
                }

            }
            else {
                aside.css({'position': 'static'});
                $('.blog__trigger').css({'visibility': 'hidden'});
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


        $('.blog__trigger').on('click', function(e){
            e.preventDefault();

            var $this=$(this),
                container=$this.siblings('.container__blog'),
                menu=container.find('.blog-menu__lift'),
                menuIn=menu.find('.blog__nav'),
                pos=$(menu).offset().left;



            if(pos<0){
                menu.animate({
                    'left': '0%'
                });

                $('header').hide();
                $('footer').hide();

                menuIn.animate({
                    'left': '0%'
                });}


        });

        $('.blog-menu__lift').on('click', function(e){

        	if($(window).width()<769) {
	            e.preventDefault();

	            var $this=$(this);


	            $this.animate({
	                    'left': '-999px'
	                });

	            $this.children().animate({
	                    'left': '-999px'
	                });

	            $('.blog__nav').animate({
	                'left': '-999px'

	            });
	            //костыли
	            $('header').show();
	            $('footer').show();
			}

        });
    }

};
