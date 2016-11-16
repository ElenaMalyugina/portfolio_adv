var ajaxSkill=function () {
    $('.form__skill').on('submit', function (e) {
        $this=$(this);

        var msg = $this.serialize();
        $.ajax({
            type: 'POST',
            url: '/assets/script/skills.php',
            data: msg,
            success: function (data) {
                console.log('успешно')

            },
            error: function (xhr) {
                console.log(xhr.responseCode);

            }


        });

    });


};
