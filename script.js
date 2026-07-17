function init() {
    renderBurger();
    renderPizza();
    renderSalad();
    // renderBasket();
}

function renderBurger() {
    let burgerRef = document.getElementById(`burgerMenu`);
    burgerRef.innerHTML = "";

    for (let i = 0; i < burger.length; i++) {
        burgerRef.innerHTML += /*html*/ `
            <article class="menu-box">
                <div class="dish-img">
                    <img src=${burger[i].img}>
                </div>
                <section class="menu-descr">
                    <div class=menu-text>
                        <h3> ${burger[i].name}</h3>
                        <p> ${burger[i].descr}</p>
                    </div>
                    <div class=menu-price>
                        <p> ${burger[i].price}0€</p>
                        <button id=burgerBtn${i}>Add to basket </button>
                    </div>
                </section>
            </article>
        `;
    }
}

function renderPizza() {
    let pizzaRef = document.getElementById(`pizzaMenu`);
    pizzaRef.innerHTML = "";

    for (let i = 0; i < pizza.length; i++) {
        pizzaRef.innerHTML += /*html*/ `
            <article class="menu-box">
                <div class="dish-img">
                    <img src=${pizza[i].img}>
                </div>
                <section class="menu-descr">
                    <div class=menu-text>
                        <h3> ${pizza[i].name}</h3>
                        <p> ${pizza[i].descr}</p>
                    </div>
                    <div class=menu-price>
                        <p> ${pizza[i].price}0€</p>
                        <button id=pizzaBtn${i}>Add to basket </button>
                    </div>
                </section>
            </article>
        `;
    }
}

function renderSalad() {
    let saladRef = document.getElementById(`saladMenu`);
    saladRef.innerHTML = "";

    for (let i = 0; i < salad.length; i++) {
        saladRef.innerHTML += /*html*/ `
            <article class="menu-box">
                <div class="dish-img">
                    <img src=${salad[i].img}>
                </div>
                <section class="menu-descr">
                    <div class=menu-text>
                        <h3> ${salad[i].name}</h3>
                        <p> ${salad[i].descr}</p>
                    </div>
                    <div class=menu-price>
                        <p> ${salad[i].price}0€</p>
                        <button id=saladBtn${i}>Add to basket </button>
                    </div>
                </section>
            </article>
        `;
    }
}
