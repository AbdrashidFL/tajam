<?php 

$name = $_POST['user_name'];
$email = $_POST['user_mail'];
$subject = $_POST['user_subject'];
$message = $_POST['user_message'];

require_once('phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';

//$mail->SMTPDebug = 3;                               // Enable verbose debug output

$mail->isSMTP();                                      // Set mailer to use SMTP
$mail->Host = 'smtp.mail.ru';  // Specify main and backup SMTP servers
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = 'islam_raz_raz@mail.ru';                 // Наш логин
$mail->Password = 's5140h024i31t';                           // Наш пароль от ящика
$mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
$mail->Port = 465;                                    // TCP port to connect to
 
$mail->setFrom('islam_raz_raz@mail.ru', 'Вазген Татуашвили');   // От кого письмо 
$mail->addAddress('islam_raz_raz@mail.ru');     // Add a recipient
//$mail->addAddress('ellen@example.com');               // Name is optional
//$mail->addReplyTo('info@example.com', 'Information');
//$mail->addCC('cc@example.com');
//$mail->addBCC('bcc@example.com');
//$mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
//$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name
$mail->isHTML(true);                                  // Set email format to HTML

$mail->Subject = 'Новая заявка';
$mail->Body    = '
	Пользователь оставил свои данные <br> 
	Name: ' . $name . ' <br>
	Email: ' . $email . ' <br>
	Subject: ' . $subject . ' <br>
	Message: ' . $message . '';
$mail->AltBody = 'Это альтернативный текст';

if(!$mail->send()) {
    echo "Ошибка";;
} 
else {
	header('location: ../index.php');

}

?>