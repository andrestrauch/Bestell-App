function init() {
    renderBurger();
    renderPizza();
    renderSalad();
    renderBasket();
}

function setOrderWay() {
    if (orderWay == "Deliver") orderWay = "Pick";
    else orderWay = "Deliver";

    if (basket.length > 0) {
        setTotalPrices();
        renderPriceTable();
    }
}

function setRenderRefs() {
    basketRef = document.getElementById(`basket`);
    basketRef.innerHTML = "";
    basketRef.innerHTML += basketContentTemplate();
    contentRef = document.getElementById(`basketContent`);
    contentRef.innerHTML = "";
    contentRef.innerHTML += basketDishWrapperTemplate();
    dishRef = document.getElementById(`dishWrapper`);
    dishRef.innerHTML = "";
}

function renderBasket() {
    setRenderRefs();
    if (basket.length == 0) dishRef.innerHTML += emptyBasketTemplate();
    else {
        for (let i = 0; i < basket.length; i++) {
            setDishPrice(i);
            dishRef.innerHTML += basketDishTemplate(i);
            renderDishCount(i);
            renderDishPrice(i);
        }
        setTotalPrices();
        contentRef.innerHTML += basketPriceTableTemplate();
        renderPriceTable();
    }
}

function renderBurger() {
    let burgerRef = document.getElementById(`burgerMenu`);
    burgerRef.innerHTML = "";

    for (let i = 0; i < burger.length; i++) {
        burgerRef.innerHTML += burgerTemplate(i);
        let btnRef = document.getElementById(`burgerBtn${i}`);
        btnRef.innerHTML = "";

        if (burger[i].addet > 0) {
            btnRef.innerHTML += burgerBtnTemplate(i);
            btnRef.classList.add("btn-addet");
        } else {
            btnRef.innerHTML += burgerBtnZeroTemplate();
            btnRef.classList.remove("btn-addet");
        }
    }
}

function renderPizza() {
    let pizzaRef = document.getElementById(`pizzaMenu`);
    pizzaRef.innerHTML = "";

    for (let i = 0; i < pizza.length; i++) {
        pizzaRef.innerHTML += pizzaTemplate(i);
        let btnRef = document.getElementById(`pizzaBtn${i}`);
        btnRef.innerHTML = "";

        if (pizza[i].addet > 0) {
            btnRef.innerHTML += pizzaBtnTemplate(i);
            btnRef.classList.add("btn-addet");
        } else {
            btnRef.innerHTML += pizzaBtnZeroTemplate();
            btnRef.classList.remove("btn-addet");
        }
    }
}

function renderSalad() {
    let saladRef = document.getElementById(`saladMenu`);
    saladRef.innerHTML = "";

    for (let i = 0; i < salad.length; i++) {
        saladRef.innerHTML += saladTemplate(i);
        let btnRef = document.getElementById(`saladBtn${i}`);
        btnRef.innerHTML = "";

        if (salad[i].addet > 0) {
            btnRef.innerHTML += saladBtnTemplate(i);
            btnRef.classList.add("btn-addet");
        } else {
            btnRef.innerHTML += saladBtnZeroTemplate();
            btnRef.classList.remove("btn-addet");
        }
    }
}

function renderBurgerAddButton(i) {
    let btnRef = document.getElementById(`burgerBtn${i}`);
    btnRef.innerHTML = "";

    if (burger[i].addet > 0) {
        btnRef.innerHTML += burgerBtnTemplate(i);
        btnRef.classList.add("btn-addet");
    } else {
        btnRef.innerHTML += burgerBtnZeroTemplate();
        btnRef.classList.remove("btn-addet");
    }
}

function renderPizzaAddButton(i) {
    let btnRef = document.getElementById(`pizzaBtn${i}`);
    btnRef.innerHTML = "";

    if (pizza[i].addet > 0) {
        btnRef.innerHTML += pizzaBtnTemplate(i);
        btnRef.classList.add("btn-addet");
    } else {
        btnRef.innerHTML += pizzaBtnZeroTemplate();
        btnRef.classList.remove("btn-addet");
    }
}

