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
        <div class="dish-wrapper" id="dishWrapper"></div>
    `;
    let dishRef = document.getElementById(`dishWrapper`);
    dishRef.innerHTML = "";

    for (let i = 0; i < basket.length; i++) {
        let dishPrice = basket[i].price * basket[i].addet;
        dishPrice = +dishPrice.toFixed(2);

        let newPrice = "";
        if (dishPrice % 1) newPrice = dishPrice + "0";
        else newPrice = dishPrice;
        basket[i].sum = newPrice;

        dishRef.innerHTML += /*html*/ `
            <div class="dishes">
                <h4>${basket[i].name}</h4>
                <div class="order-price">
                    <div class="dish-order">
                        <button onclick="deleteDish(${i})">

                        <img src="./assets/icons/delete.png" alt="Mülleimer">
                        </button>
                        <p>${basket[i].addet}</p>
                        <button onclick="addDish(${i})"><p>+</p></button>
                    </div>
                    <p class="price">${basket[i].sum} <span> €</span></p>
                </div>
            </div>
        `;
    }

    let subTotal = 0;
    let price = 0;
    let deliver = 0;
    let total = 0;

    if (basket.length > 0) deliver = 4.99;
    for (let x = 0; x < basket.length; x++) {
        price = price + basket[x].addet * basket[x].price;
    }
    subTotal = Number.parseFloat(price).toFixed(2);
    subTotal = parseFloat(subTotal);
    total = subTotal + deliver;
    total = Number.parseFloat(total).toFixed(2);
    if (subTotal % 1) subTotal = subTotal + "0";

    contentRef.innerHTML += /*html*/ `
        <section class="price-table">
            <div class="sub-fee">
                <div class="sub">
                    <h5>Subtotal</h5>
                    <p>${subTotal} €</p>
                </div>
                <div class="fee">
                    <h5>Delivery fee</h5>
                    <p>${deliver} €</p>
                </div>
            </div>
            <div class="total">
                <h5>Total</h5>
                <p>${total} €</p>
            </div>
        </section>

        <button onclick="checkOrder()" class="order-btn">Buy now (${total} €)</button>
    `;
}

// nach order weiteres zählen in den 3 add buttons verhindern

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
                        <p> ${burger[i].price}0 €</p>
                        <button onclick="addBurgerToBasket(${i})"
                        id=burgerBtn${i}></button>
                    </div>
                </section>
            </article>
        `;

        let btnRef = document.getElementById(`burgerBtn${i}`);
        btnRef.innerHTML = "";

        if (burger[i].addet > 0) {
            btnRef.innerHTML += /*html*/ `
                Addet ${burger[i].addet}  
            `;
            btnRef.classList.add("btn-addet");
        } else {
            btnRef.innerHTML += /*html*/ `
                Add to Basket  
            `;
            btnRef.classList.remove("btn-addet");
        }
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
                        <p> ${pizza[i].price}0 €</p>
                        <button onclick="addPizzaToBasket(${i})"  id=pizzaBtn${i}></button>
                    </div>
                </section>
            </article>
        `;
        let btnRef = document.getElementById(`pizzaBtn${i}`);
        btnRef.innerHTML = "";

        if (pizza[i].addet > 0) {
            btnRef.innerHTML += /*html*/ `
                Addet ${pizza[i].addet}  
            `;
            btnRef.classList.add("btn-addet");
        } else {
            btnRef.innerHTML += /*html*/ `
                Add to Basket  
            `;
            btnRef.classList.remove("btn-addet");
        }
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
                        <p> ${salad[i].price}0 €</p>
                        <button onclick="addSaladToBasket(${i})"  id=saladBtn${i}>Add to basket </button>
                    </div>
                </section>
            </article>
        `;

        let btnRef = document.getElementById(`saladBtn${i}`);
        btnRef.innerHTML = "";

        if (salad[i].addet > 0) {
            btnRef.innerHTML += /*html*/ `
                Addet ${salad[i].addet}  
            `;
            btnRef.classList.add("btn-addet");
        } else {
            btnRef.innerHTML += /*html*/ `
                Add to Basket  
            `;
            btnRef.classList.remove("btn-addet");
        }
    }
}

