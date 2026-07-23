function basketContentTemplate() {
    return /*html*/ `
        <div class="basket-content" id="basketContent"> 
        </div> 
    `;
}

function basketDishWrapperTemplate() {
    return /*html*/ `
        <h3>Your Basket</h3>
        <div class="order-way">
            <div class="button-cover">
                <div class="button r" id="button-1">
                    <input onclick="setOrderWay()" type="checkbox" class="checkbox" />
                    <div class="knobs"></div>
                    <div class="layer"></div>
                </div>
            </div>
        </div>
        <div class="dish-wrapper" id="dishWrapper"></div>
    `;
}

function basketDishTemplate(i) {
    return /*html*/ `
        <div class="dishes">
            <div class="name-trash">
                <h4>${basket[i].name}</h4>
                <button onclick="RemoveDish(${i})">
                    <img src="./assets/icons/delete.png" alt="Mülleimer"></img>
                </button>
            </div>
            <div class="order-price">
                <div class="dish-order">
                    <p onclick="deleteDish(${i})" class="minus-btn">-</p>
                    <p id="dishCount${i}" class="count"></p>
                    <p onclick="addDish(${i})" class="plus-btn">+</p>
                </div>
                <p id="dishPrice${i}" class="price"></p>
            </div>
        </div>
    `;
}

function dishCountTemplate(i) {
    return /*html*/ `
        ${basket[i].addet}
    `;
}

function dishPriceTemplate(i) {
    return /*html*/ `
        ${basket[i].sum} <span> €</span>
    `;
}

function basketPriceTableTemplate() {
    return /*html*/ `
        <section class="price-table">
            <div class="sub-fee">
                <div class="sub">
                    <h5>Subtotal</h5>
                    <p id="subTotal"></p>
                </div>
                <div class="fee">
                    <h5>Delivery fee</h5>
                    <p id="deliveryFee"></p>
                </div>
            </div>
            <div class="total">
                <h5>Total</h5>
                <p id="totalPrice"></p>
            </div>
        </section>
        <button onclick="startOrder()" class="order-btn">Buy now</button>
    `;
}

function subTotalTemplate() {
    return /*html*/ `
        ${subTotal} € 
    `;
}

function deliveryFeeTemplate() {
    return /*html*/ `
        ${deliver} €
    `;
}

function totalPriceTemplate() {
    return /*html*/ `
        ${total} €
    `;
}

function emptyBasketTemplate() {
    return /*html*/ `
        <div class="empty-basket">
            <p>Nothing here yet.</p>
            <p>Go ahead and choose something delicious!</p>
            <img src="./assets/icons/shopping_cart.png" alt="Einkaufswagen Symbol">
        </div>
    `;
}

function burgerTemplate(i) {
    return /*html*/ `
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
                    <p> ${burger[i].price}0 €</p>
                    <button onclick="addBurgerToBasket(${i})"
                    id=burgerBtn${i}></button>
                </div>
            </section>
        </article>
    `;
}

function burgerBtnTemplate(i) {
    return /*html*/ `
        Addet ${burger[i].addet}  
    `;
}

function burgerBtnZeroTemplate() {
    return /*html*/ `
        Add to Basket  
    `;
}

function pizzaTemplate(i) {
    return /*html*/ `
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
                    <p> ${pizza[i].price}0 €</p>
                    <button onclick="addPizzaToBasket(${i})"  id=pizzaBtn${i}></button>
                </div>
            </section>
        </article>
    `;
}

function pizzaBtnTemplate(i) {
    return /*html*/ `
        Addet ${pizza[i].addet}  
    `;
}

function pizzaBtnZeroTemplate() {
    return /*html*/ `
        Add to Basket  
    `;
}

function saladTemplate(i) {
    return /*html*/ `
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
                    <p> ${salad[i].price}0 €</p>
                    <button onclick="addSaladToBasket(${i})"  id=saladBtn${i}>Add to basket </button>
                </div>
            </section>
        </article>
    `;
}

function saladBtnTemplate(i) {
    return /*html*/ `
        Addet ${salad[i].addet}  
    `;
}

function saladBtnZeroTemplate() {
    return /*html*/ `
        Add to Basket  
    `;
}

function dialogTemplate() {
    return /*html*/ `
        <dialog id="myDialog">
            <div class="dialog-header">
                <button onclick="closeDialog()">X</button>
            </div>
            <img src="./assets/icons/deliver_car.png" alt="Lieferwagen Symbol">
            <h2>Order confirmed!</h2>
            <p>Your food is on the way!</p>
        </dialog>
    `;
}
