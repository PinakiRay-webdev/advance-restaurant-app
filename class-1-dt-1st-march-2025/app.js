import { navItems } from './data/navItems.js';
import { foodItems } from './data/foodItems.js';
import { categoryArray } from './data/foodCategory.js';

document.addEventListener('DOMContentLoaded', () => {
  const nav = document.querySelector("#nav");
  const category = document.querySelector('#category');

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
});