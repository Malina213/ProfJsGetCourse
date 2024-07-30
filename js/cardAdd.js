import { cardData } from './cardInfo.js';


export const getcardData = cardData.map(item => {
     
    
      return `
      <li id = ${item.index}  class="card__item">
        <article class="card__item-inner">
            <a href="./indexCard.html?id=${item.index}" class="card__top">
                <img src=${item.img} alt="card" onclick="location.href='http://127.0.0.1:5500/indexCard.html';">
            </a>
            <div class="card__name">
                <h3 class="card__title fs-family">${item.title}</h3>
                <p class="card__series">${item.series}</p>
            </div>
            <div class="card__bottom">
                <span class="card__price fs-family">${item.smv + item.price}</span>
                <button id="addBasket" class="card__button flex">
                    <img src="./public/icon/button.svg" alt="basket">
                </button>
            </div>
        </article>
    </li>`
});
  
export const CardInfo = (document.querySelector('.shop__list').insertAdjacentHTML('beforeend',getcardData.join('')));