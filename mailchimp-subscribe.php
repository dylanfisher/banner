<?php
    // $path = dirname(__FILE__);
    // include_once($path);
    require_once __DIR__ . '/vendor/Drewm/mailchimp-api/src/Drewm/MailChimp.php';
    require __DIR__ . '/vendor/autoload.php';
    include __DIR__ . '/../../../../private/banner/mailchimp-api.php';
    if(isset($_POST['email'])){
        $email = $_POST['email'];
        $MailChimp = new \vendor\Drewm\MailChimp($apiKey);
        $result = $MailChimp->call('lists/subscribe', array(
            'id'                => '1933db5ff8',
            'email'             => array('email'=>$email),
            'double_optin'      => true,
            'update_existing'   => true,
            'replace_interests' => false,
            'send_welcome'      => false,
        ));
    }
?>