<?php
require '../../../.config.php';
$dsn="mysql:host=$host; dbname=$db; charset=$charset";
$option=array(PDO::ATTR_ERRMODE=>PDO::ERRMODE_EXCEPTION,
                PDO::ATTR_DEFAULT_FETCH_MODE=>PDO::FETCH_ASSOC);
$pdo=new PDO($dsn, $user, $pass, $option);
session_start();
    $login = $_POST['login'];
    $password = crypt($_POST['password'], $login);
    $arraySel = array('login' => $login);
    $passBase = $pdo->prepare("SELECT password FROM users WHERE login=:login");
    $passBase->execute($arraySel);
    $res = $passBase->fetch(PDO::FETCH_ASSOC);
if(isset($login) && ($password)){
    if ($password === $res['password']) {
        $idBase = $pdo->prepare("SELECT id FROM users WHERE login=:login");
        $idBase->execute($arraySel);
        $id = $idBase->fetch(PDO::FETCH_ASSOC);
        $_SESSION['user_id'] = $id;
        if ($_SESSION['user_id']) {
            header("Location: /admin.html");
        } else {
            header("Location: {$_SERVER['HTTP_REFERER']}");
            session_destroy();
            exit;
        }
    } else {
        header("Location: {$_SERVER['HTTP_REFERER']}");
        session_destroy();
        exit;
    }
    }
else{
    header("Location: {$_SERVER['HTTP_REFERER']}");
    session_destroy();
    exit;
}