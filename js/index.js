// let item_buttons = document.querySelectorAll('.item-button')

// for (let i = 0; i < item_buttons.length; i++) {
//     // console.log(item_buttons[i])
//     item_buttons[i].addEventListener('click', function() {
//         user_items = localStorage.getItem('user_1')
//         item = {
//             id: item_buttons[i].parentElement.dataset.id,
//             name: item_buttons[i].parentElement.dataset.name,
//             price: item_buttons[i].parentElement.dataset.price,
//             product_id: item_buttons[i].parentElement.dataset.product_id,
//             amount: 1
//         }
//         if (user_items) {
//             user_items = JSON.parse(user_items)
            
//             is_exist = false

//             for(let j = 0; j < user_items.length; j++) {
//                 if (user_items[j].id == item_buttons[i].parentElement.dataset.id) {
//                     is_exist = true
//                     user_items[j].amount++
//                     break
//                 }
//             }

//             if (is_exist) {
//                 localStorage.setItem('user_1', JSON.stringify(user_items))
//             }
//             else {
//                 user_items.push(item)
//                 localStorage.setItem('user_1', JSON.stringify(user_items))
//             }            
//         }
//         else {
//             item = JSON.stringify([item])
//             localStorage.setItem('user_1', item)
//         }
        
//         console.log(JSON.parse(localStorage.getItem('user_1')))
//     })
// }
//
localStorage.clear()
function Cart () {
    this.items = []
}

Cart.prototype.add = function (item) {
    var status = this.exist(item)
    if (status.is_exist) {
        this.items[status.index].amount++
    }
    else {
        this.items.push(item)
    }
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

    this.activate_buttons()
}

Cart.prototype.activate_buttons = function () {
    var item_buttons = document.querySelectorAll('.item-button')
    var self = this; 
    for (let i = 0; i < item_buttons.length; i++) {
        item_buttons[i].addEventListener('click', function() {
            item = {
                id: item_buttons[i].parentElement.dataset.id,
                name: item_buttons[i].parentElement.dataset.name,
                price: item_buttons[i].parentElement.dataset.price,
                product_id: item_buttons[i].parentElement.dataset.product_id,
                amount: 1
            }
            self.add(item)
            localStorage.setItem('user_1', JSON.stringify(self.items))
            console.log(JSON.parse(localStorage.getItem('user_1')))
        })
    }
}

var cart = new Cart()

cart.init()