import './app1.css'
import $ from 'jquery'

const $plus = $('#plus')
const $minus = $('#minus')
const $mul = $('#mul')
const $divide = $('#divide')
const $number = $('#number')

const record = localStorage.getItem('n')
$number.text(record || 9527)

$plus.on('click',() => {
    let n = parseInt($number.text())
    n += 666
    localStorage.setItem('n', n)
    $number.text(n)
})

$minus.on('click',() => {
    let n = parseInt($number.text())
    n -= 666
    localStorage.setItem('n',n)
    $number.text(n)
})

$mul.on('click',() => {
    let n = parseInt($number.text())
    n *= 777
    localStorage.setItem('n',n)
    $number.text(n)
})

$divide.on('click',() => {
    let n = parseInt($number.text())
    n /= 777
    localStorage.setItem('n',n)
    $number.text(n)
})
