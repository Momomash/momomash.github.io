<?php
if(isset($_POST['submit'])){
/* Устанавливаем e-mail Кому и от Кого будут приходить письма */
	$to = "alexbokadorov@mail.ru"; // Здесь нужно написать e-mail, куда будут приходить письма
    $from = "http://bklawyer.ru/"; // Здесь нужно написать e-mail, от кого будут приходить письма, например no-reply@epicblog.net

	$first_name = $_POST['first_name'];
	$email = $_POST['email'];
	$phone = $_POST['phone'];
	$message = $_POST['message'];
    $subject = "Форма отправки сообщений с сайта Epic Blog";//Фиксированная тема письма



/* Переменная, которая будет отправлена на почту со значениями, вводимых в поля */
$mail_to_myemail = "Здравствуйте!
Было отправлено сообщение с сайта http://bklawyer.ru/!
Имя отправителя: $first_name
E-mail: $email
Номер телефона: $phone
Текст сообщения: $message
Чтобы ответить на письмо, создайте новое сообщение, скопируйте электронный адрес и вставьте в поле Кому.";

$headers = "From: $from \r\n";

/* Отправка сообщения, с помощью функции mail() */
    mail($to, $subject, $mail_to_myemail, $headers . 'Content-type: text/plain; charset=utf-8');

}

include "main.html";
?>