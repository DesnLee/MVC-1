import './app2.css'
import $ from 'jquery'

const $tabBar = $('#tabBar')
const $content = $('#content')

$tabBar.on('click', 'li' , e => {
    const $li = $(e.currentTarget)
    $li.addClass('selected')
        .siblings()
        .removeClass('selected')
    const index = $li.index();
    $content
        .children()
        .eq(index)
        .addClass('active')
        .siblings()
        .removeClass('active')
})

$tabBar.children().eq(0).trigger('click')
