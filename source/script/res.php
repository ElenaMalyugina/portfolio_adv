<?php
require '../../../.config.php';
//$user="root";
//$pass= "";
//$db="test"


$dsn="mysql:host=$host; dbname=$db; charset=$charset";

$option=array(PDO::ATTR_ERRMODE=>PDO::ERRMODE_EXCEPTION,
                PDO::ATTR_DEFAULT_FETCH_MODE=>PDO::FETCH_ASSOC);
$pdo=new PDO($dsn, $user, $pass, $option);

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













