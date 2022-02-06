<?php 
    $name = $_POST['name'];
    $phone = $_POST['phone'];
    $msg = $_POST['msg'];

    $name = htmlspecialchars($name);
    $phone = htmlspecialchars($phone);
    $msg = htmlspecialchars($msg);

    $name = urldecode($name);
    $phone = urldecode($phone);
    $msg = urldecode($msg);

    $name = trim($name);
    $phone = trim($phone);
    $msg = trim($msg);

    if (mail("alexeiromanov41@gmail.com, alexeiromanov41@yandex.ru", "Обратная связь", "Имя: ".$name."\r\nТелефон: ".$phone."\r\nСообщение: ".$msg,"From: Nalog.рф")) {
        // echo "сообщение успешно отправлено";
        // $redirect = isset($_SERVER['HTTP_REFERER'])? $_SERVER['HTTP_REFERER']:'form_ok.html';
        $redirect = isset($_SERVER['HTTP_REFERER'])? 'index.html':$_SERVER['HTTP_REFERER'];
        header("Location: $redirect");
        exit();
    } 
        // else {
        //     // echo "при отправке сообщения возникли ошибки";
        //     $redirect = isset($_SERVER['HTTP_REFERER'])? 'form_fail.html':$_SERVER['HTTP_REFERER'];
        //     header("Location: $redirect");
        //     exit();
        // }
?>