function renderSaladAddButton(i) {
    let btnRef = document.getElementById(`saladBtn${i}`);
    btnRef.innerHTML = "";

    if (salad[i].addet > 0) {
        btnRef.innerHTML += saladBtnTemplate(i);
        btnRef.classList.add("btn-addet");
    } else {
        btnRef.innerHTML += saladBtnZeroTemplate();
        btnRef.classList.remove("btn-addet");
    }
}

function renderDishCount(i) {
    let dishCountRef = document.getElementById(`dishCount${i}`);
    dishCountRef.innerHTML = "";
    dishCountRef.innerText = basket[i].addet;
    // += dishCountTemplate(i);
}

function renderDishPrice(i) {
    let priceRef = document.getElementById(`dishPrice${i}`);
    priceRef.innerHTML = "";
    priceRef.innerText = `${basket[i].sum} €`;
    // += dishPriceTemplate(i);
}

function renderPriceTable() {
    let subRef = document.getElementById(`subTotal`);
    let deliverRef = document.getElementById(`deliveryFee`);
    let totalRef = document.getElementById(`totalPrice`);
    subRef.innerHTML = "";
    deliverRef.innerHTML = "";
    totalRef.innerHTML = "";

    subRef.innerText = `${subTotal} €`;
    // innerHTML += subTotalTemplate();
    deliverRef.innerText = `${deliver} €`;
    // innerHTML += deliveryFeeTemplate();
    totalRef.innerText = `${total} €`;
    // innerHTML += totalPriceTemplate();
}

function addBurgerToBasket(i) {
    let obj = { name: "", category: "", price: 0, sum: 0, addet: 0 };

    obj.name = burger[i].name;
    obj.category = "burger";
    obj.price = burger[i].price;
    burger[i].addet++;
    obj.addet = burger[i].addet;
    obj.sum = 0;

    checkBasket(obj);
    renderBurgerAddButton(i);
}

function addPizzaToBasket(i) {
    let obj = { name: "", category: "", price: 0, sum: 0, addet: 0 };

    obj.name = pizza[i].name;
    obj.category = "pizza";
    obj.price = pizza[i].price;
    pizza[i].addet++;
    obj.addet = pizza[i].addet;

    checkBasket(obj);
    renderPizzaAddButton(i);
}

function addSaladToBasket(i) {
    let obj = { name: "", category: "", price: 0, sum: 0, addet: 0 };

    obj.name = salad[i].name;
    obj.category = "salad";
    obj.price = salad[i].price;
    salad[i].addet++;
    obj.addet = salad[i].addet;

    checkBasket(obj);
    renderSaladAddButton(i);
}

function checkBasket(obj) {
    let inBasket = false;
    let basketIndex = 0;
    for (let y = 0; y < basket.length; y++) {
        if (obj.name == basket[y].name) {
            inBasket = true;
            basketIndex = y;
        }
    }
    if (inBasket == false) {
        basket.push(obj);
        orderWay = "Deliver";
        renderBasket();
    } else {
        updateBasket(basketIndex);
    }
}

function updateBasket(basketIndex) {
    basket[basketIndex].addet++;
    setDishPrice(basketIndex);
    renderDishCount(basketIndex);
    renderDishPrice(basketIndex);
    setTotalPrices();
    renderPriceTable();
}

function addDish(i) {
    basket[i].addet++;
    if (basket[i].category == "burger") addBurger(i);
    else if (basket[i].category == "pizza") addPizza(i);
    else if (basket[i].category == "salad") addSalad(i);
    renderDishCount(i);
    setDishPrice(i);
    renderDishPrice(i);
    setTotalPrices();
    renderPriceTable();
}

function addBurger(i) {
    let burgerIndex = 0;
    for (let y = 0; y < burger.length; y++) {
        if (basket[i].name == burger[y].name) {
            burgerIndex = y;
        }
    }
    burger[burgerIndex].addet++;
    renderBurgerAddButton(burgerIndex);
}

function addPizza(i) {
    let pizzaIndex = 0;
    for (let y = 0; y < pizza.length; y++) {
        if (basket[i].name == pizza[y].name) {
            pizzaIndex = y;
        }
    }
    pizza[pizzaIndex].addet++;
    renderPizzaAddButton(pizzaIndex);
}

function addSalad(i) {
    let saladIndex = 0;
    for (let y = 0; y < salad.length; y++) {
        if (basket[i].name == salad[y].name) {
            saladIndex = y;
        }
    }
    salad[saladIndex].addet++;
    renderSaladAddButton(saladIndex);
}

