import { CardInfo } from './js/cardAdd.js'; 

const addTobasket = document.querySelectorAll('#addBasket'); 
const basketList = document.querySelector('.shop__basket-list'); 

export let basket = []; 

if (localStorage.getItem('basket')) { 
    basket = JSON.parse(localStorage.getItem('basket')); 
    basket.forEach((task) => renderItem(task)); 
} 

function saveToLocalStorage(){ 
    localStorage.setItem('basket', JSON.stringify(basket)); 
} 

function addtaskHandler(event){ 
    const parent = event.target.closest('.card__item-inner'); 
    const url = parent.children[0].children[0].src; 
    const title = parent.children[1].children[0].innerText; 

    const newTask = { 
        id: Date.now(), 
        img: url, 
        title: title 
    }; 

    basket.push(newTask); 
    saveToLocalStorage(); 
    renderItem(newTask); 
} 

function renderItem(task){ 
    const basketItem = `<li id=${task.id} class="basket__item"> 
                            <img src="${task.img}" alt="card"> 
                            <button id='delete' class="basket__item-button"> 
                                <img src="./public/icon/removeItem.svg" alt="removeItem"> 
                            </button> 
                        </li>`; 

    basketList.insertAdjacentHTML('beforeend', basketItem); 
} 

function deleteItemHandler(event){ 
    const clickedElement = event.target; 
    const parent = clickedElement.closest('.basket__item'); 
    const id = Number(parent.id); 

    if(clickedElement.matches('#delete')){ 
        basket = basket.filter((task) => task.id !== id); 
        parent.remove(); 
        saveToLocalStorage(); 
    } 
} 


addTobasket.forEach(button => { 
    button.addEventListener('click', addtaskHandler); 
}); 

basketList.addEventListener('click', deleteItemHandler); 
