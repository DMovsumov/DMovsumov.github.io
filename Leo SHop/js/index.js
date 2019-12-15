const laguage = ['English', 'Russian']
const currency = ['USD', 'RUB', 'EUR']
const languaguRussian = ['Аккаунт', 'Список желаний', 'Проверка', 'Войти', 'Зарегистрироваться', 'Главная', 'Женщинам', 'Мужчинам', 'Другое', 'Покупка', 'Корзина(0)']
const select_laguage = document.querySelector('.language')
const select_currency = document.querySelector('.currency')
const item = document.createElement('option')

let price = document.querySelectorAll('.price')

let lang = document.querySelectorAll('.lang')


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

let origin_price = []
for(let i = 0; i < price.length; i++){
    origin_price[i] = price[i].innerHTML
}

select_currency.addEventListener('change', (e) => {
        for(let i = 0; i < price.length; i++) {
            if(e.target.value == "RUB"){
                price[i].innerHTML = origin_price[i] * 63 + ' ' + '₽'
            }
            else if(e.target.value == "EUR"){
                price[i].innerHTML = Math.ceil(origin_price[i] / 1.11)  + ' ' + '€'
            }
            else if (e.target.value == "USD") {
                price[i].innerHTML = origin_price[i] + ' ' + '$'
            }
        }
})

let lang_english = []
for(let i = 0; i < lang.length; i++){
    lang_english[i] = lang[i].innerHTML
}

select_laguage.addEventListener('change', (e) => {
    for(let i = 0; i < lang.length; i++){
        if(e.target.value == "Russian"){
            lang[i].innerHTML = languaguRussian[i]
        }
        if(e.target.value == "English"){
            lang[i].innerHTML = lang_english[i]
        }
    }
})


   

select()
