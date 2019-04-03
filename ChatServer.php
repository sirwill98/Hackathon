<?php
/**
 * Created by IntelliJ IDEA.
 * User: stuar
 * Date: 02/04/2019
 * Time: 21:21
 */

if(isset($_POST["test"])){
    echo "";
}
$fromClient = $_POST["test"];

$messages = [];
$messages["0"] = new Message("0", "User1", "User2", "Hello");
$messages["1"] = new Message("1", "User2", "User1", "Hello back");

class Message
{
    function Message($messageId, $sender, $recipient, $message)
    {
        $this -> id = $messageId;
        $this -> sender = $sender;
        $this -> recipient = $recipient;
        $this -> message = $message;
    }
}

function addMessage($message){
    $mess = json_decode($message);
    $id = $mess -> id;
    $recipient = $mess -> recipient;
    $sender = $mess -> sender;
    $message = $mess -> message;
    $messages[$id] = new Message($id, $sender, $recipient, $message);
}

?>