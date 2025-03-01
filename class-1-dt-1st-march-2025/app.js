const navItems = ['home' , 'our menu' , 'our offers' , 'know us better' , 'your orders' , 'cart']

const nav = document.querySelector('#nav');

navItems.forEach(ele =>{
    const list = document.createElement('li');
    list.className = 'list-none text-white cursor-pointer'
    list.textContent = ele
    nav.appendChild(list)
})