function addBurgerToBasket(i) {
    let obj = [{ name: "", category: "", price: 0, sum: 0, addet: 0 }];

    obj.name = burger[i].name;
    obj.category = "burger";
    obj.price = burger[i].price;
    burger[i].addet++;
    obj.addet = burger[i].addet;
    obj.sum = 0;

    let inBasket = false;
    let basketIndex = 0;
    for (let y = 0; y < basket.length; y++) {
        if (obj.name == basket[y].name) {
            inBasket = true;
            basketIndex = y;
        }
    }

    if (inBasket == false) basket.push(obj);
    else {
        basket[basketIndex].addet++;
        let dishPrice = basket[basketIndex].price * basket[basketIndex].addet;
        dishPrice = +dishPrice.toFixed(2);

        let newPrice = "";
        if (dishPrice % 1) newPrice = dishPrice + "0";
        else newPrice = dishPrice;
        basket[basketIndex].sum = newPrice;
    }
    renderBurger();
    renderBasket();
}

function addPizzaToBasket(i) {
    let obj = [{ name: "", category: "", price: 0, sum: 0, addet: 0 }];

    obj.name = pizza[i].name;
    obj.category = "pizza";
    obj.price = pizza[i].price;
    pizza[i].addet++;
    obj.addet = pizza[i].addet;

    let dishPrice = obj.price * obj.addet;
    dishPrice = +dishPrice.toFixed(2);

    let newPrice = "";
    if (dishPrice % 1) newPrice = dishPrice + "0";
    else newPrice = dishPrice;
    obj.sum = newPrice;

    let inBasket = false;
    let basketIndex = 0;
    for (let y = 0; y < basket.length; y++) {
        if (obj.name == basket[y].name) {
            inBasket = true;
            basketIndex = y;
        }
    }

    if (inBasket == false) basket.push(obj);
    else {
        basket[basketIndex].addet++;
        let dishPrice = basket[basketIndex].price * basket[basketIndex].addet;
        dishPrice = +dishPrice.toFixed(2);

        let newPrice = "";
        if (dishPrice % 1) newPrice = dishPrice + "0";
        else newPrice = dishPrice;
        basket[basketIndex].sum = newPrice;
    }

    renderPizza();
    renderBasket();
}

function addSaladToBasket(i) {
    let obj = [{ name: "", category: "", price: 0, sum: 0, addet: 0 }];

    obj.name = salad[i].name;
    obj.category = "salad";
    obj.price = salad[i].price;
    salad[i].addet++;
    obj.addet = salad[i].addet;

    let dishPrice = obj.price * obj.addet;
    dishPrice = +dishPrice.toFixed(2);

    let newPrice = "";
    if (dishPrice % 1) newPrice = dishPrice + "0";
    else newPrice = dishPrice;
    obj.sum = newPrice;

    let inBasket = false;
    let basketIndex = 0;
    for (let y = 0; y < basket.length; y++) {
        if (obj.name == basket[y].name) {
            inBasket = true;
            basketIndex = y;
        }
    }

    if (inBasket == false) basket.push(obj);
    else {
        basket[basketIndex].addet++;
        let dishPrice = basket[basketIndex].price * basket[basketIndex].addet;
        dishPrice = +dishPrice.toFixed(2);

        let newPrice = "";
        if (dishPrice % 1) newPrice = dishPrice + "0";
        else newPrice = dishPrice;
        basket[basketIndex].sum = newPrice;
    }

    renderSalad();
    renderBasket();
}

