import { cardData } from './cardInfo.js';


const fullInner = document.querySelector('.fullcard_inner')
const url = new URL(window.location.href);
const id = url.searchParams.get('id');
const productId = parseInt(id, 10);



function getProductById(id) {
    return cardData.find(product => product.index === id);
}

const product = getProductById(productId);

function createFullItem(){
    const cardFullitem = `

            <div class="fullcard-left">
                <div class="fullcard-left__top">
                    <div class="fullcard-left__img">
                        <img src=${product.img} alt="card">
                    </div>
                    <div class="fullcard-left__info">
                        <h1 class="fullcard-left__title">${product.title}</h1>
                        <p class="card__series fullcard-left__series">${product.series}</p>
                        <div class="fullcard-left__rating"> 
                            <img src="./public/icon/rating.svg" alt="">
                            <span class="rating__value">4.5 / 5</span>
                        </div>
                        <span class="card__price fullcard-left__price">${product.smv + product.price}</span>
                        <p class="fullcard-left__desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pellentesque tellus imperdiet mattis. 
                            ${product.history}
                        </p>
                        <button class="flex fullcard-left__button shop__basket-link ">
                            <img src="./public/icon/addbask.svg" alt="basket">
                            В корзину
                        </button>
                        <a href="./index.html" class="fullcard-left__back">
                            <img src="./public/icon/back.svg" alt="back">
                            Список товаров
                        </a>
                    </div>
                </div>
                <div class="fullcard-left__bottom">
                    <p class="fullcard-left__fulldesc">
                         ${product.description}
                    </p>
                </div>
            </div>
            <div class="shop__rigth fullcard__rigth">
                <div class="shop__basket flex">
                    <h2 class="shop__basket-title">Корзина</h2>
                    <ul class="shop__basket-list">
                    </ul>
                    <a class="shop__basket-link flex" href="#">
                        <img src="./public/icon/basket.svg" alt="basket">
                        Корзина
                    </a>
                </div>
                <div class="shop__orders flex">
                    <h2 class="shop__orders-title">Заказы</h2>
                    <ul class="shop__orders-list"></ul>
                </div>
            </div> `

    fullInner.innerHTML = cardFullitem;
}



function displayOrders() {
    
    const basketList = document.querySelector('.shop__basket-list');
    // Получаем массив корзины из localStorage
    const storedBasket = localStorage.getItem('basket');
    
    if (storedBasket) {
        const basketItems = JSON.parse(storedBasket);
        
        // Проходим по каждому элементу в корзине и создаем элементы списка
        basketItems.forEach(item => {

            const basketItem = `<li id=${item.id} class="basket__item"> 
                                    <img src="${item.img}" alt="card"> 
                                </li>`; 
        
            basketList.insertAdjacentHTML('beforeend', basketItem);
        });
    }
}

createFullItem()
displayOrders();

