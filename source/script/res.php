<?php
$host="localhost";
//$user="root";
//$pass= "";
//$db="test"

$user="ct61014_adv";
$pass= "jpG34MME";
$db="ct61014_adv";
$charset="utf8";

$dsn="mysql:host=$host; dbname=$db; charset=$charset";

$option=array(PDO::ATTR_ERRMODE=>PDO::ERRMODE_EXCEPTION,
                PDO::ATTR_DEFAULT_FETCH_MODE=>PDO::FETCH_ASSOC);
$pdo=new PDO($dsn, $user, $pass, $option);

//добавление пользователя в базу.
//Раскомментировать, если новый пользователь
/*$loginIn="lena";
$passIn="12345";
$passwordIn=crypt($passIn, $loginIn);
$comment='first';
$array1=array('login'=>$loginIn, 'password'=>$passwordIn, 'comment'=>$comment);
$res = $pdo->prepare("INSERT INTO users (login, password, comment) VALUES (:login, :password, :comment)");
$res->execute($array1);*/

$login=$_POST['login'];
$password=crypt($_POST['password'], $login);
$arraySel= array('login'=>$login);

$passBase = $pdo->prepare("SELECT password FROM users WHERE login=:login");
$passBase->execute($arraySel);
$res=$passBase->fetch(PDO::FETCH_ASSOC);



if($password===$res['password']){
    echo ('Доступ разрешен');
}
else{
   // header('HTTP/1.1 401 Unauthorized');
   header("Location: {$_SERVER['HTTP_REFERER']}");
   exit;

}













