<?php
$host="localhost";
$user="ct61014_adv";
$pass= "jpG34MME";
$db="ct61014_adv";
$charset="utf8";

//добавление пользователя в базу.
//Раскомментировать, если новый пользователь

/*$dsn="mysql:host=$host; dbname=$db; charset=$charset";

$option=array(PDO::ATTR_ERRMODE=>PDO::ERRMODE_EXCEPTION,
                PDO::ATTR_DEFAULT_FETCH_MODE=>PDO::FETCH_ASSOC);
$pdo=new PDO($dsn, $user, $pass, $option);


$loginIn="lena";
$passIn="12345";
$passwordIn=crypt($passIn, $loginIn);
$comment='first';
$array1=array('login'=>$loginIn, 'password'=>$passwordIn, 'comment'=>$comment);
$res = $pdo->prepare("INSERT INTO users (login, password, comment) VALUES (:login, :password, :comment)");
$res->execute($array1);*/
