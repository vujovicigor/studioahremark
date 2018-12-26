<?php
    header('Content-Type: application/json');
    $to = "info@credo.agency";
    $from = $_POST["email"];
    $imeprezime = $_POST["name"];
    $phone = $_POST["phone"];
    $subject = $_POST["subject"];
    $message = $_POST["message"];
    $message = "Poruka od:" .$imeprezime. "\r\n" .$message;
    $headers = "From: $imeprezime <$from>"."\r\n"."Reply-to: $from"."\r\n"."X-Mailer: PHP/".phpversion();

    if(mail($to, $subject, $message, $headers)) {
      echo json_encode(array("Message" => "Message succesfuly sent, we'll get back to you soon.", "status" => true ));
    } else {
      echo json_encode(array("Message" => "Error sending message, please try later.", "status" => false ));
    }
  ?>
