var forms= function() {
    $('.form__connect').on('submit', function(e){
        e.preventDefault();

        var $this=$(this),
            inputs=$this.find('.form-connect__el'),
            inputName=$this.find('.input__name'),
            inputEmail=$this.find('.input__email'),
            inputText=$this.find('.conn__textarea'),
            regEmail=(/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,6})+$/);




        if(inputName.val().length==0){
            //console.log('Заполните имя');
            inputName.css({
                'box-shadow':'0 0 5px red inset'
            })
                .next($('.toolitp'))
                .css({'display':'block'});

            return false;

        }
        else
        if ((inputEmail.val().length == 0)||(!regEmail.test(inputEmail.val()))) {
            // console.log('Заполните email');
            inputEmail.css({
                'box-shadow':'0 0 5px red inset'
            })
                .next($('.toolitp'))
                .css({'display':'block'});

            return false;


        }
        else
        if (inputText.val().length == 0) {
            // console.log('Напишите сообщение');
            inputText.css({
                'box-shadow':'0 0 5px red inset'
            })

                .next($('.toolitp'))
                .css({'display':'block'});

            return false;
        }
        else{
            inputs.css({
                'box-shadow':'0 0 5px #00bfa5 inset'
            });
            //return true;

            var msg = $this.serialize();
            $.ajax({
                type: 'POST',
                url: '/assets/script/mail.php',
                data: msg,
                success: function (data) {
                    //console.log(data);
                    $('.result')
                        .show()
                        .text('Сообщение отправлено')
                        .on('click', function(){
                            $(this).fadeOut(1000);
                        });

                },
                error: function (xhr, str) {
                    console.log(xhr.responseCode);
                    $('.result')
                        .show()
                        .text('Возникла ошибка при отправке.')
                        .on('click', function(){
                            $(this).fadeOut(1000);
                        });
                }
            });
        }

    });

    $('.form-connect__el').on('focus', function () {
        $(this).css({'box-shadow':'0 0 5px #00bfa5 inset'})
            .next($('.tooltip'))
            .css({'display':'none'})
    });


    $('.form__connect').on('reset', function () {
        $(this).find($('.form-connect__el'))
            .css({'box-shadow':'none'})
            .next('.tooltip')
            .css({'display':'none'});
    });




    $('.form__auth').on('submit', function(e){
        //e.preventDefault();

        var $this=$(this),
            login=$this.find('.login'),
            loginIcon=login.siblings('.input__icon'),
            password=$this.find('.password'),
            passwordIcon=password.siblings('.input__icon'),
            check1=$this.find('.check__auth');


        if(login.val().length==0){
            login.css({
                'box-shadow':'0 0 5px red inset'
            })
                .next($('.tooltip'))
                .css({'display':'block'});
            loginIcon.css({'fill':'red'});


            return false;

        }
        else
        if(password.val().length==0){
            password.css({
                'box-shadow':'0 0 5px red inset'
            })
                .next($('.tooltip'))
                .css({'display':'block'});
            passwordIcon.css({'fill':'red'});

            return false;

        }
        else
        if(!check1.prop('checked')){
            check1.siblings($('.tooltip'))
                .css({'display':'inline-block'});
            return false;
        }
        else
        if($('#robot').prop('checked')){
            $('#robot').siblings($('.tooltip'))
                .css({'display':'inline-block'});
            return false;
        }
        else {
            //return true;

            var msg = $this.serialize();
            $.ajax({
                type: 'POST',
                url: '/assets/script/res.php',
                data: msg,
                success: function (data) {
                    $('.result')
                        .show()
                        .text('Идет проверка личности')
                        .on('click', function() {
                            $(this).fadeOut(1000);
                        });
                },
                error: function(xhr) {
                    console.log(xhr.responseCode);
                    $('.result')
                        .show()
                        .text('Техническая ошибка')
                        .on('click', function(){
                            $(this).fadeOut(1000);
                        });
                }
            });
        }

    });


    $('.input__window').on('click', function () {

        $(this).css({'box-shadow':'0 0 5px #00bfa5 inset'})
            .next($('.tooltip'))
            .css({'display':'none'})
            .siblings($('.input__icon'))
            .css({'fill':'#00bfa5'})
    });

    $('.check__auth').on('change', function () {
        var
            $this=$(this),
            tooltip=$this.siblings('.tooltip');

        tooltip.css({'display':'none'});

    });

    $('.auth__radio').on('change', function () {
        var
            $this=$(this),
            container=$this.closest('.radio__wrapper'),
            tooltip=container.find('.tooltip');

        tooltip.css({'display':'none'});

    });

};
