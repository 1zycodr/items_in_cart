let item_buttons = document.querySelectorAll('.item-button')

for (let i = 0; i < item_buttons.length; i++) {
    // console.log(item_buttons[i])
    item_buttons[i].addEventListener('click', function() {
        user_items = localStorage.getItem('user_1')
        item = {
            id: item_buttons[i].parentElement.dataset.id,
            name: item_buttons[i].parentElement.dataset.name,
            price: item_buttons[i].parentElement.dataset.price,
            product_id: item_buttons[i].parentElement.dataset.product_id,
            amount: 1
        }
        if (user_items) {
            user_items = JSON.parse(user_items)
            
            is_exist = false

            for(let j = 0; j < user_items.length; j++) {
                if (user_items[j].id == item_buttons[i].parentElement.dataset.id) {
                    is_exist = true
                    user_items[j].amount++
                    break
                }
            }

            if (is_exist) {
                localStorage.setItem('user_1', JSON.stringify(user_items))
            }
            else {
                user_items.push(item)
                localStorage.setItem('user_1', JSON.stringify(user_items))
            }            
        }
        else {
            item = JSON.stringify([item])
            localStorage.setItem('user_1', item)
        }
        
        console.log(JSON.parse(localStorage.getItem('user_1')))
    })
}

localStorage.clear()