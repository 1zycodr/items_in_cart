<?php
    $data = isset($_POST['data']) ? $_POST['data'] : null;
    if ($data) {
        file_put_contents('cart.json', $data);
    }
?>