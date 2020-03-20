// $.ajax({
//     type: "POST", 
//     url: "cart.php",
//     success: function(result) { 
//         set_items(JSON.parse(result))
//     }
// })

// function set_items(json) {
//     let main_div = document.querySelector('#list')

//     $(main_div).css({
//         'justify-content': 'space-between',
//         'display': 'flex',
//         'background-color': 'black'
//     })
//     console.log(json)
//     for(let i in json
//         for(let j in i) {
//             console.log(j)
//         }
//     } 
// }



$( document ).ready(function() {
    let main_div = document.querySelector('#list')
    $.getJSON('items.json', function (items) {    
        for (let item in items) {
            console.log(items[item])
            let item_div = document.createAttribute('div')

            let name= document.createAttribute('div')
            
            let discription = document.createAttribute('div')
    
            let price = document.createAttribute('div')
    
            let button = document.createElement('button')
            
            item_div.appendChild(name)
            item_div.appendChild(discription)
            item_div.appendChild(price)
            item_div.appendChild(button)
            
            main_div.appendChild(item_div)
        }
    });
});