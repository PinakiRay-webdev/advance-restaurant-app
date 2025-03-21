import { navItems } from './data/navItems.js';
import { foodItems } from './data/foodItems.js';
import { categoryArray } from './data/foodCategory.js';


  const nav = document.querySelector("#nav");
  const category = document.querySelector('#category');
  const bestSellerList = document.querySelector('.best-seller-list')

  navItems.forEach((ele) => {
    const list = document.createElement("li");
    list.className = "list-none text-white cursor-pointer";
    list.textContent = ele;
    nav.appendChild(list);
  });

  const account = document.querySelector("#account");

  categoryArray.forEach(element => {
    const categoryName = document.createElement('button');
    categoryName.textContent = element;
    category.append(categoryName);

    categoryName.addEventListener('click', () => {
      document.querySelectorAll('#category button').forEach((btn) => {
        btn.classList.remove("active");
      });
      categoryName.classList.add("active");
    });
  });

  const currentUser = JSON.parse(localStorage.getItem("userData"));
  if (currentUser && currentUser.email) {
    account.innerHTML = "";
    const button = document.createElement('button');
    button.setAttribute('type', "submit");
    const userName = document.createElement('p');
    userName.textContent = currentUser.firstName + " " + currentUser.lastName;
    userName.className = 'text-white mb-1';
    button.textContent = 'logout';
    button.className = 'logout-btn bg-red-500 px-3 py-1 text-white rounded cursor-pointer';
    account.append(userName, button);

    button.addEventListener('click', () => {
      localStorage.clear();
      account.innerHTML = "";
      const loginLink = document.createElement("a");
      loginLink.href = "authentication/login/Login.html";
      const loginButton = document.createElement("button");
      loginButton.className = "bg-red-500 px-3 py-1 text-white rounded cursor-pointer";
      loginButton.textContent = "Login";
      loginLink.appendChild(loginButton);
      account.appendChild(loginLink);
    });
  } else {
    const loginLink = document.createElement("a");
    loginLink.href = "authentication/login/Login.html";
    const loginButton = document.createElement("button");
    loginButton.className = "bg-red-500 px-3 py-1 text-white rounded cursor-pointer";
    loginButton.textContent = "Login";
    loginLink.appendChild(loginButton);
    account.appendChild(loginLink);
  }

  foodItems.forEach((food) =>{
    const menuItem = document.createElement('div');
    const itemImageBox = document.createElement('div');
    const itemImage = document.createElement('img');
    const itemBio = document.createElement('div');
    const itemName = document.createElement('h3');
    const itemInfo = document.createElement('p');
    const newPrice = document.createElement('p');
    const oldPrice = document.createElement('span');
    const addToCartBtn = document.createElement('button');

    menuItem.className = 'menu-item';
    itemImageBox.className = 'bg-[#fae1dd] rounded-t-xl'
    itemImage.setAttribute('src' , food.image);
    itemBio.setAttribute('id' , 'item-bio');
    itemName.className = 'text-red-500 font-semibold text-xl';
    itemName.textContent = food.name
    itemInfo.className = 'text-zinc-600 text-base'
    itemInfo.textContent = 'Lorem ipsum dolor sit amet';
    newPrice.textContent = food.newPrice;
    oldPrice.setAttribute('id' , 'old-price');
    oldPrice.textContent = food.oldPrice;
    addToCartBtn.className = 'bg-[#353535] w-full py-2 mt-2 text-white rounded-b-xl';
    addToCartBtn.textContent = 'Add to cart';

    itemImageBox.append(itemImage);
    newPrice.append(oldPrice)
    itemBio.append(itemName , itemInfo , newPrice)
    menuItem.append(itemImageBox , itemBio , addToCartBtn);

    bestSellerList.append(menuItem)
  })