function deleteDish(i) {
    basket[i].addet--;
    if (basket[i].addet < 0) basket[i].addet = 0;

    if (basket[i].category == "burger") {
        let burgerIndex = 0;
        for (let y = 0; y < burger.length; y++) {
            if (basket[i].name == burger[y].name) {
                burgerIndex = y;
            }
        }
        burger[burgerIndex].addet--;
        renderBurger();
    } else if (basket[i].category == "pizza") {
        let pizzaIndex = 0;
        for (let y = 0; y < pizza.length; y++) {
            if (basket[i].name == pizza[y].name) {
                pizzaIndex = y;
            }
        }
        pizza[pizzaIndex].addet--;
        renderPizza();
    } else if (basket[i].category == "salad") {
        let saladIndex = 0;
        for (let y = 0; y < salad.length; y++) {
            if (basket[i].name == salad[y].name) {
                saladIndex = y;
            }
        }
        salad[saladIndex].addet--;
        renderSalad();
    }

    if (basket[i].addet == 0) basket.splice(i, 1);

    renderBasket();
}

function addDish(i) {
    basket[i].addet++;

    if (basket[i].category == "burger") {
        let burgerIndex = 0;
        for (let y = 0; y < burger.length; y++) {
            if (basket[i].name == burger[y].name) {
                burgerIndex = y;
            }
        }
        burger[burgerIndex].addet++;
        renderBurger();
    } else if (basket[i].category == "pizza") {
        let pizzaIndex = 0;
        for (let y = 0; y < pizza.length; y++) {
            if (basket[i].name == pizza[y].name) {
                pizzaIndex = y;
            }
        }
        pizza[pizzaIndex].addet++;
        renderPizza();
    } else if (basket[i].category == "salad") {
        let saladIndex = 0;
        for (let y = 0; y < salad.length; y++) {
            if (basket[i].name == salad[y].name) {
                saladIndex = y;
            }
        }
        salad[saladIndex].addet++;
        renderSalad();
    }
    renderBasket();
}

function checkOrder() {
    if (basket.length == 0) {
        let wrapperRef = document.getElementById(`basketWrapper`);
        wrapperRef.innerHTML += /*html*/ `
        <dialog id="myDialog">
            <div class="dialog-header">
                <button onclick="closeDialog()">X</button>
            </div>
        <img src="./assets/icons/deliver_car.png" alt="Lieferwagen Symbol">
        <h2>Nothing to Order!</h2>
        <p>Your Basket is still empty!</p>
        <p>Add some Dishes first!</p>
    </dialog>
    `;
        dialogRef = document.getElementById(`myDialog`);
        startDialog();
    } else startOrder();
}

function startOrder() {
    let wrapperRef = document.getElementById(`basketWrapper`);
    wrapperRef.classList.add(`d-none`);

    wrapperRef.innerHTML = "";
    wrapperRef.innerHTML += /*html*/ `
        <dialog id="myDialog">
            <div class="dialog-header">
                <button onclick="closeDialog()">X</button>
            </div>
        <img src="./assets/icons/deliver_car.png" alt="Lieferwagen Symbol">
        <h2>Order confirmed!</h2>
        <p>Your food is on the way!</p>
    </dialog>
    `;
    dialogRef = document.getElementById(`myDialog`);
    startDialog();
}

function startDialog() {
    dialogRef.showModal();
    dialogRef.classList.add(`opened`);
    StartEventListener();
}

function closeDialog() {
    dialogRef.close();
    dialogRef.classList.remove(`opened`);
}

function StartEventListener() {
    dialogRef.addEventListener("click", (event) => {
        const rect = dialogRef.getBoundingClientRect();
        const isInDialog =
            event.clientX >= rect.left &&
            event.clientX <= rect.right &&
            event.clientY >= rect.top &&
            event.clientY <= rect.bottom;
        if (!isInDialog) {
            closeDialog(event);
        }
    });

    setTimeout(() => {
        closeDialog();
    }, 5000);
    // setTimeout(closeDialog(), 600000);
}
