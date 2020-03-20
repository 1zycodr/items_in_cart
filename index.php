<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Items</title>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.0/jquery.min.js"></script>
    <link rel="stylesheet" href="css/index.css">
</head>
<body>
    <div class="product-list">
        <div
            data-id="1"
            data-name="Item1"
            data-price="1000"
            data-product_id="1"
            class="product-item"
        >
            <p>Item1</p>
            <p>Price: 1000</p>
            <button class="item-button">Add</button> 
        </div>
        <div
            data-id="2"
            data-name="Item2"
            data-price="2000"
            data-product_id="2"
            class="product-item"
        >
            <p>Item2</p>
            <p>Price: 2000</p>
            <button class="item-button">Add</button> 
        </div>
        <div
            data-id="3"
            data-name="Item3"
            data-price="1500"
            data-product_id="3"
            class="product-item"
        >
            <p>Item3</p>
            <p>Price: 1500</p>
            <button class="item-button">Add</button> 
        </div>
    </div>
    <a href="cart.php">Cart</a>
    <script src="js/index.js"></script>
</body>
</html>