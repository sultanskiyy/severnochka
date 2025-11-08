let carts = JSON.parse(localStorage.getItem("carts") || "[]");
let like = JSON.parse(localStorage.getItem("like") || "[]");



localStorage.setItem("carts", JSON.stringify(carts));
localStorage.setItem("like", JSON.stringify(like));






let badge = document.getElementById("badge");
let badgee = document.getElementById("bedgee");
badge.textContent = carts.length;
badgee.textContent = carts.length;

function addToCart(id) {
    let item = products.find(el => el.id === id);
    item.numbers = 1;
    carts.push(item);

    localStorage.setItem("carts", JSON.stringify(carts));

    badge.textContent = carts.length;
    badgee.textContent = carts.length;

    showProducts(aksiya, aksiyaLastFourProducts);
    showProducts(yangi, novinkiFourProducts);
    showProducts(ommabop, populyarnostFourProducts);
}

function increase(id) {
    carts = carts.map(el => {
        if (el.id === id) {
            el.numbers += 1;
        }
        return el;
    });

    badge.textContent = carts.length;
    badgee.textContent = carts.length;

    localStorage.setItem("carts", JSON.stringify(carts));

    showProducts(aksiya, aksiyaLastFourProducts);
    showProducts(yangi, novinkiFourProducts);
    showProducts(ommabop, populyarnostFourProducts);
}

function decrease(id) {
    let item = carts.find(el => el.id === id);

    carts = carts.map(el => {
        if (el.id === id) {
            el.numbers -= 1;
        }
        return el;
    });

    if (item.numbers === 0) {
        carts = carts.filter(el => el.id !== id);
    }

    badge.textContent = carts.length;
    badgee.textContent = carts.length;

    localStorage.setItem("carts", JSON.stringify(carts));

    showProducts(aksiya, aksiyaLastFourProducts);
    showProducts(yangi, novinkiFourProducts);
    showProducts(ommabop, populyarnostFourProducts);
}
localStorage.setItem("carts", JSON.stringify(carts));


