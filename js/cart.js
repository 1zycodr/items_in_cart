var user_items = JSON.parse(localStorage.getItem('user_1'))
var item_list = document.querySelector('#item_list')

for (let i = 0; i < user_items.length; i++) {
    let item_div = document.createElement('div')
    item_div.className = 'item_div'

    let item_name = document.createElement('p')
    let item_price = document.createElement('p')
    let item_del_button = document.createElement('button')

    item_name.innerHTML = user_items[i].name
    item_price.innerHTML = 'Price: ' + user_items[i].price
    item_del_button.innerHTML = 'Decrease'
    
    item_div.appendChild(item_name)
    item_div.appendChild(item_price)
    item_div.appendChild(item_del_button)

    item_list.appendChild(item_div)
    console.log(item_div)
}

console.log(user_items)