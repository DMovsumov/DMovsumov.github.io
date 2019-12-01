const laguage = ['English', 'Russian', 'Spain']
const currency = ['USD', 'RUB', 'EUR']
const select_laguage = document.querySelector('.language')
const select_currency = document.querySelector('.currency')
const item = document.createElement('option')

function select() {
    for(let i = 0; i < laguage.length; i++){
        item.value = laguage[i]
        item.text = laguage[i]
        select_laguage.appendChild(item.cloneNode(true))
    }

    for(let i = 0; i < currency.length; i++){
        item.value = currency[i]
        item.text = currency[i]
        select_currency.appendChild(item.cloneNode(true))
    }
}

select()