function setDishPrice(i) {
    let dishPrice = basket[i].price * basket[i].addet;
    dishPrice = +dishPrice.toFixed(2);
    let newPrice = "";
    if (dishPrice % 1) newPrice = dishPrice + "0";
    else newPrice = dishPrice;
    basket[i].sum = newPrice;
}

function setTotalPrices() {
    subTotal = 0;
    price = 0;
    deliver = 0;
    total = 0;

    if (basket.length > 0 && orderWay == "Deliver") deliver = 4.99;
    for (let x = 0; x < basket.length; x++) {
        price = price + basket[x].addet * basket[x].price;
    }
    subTotal = Number.parseFloat(price).toFixed(2);
    subTotal = parseFloat(subTotal);
    total = subTotal + deliver;
    total = Number.parseFloat(total).toFixed(2);
    if (subTotal % 1) subTotal = subTotal + "0";
}

function deleteDish(i) {
    basket[i].addet--;
    if (basket[i].addet < 0) basket[i].addet = 0;
    if (basket[i].category == "burger") deleteBurger(i);
    else if (basket[i].category == "pizza") deletePizza(i);
    else if (basket[i].category == "salad") deleteSalad(i);
    renderDishCount(i);
    setDishPrice(i);
    renderDishPrice(i);
    setTotalPrices();
    renderPriceTable();
    if (basket[i].addet == 0) {
        basket.splice(i, 1);
        renderBasket();
    }
}

function deleteBurger(i) {
    let burgerIndex = 0;
    for (let y = 0; y < burger.length; y++) {
        if (basket[i].name == burger[y].name) {
            burgerIndex = y;
        }
    }
    burger[burgerIndex].addet--;
    renderBurgerAddButton(burgerIndex);
}

function deletePizza(i) {
    let pizzaIndex = 0;
    for (let y = 0; y < pizza.length; y++) {
        if (basket[i].name == pizza[y].name) {
            pizzaIndex = y;
        }
    }
    pizza[pizzaIndex].addet--;
    renderPizzaAddButton(pizzaIndex);
}

function deleteSalad(i) {
    let saladIndex = 0;
    for (let y = 0; y < salad.length; y++) {
        if (basket[i].name == salad[y].name) {
            saladIndex = y;
        }
    }
    salad[saladIndex].addet--;
    renderSaladAddButton(saladIndex);
}

function RemoveDish(i) {
    basket[i].addet = 0;
    if (basket[i].category == "burger") removeBurger(i);
    else if (basket[i].category == "pizza") removePizza(i);
    else if (basket[i].category == "salad") removeSalad(i);

    if (basket[i].addet == 0) basket.splice(i, 1);
    renderBasket();
}

function removeBurger(i) {
    let burgerIndex = 0;
    for (let y = 0; y < burger.length; y++) {
        if (basket[i].name == burger[y].name) {
            burgerIndex = y;
        }
    }
    burger[burgerIndex].addet = 0;
    renderBurgerAddButton(burgerIndex);
}

function removePizza(i) {
    let pizzaIndex = 0;
    for (let y = 0; y < pizza.length; y++) {
        if (basket[i].name == pizza[y].name) {
            pizzaIndex = y;
        }
    }
    pizza[pizzaIndex].addet = 0;
    renderPizzaAddButton(pizzaIndex);
}

function removeSalad(i) {
    let saladIndex = 0;
    for (let y = 0; y < salad.length; y++) {
        if (basket[i].name == salad[y].name) {
            saladIndex = y;
        }
    }
    salad[saladIndex].addet = 0;
    renderSaladAddButton(saladIndex);
}

function startOrder() {
    wrapperRef = document.getElementById(`basketWrapper`);
    wrapperRef.classList.add(`d-none`);
    wrapperRef.innerHTML += dialogTemplate();
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
    wrapperRef.classList.remove(`d-none`);
    resetArrays();
    renderBasket();
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
}

function resetArrays() {
    for (let x = 0; x < burger.length; x++) {
        burger[x].addet = 0;
        pizza[x].addet = 0;
        salad[x].addet = 0;
        renderBurgerAddButton(x);
        renderPizzaAddButton(x);
        renderSaladAddButton(x);
    }
    basket.splice(0, basket.length);
}
