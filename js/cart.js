function fill_page(user_items) {
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

function Cart () {
    this.items = []
}

Cart.prototype.exist = function (item) {
    var data = {
        is_exist: false,
        index: null
    }

    for(let i = 0; i < this.items.length; i++) {
        if (this.items[i].id == item.id) {
            data.is_exist = true
            data.index = i
            break
        }
    }
    
    return data
}

Cart.prototype.init = function () {
    ls_items = JSON.parse(localStorage.getItem('user_1'))

    if (ls_items) this.items = ls_items

    fill_page(this.items)

    this.activate_buttons()
    this.activate_ajax()
}

Cart.prototype.remove = function (item_id) {
    for (let i = 0; i < this.items.length; i++) {
        if (this.items[i].id == item_id) {
            if (this.items[i].amount == 1) {
                this.items.splice(i, 1)
            }
            else {
                this.items[i].amount--
            }
            fill_page(this.items)
            this.activate_buttons()
            break
        }
    }
}

Cart.prototype.activate_buttons = function () {
    rem_buttons = document.querySelectorAll('.decrease')
    var self = this
    for (let i = 0; i < rem_buttons.length; i++) {
        rem_buttons[i].addEventListener ('click', function () {
            self.remove(rem_buttons[i].dataset.item_id)
        })
    }
}

Cart.prototype.activate_ajax = function() {
    var self = this
    $('.ajax').on('click', function () {
        $.ajax ({
            type: 'POST',
            url: 'to_json.php', 
            data: {data: JSON.stringify(self.items)},
            success: function(data) {
                alert('Done!')
            }
        })
    })
}

var cart = new Cart()

cart.init()