const age = prompt('Введите ваш возраст')

let result = null

if (`${age}`>=18) {
    result = 'Вы совершеннолетний'
    alert(result)
} else {
    result='Вы несовершеннолетний'
    alert(result)
}