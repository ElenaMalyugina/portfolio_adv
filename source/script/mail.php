<?php
$name=$_POST[name];
$email=$_POST[email];
$text=$_POST[text];
$emailadmin='malyugina.el@yandex.ru';


$to = $emailadmin;
$sub = '=?utf-8?B?'.base64_encode('Новое сообщение с формы обратной связи').'?=';
$headers = 'From:'.$email.'; Content-type: text/plain; charset=utf-8; MIME-Version: 1.0;';
$mes = "Человек по имени ".$name.", электронный адрес ".$email." отправил сообщение из формы обратной связи <br/>".$text;

mail($to, $sub, $mes, $headers);

header("Location: {$_SERVER['HTTP_REFERER']}");
exit;