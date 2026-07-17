function init() {
    renderBurger();
    renderPizza();
    renderSalad();
    renderBasket();
}
function renderBasket() {
    let basketRef = document.getElementById(`basket`);
    basketRef.innerHTML = "";
    basketRef.innerHTML += /*html*/ `
        <div class="basket-content" id="basketContent"> 
        </div> 
    `;

    let contentRef = document.getElementById(`basketContent`);
    contentRef.innerHTML = "";
    contentRef.innerHTML += /*html*/ `
        <h3>Your Basket</h3>
    `;
    //Dish wrapper einbauen
    for (let i = 0; i < basket.length; i++) {
        contentRef.innerHTML += /*html*/ `
            <div class="dishes">
                <h4>${basket[i].name}</h4>
                <div class="order-price">
                    <div class="price">
                        <button>M</button>
                        <p>${basket[i].addet}</p>
                        <button>+</button>
                    </div>
                    <p>${basket[i].price}</p>
                </div>
            </div>
        `;
    }
    contentRef.innerHTML += /*html*/ `
        <table>
            <tr>
                <td>Subtotal</td>
                <td>0€</td>
            </tr>
            <tr>
                <td>Delivery fee</td>
                <td>0€</td>
            </tr>
            <tr>
                <th>Total</th>
                <th>0€</th>
            </tr>
        </table>
    `;
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
