<?php
    header('Content-Type: application/json');


    // MEJL VLASNIKU
    $to = "info@credo.agency";

    $from = $_POST["email"];
    $imeprezime = $_POST["name"];
    $phone = $_POST["phone"];
    $subject = $_POST["subject"];
    $message = $_POST["message"];
    $message = "<div style='color: #000000;'>Name: " .$imeprezime. "<br>" . "Email: " .$from. "<br>". "Phone: " .$phone. "<br>". "Subject: " .$subject. "</div><br>". "<div>" .$message . "</div>";
    //$headers = "From: $imeprezime <$to>"."\r\n"."Reply-to: $from"."\r\n"."X-Mailer: PHP/".phpversion();



    $url = 'https://api.sendgrid.com/';
    $user = 'agency';
    $pass = 'kuwait2019';

    $params = array(
        'api_user'  => 'credo'.$user,
        'api_key'   => 'credo'.$pass,
        'to'        => $to,
        'subject'   => $subject,
        //'html'      => 'html body',
        'html'      => $message,
        'from'      => 'info@credo.agency',
      );

    $request =  $url.'api/mail.send.json';

    // Generate curl request
    $session = curl_init($request);
    // Tell curl to use HTTP POST
    curl_setopt ($session, CURLOPT_POST, true);
    // Tell curl that this is the body of the POST
    curl_setopt ($session, CURLOPT_POSTFIELDS, $params);
    // Tell curl not to return headers, but do return the response
    curl_setopt($session, CURLOPT_HEADER, false);
    // Tell PHP not to use SSLv3 (instead opting for TLS)
    //curl_setopt($session, CURLOPT_SSLVERSION, CURL_SSLVERSION_TLSv1_2);

    //Turn off SSL
    curl_setopt($session, CURLOPT_SSL_VERIFYPEER, false);//New line
    curl_setopt($session, CURLOPT_SSL_VERIFYHOST, false);//New line

    curl_setopt($session, CURLOPT_RETURNTRANSFER, true);

    // obtain response
    $response = curl_exec($session);

    // print everything out
    //var_dump($response,curl_error($session),curl_getinfo($session));

    curl_close($session);




    // MEJL KLIJENTU
    $to = $_POST["email"];
    $from = "info@credo.agency";
    $imeprezime = $_POST["name"];
    $subject = 'Credo'; // PItaj Iliju koji subject oce
$message ="
<div>Dear $imeprezime,</div>
&nbsp;
<div>Thank you for showing interest for our services. We will get back to you as soon as possible.</div>
&nbsp;
<div>Best regards,<br>
CREDO</div>";
    $fullname = $imeprezime;
    $url = 'https://api.sendgrid.com/';
    $user = 'agency';
    $pass = 'kuwait2019';

  $params = array(
    'api_user'  => 'credo'.$user,
    'api_key'   => 'credo'.$pass,
    'to'        => $to,
    'subject'   => $subject,
    'from'      => $from,
    'html' => $message,

  );
    $request =  $url.'api/mail.send.json';

    // Generate curl request
    $session = curl_init($request);
    // Tell curl to use HTTP POST
    curl_setopt ($session, CURLOPT_POST, true);
    // Tell curl that this is the body of the POST
    curl_setopt ($session, CURLOPT_POSTFIELDS, $params);
    // Tell curl not to return headers, but do return the response
    curl_setopt($session, CURLOPT_HEADER, false);
    // Tell PHP not to use SSLv3 (instead opting for TLS)
    //curl_setopt($session, CURLOPT_SSLVERSION, CURL_SSLVERSION_TLSv1_2);

    //Turn off SSL
    curl_setopt($session, CURLOPT_SSL_VERIFYPEER, false);//New line
    curl_setopt($session, CURLOPT_SSL_VERIFYHOST, false);//New line

    curl_setopt($session, CURLOPT_RETURNTRANSFER, true);

    // obtain response
    $response = curl_exec($session);

    // print everything out
    //var_dump($response,curl_error($session),curl_getinfo($session));

    curl_close($session);



    echo json_encode(array("Message" => "Message succesfuly sent, we'll get back to you soon.", "status" => true ));




/*
    if(mail($to, $subject, $message, $headers)) {
      echo json_encode(array("Message" => "Message succesfuly sent, we'll get back to you soon.", "status" => true ));
    } else {
      echo json_encode(array("Message" => "Error sending message, please try later.", "status" => false ));
    }
*/
?>
