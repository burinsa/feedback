
<?php

require_once 'vendor/autoload.php';

$name = $_POST['name'];
$email = $_POST['email'];
$tel = $_POST['tel'];
$textMessage = "Имя пользователя: $name, телефон: $tel, сообщение: {$_POST['message']}";

$transport = (new Swift_SmtpTransport('smtp.yandex.ru', 465))
        ->setUsername('burinsa')
        ->setPassword('setapjukdliuteas')
        ->setEncryption('SSL');

$mailer = new Swift_Mailer($transport);

$message = new Swift_Message();
$message->setSubject('test PHP');
$message->setFrom(['burinsa@yandex.ru' => $name]);
$message->addTo('burinsa@yandex.ru', 'Сергей');
$message->setBody($textMessage);

$result = $mailer->send($message);

?>

