<?php
$host="localhost";
$user="root";
$pass= "";

//$user="ct61014_adv";
//$pass= "jpG34MME";
$db="test";
$charset="utf8";

$dsn="mysql:host=$host; dbname=$db; charset=$charset";

$option=array(PDO::ATTR_ERRMODE=>PDO::ERRMODE_EXCEPTION,
                PDO::ATTR_DEFAULT_FETCH_MODE=>PDO::FETCH_ASSOC);
$pdo=new PDO($dsn, $user, $pass, $option);


//$res= $pdo->query('SELECT name FROM users');

$name="лена";

$res=$pdo->prepare('SELECT name FROM users WHERE name = ?');

$res->execute(array($name))->fetchAll();



//while($row=$res->fetch()){echo $row['name'];}







?>