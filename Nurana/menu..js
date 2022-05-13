const open = document.getElementById('open')
const menuList = document.getElementById('menuList')
const close = document.getElementById('close')
const img = document.getElementById('img')

open.addEventListener('click', function(){
    menuList.style.right = '0%';
})

close.addEventListener('click', function(){
    menuList.style.right = '-50%';
})