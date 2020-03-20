function fill_page() {
    
    var user_items = JSON.parse(localStorage.getItem('user_1'))
    var item_list = document.querySelector('#item_list')
    document.body.removeChild(item_list)

    item_list = document.createElement('div')
    item_list.setAttribute('id', 'item_list')

    if (user_items != null && user_items.length != 0) { 
        for (let i = 0; i < user_items.length; i++) {
            let item_div = document.createElement('div')
            item_div.className = 'item_div'

            let item_name = document.createElement('p')
            let item_price = document.createElement('p')
            let item_amount = document.createElement('p')
            let item_del_button = document.createElement('button')
            
            item_name.innerHTML = user_items[i].name
            item_price.innerHTML = 'Price: ' + user_items[i].price
            item_amount.innerHTML = 'Amount: ' + user_items[i].amount
            item_del_button.innerHTML = 'Decrease'
            item_del_button.setAttribute('data-item_id', user_items[i].id)
            item_del_button.setAttribute('class', 'decrease')

            item_del_button.addEventListener('click', function() {
                items = JSON.parse(localStorage.getItem('user_1'))
                for (let j = 0; j < items.length; j++) {
                    if (items[i].id == this.dataset.item_id) {
                        if (items[i].amount == 1) {
                            items.splice(i, 1)
                        }
                        else {
                            items[i].amount--
                        }
                        break
                    }
                }
                localStorage.setItem('user_1', JSON.stringify(items))
                fill_page();
            })

            item_div.appendChild(item_name)
            item_div.appendChild(item_price)
            item_div.appendChild(item_amount)
            item_div.appendChild(item_del_button)

            item_list.appendChild(item_div)
        }
    }
    else {
        let h = document.createElement('h3')
        h.innerHTML = 'Your cart is empty'
        item_list.appendChild(h)
    }

    document.body.appendChild(item_list)
}

fill_page()