//прелоадер

var preloader=function() {


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


            if (percent >= 100) {
                $('.preloader').fadeOut();

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

    };

