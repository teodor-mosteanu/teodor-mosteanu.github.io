<?php
$errorMSG = "";

if (empty($_POST["name"])) {
    $errorMSG = "Va rugam completati numele ";
} else {
    $name = $_POST["name"];
}

if (empty($_POST["email"])) {
    $errorMSG = "Va rugam completati e-mailul ";
} else {
    $email = $_POST["email"];
}

if (empty($_POST["message"])) {
    $errorMSG = "Va rugam completati mesajul ";
} else {
    $message = $_POST["message"];
}

if (empty($_POST["terms"])) {
    $errorMSG = "Bifati casuta cu temeni si contacte ";
} else {
    $terms = $_POST["terms"];
}

$EmailTo = "doru06@yahoo.com";
$Subject = "Mesaj nou de pe site";

// prepare email body text
$Body = "";
$Body .= "Nume: ";
$Body .= $name;
$Body .= "\n";
$Body .= "Email: ";
$Body .= $email;
$Body .= "\n";
$Body .= "Messaj: ";
$Body .= $message;
$Body .= "\n";
$Body .= "Termeni: ";
$Body .= $terms;
$Body .= "\n";

// send email
$success = mail($EmailTo, $Subject, $Body, "From:".$email);

// redirect to success page
if ($success && $errorMSG == ""){
   echo "success";
}else{
    if($errorMSG == ""){
        echo "Something went wrong :(";
    } else {
        echo $errorMSG;
    }
}
?>