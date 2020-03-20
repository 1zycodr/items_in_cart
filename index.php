<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.0/jquery.min.js"></script>
</head>
<body>
    <?php $json = file_get_contents('items.json');?>
    <div 
    class='hidden'
    data-json='<?= $json?>'
    ></div>
    <script src="main.js"></script>
</body>
</html>