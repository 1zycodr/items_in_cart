// $.ajax({
//     type: "POST", 
//     url: "cart.php",
//     success: function(result) { 
//         set_items(JSON.parse(result))
//     }
// })

// function set_items(json) {
//     let body = document.body
//     let main_div = document.createElement('div')

//     $(main_div).css({
//         'justify-content': 'space-between',
//         'display': 'flex',
//         'background-color': 'black'
//     })
//     console.log(json)
//     console.log(main_div)
//     console.log(body)
//     body.appendChild(main_div)
// }



// $( document ).ready(function() {
//     let body = document.body
//     let main_div = document.createElement('div')
//     $(main_div).css({
//         'justify-content': 'space-between',
//         'display': 'flex',
//         'background-color': 'black'
//     })
//     main_div.setAttribute('id', 'list')
//     console.log(main_div)
//     body.appendChild(main_div)
    
//     $.getJSON('items.json', function (items) {    
//         for (let item in items) {
//             console.log(items[item])
//             // let item_div = document.createAttribute('div')

//             // let name= document.createAttribute('div')
            
//             // let discription = document.createAttribute('div')
    
//             // let price = document.createAttribute('div')
    
//             // let button = document.createElement('button')
            
//             // item_div.appendChild(name)
//             // item_div.appendChild(discription)
//             // item_div.appendChild(price)
//             // item_div.appendChild(button)
            
//         }
//     });
// });

var items = JSON.parse(document.querySelector('.hidden').dataset.json)

let items_list = document.createElement('div')

$(items_list).css({
    'justify-content': 'space-between',
    'display': 'flex'
})
items_list.setAttribute('id', 'list')

for(let item in items) {
    console.log(items[item])
    let item_div = document.createElement('div')
    
    let name = document.createElement('div')        
    let discription = document.createElement('div') 
    let price = document.createElement('div')
    let button = document.createElement('button')
    
    name.innerHTML = item
    discription.innerHTML = items[item].discription
    price.innerHTML = items[item].price
    button.value = 'add'

    item_div.appendChild(name)
    item_div.appendChild(discription)
    item_div.appendChild(price)
    item_div.appendChild(button)
    
    items_list.appendChild(item_div)
}

document.body.appendChild(items_list)
