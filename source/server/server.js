var express = require('express');

var app= express();

app.set('port', process.env.PORT || 3000);

app.use(function (req, res) {
    res.type('text/plain');
    res.status(404);
    res.send('404 - не найдено');

});

app.use(function (err, req, res, next) {
    console.error(err.stack);
    res.type('text/plain');
    res.status(500);
    res.send('500 - ошибка сервера');

});

app.listen(app.get('port'), function () {
    console.log('сервер запущен');
});



