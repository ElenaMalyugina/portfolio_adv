<?php
$name=$_POST[name];
$email=$_POST[email];
$text=$_POST[text];
$emailadmin='malyugina.el@yandex.ru';


$to = $emailadmin;
$sub = '=?utf-8?B?'.base64_encode('Новое сообщение с формы обратной связи').'?=';
$headers = 'From:'.$email.'; Content-type: text/plain; charset=utf-8; MIME-Version: 1.0;';
$mes = "Человек по имени ".$name.", электронный адрес ".$email." отправил сообщение из формы обратной связи \n".$text;

mail($to, $sub, $mes, $headers);

//Если просто перезагрузить
//header("Location: {$_SERVER['HTTP_REFERER']}");


//если нужна копия письма в базу данных+вывод куда-то в файл
require '../../../.config.php';
/*$host="localhost";
$user="root";
$pass= "";
$db="test";
$charset="utf8";*/

$dsn="mysql:host=$host; dbname=$db; charset=$charset";

$option=array(PDO::ATTR_ERRMODE=>PDO::ERRMODE_EXCEPTION,
    PDO::ATTR_DEFAULT_FETCH_MODE=>PDO::FETCH_ASSOC);

$pdo=new PDO($dsn, $user, $pass, $option);

$arrayMail=array('name'=>$name, 'email'=>$email, 'text'=>$text);
$mailBase = $pdo->prepare("INSERT INTO mailes (name, email, text) VALUES (:name, :email, :text)");
$mailBase->execute($arrayMail);

/*$resMail= $pdo->query("SELECT * FROM mailes");
$resM=$resMail->fetchAll();

echo "<h2>Отправленные письма </h2>";
foreach ($resM as $key => $value) {

    echo $value['name']." ".$value['email']." ".$value['text']."<br>";
}*/

