let likeBadge = document.getElementById("like-badge");
let badgeLike = document.getElementById("badge-like");

function addToLike(id) {
    let likeItem = products.find((el) => el.id === id);
    like.push(likeItem);
    likeBadge.textContent = like.length;
    badgeLike.textContent = like.length
    localStorage.setItem("like", JSON.stringify(like));
    showProducts(aksiya, aksiyaLastFourProducts)
    showProducts(yangi, novinkiFourProducts)
    showProducts(ommabop, populyarnostFourProducts)
}

function removeToLike(id) {
    like = like.filter((el) => el.id !== id);
    likeBadge.textContent = like.length;
    badgeLike.textContent = like.length
    localStorage.setItem("like", JSON.stringify(like));
    showProducts(aksiya, aksiyaLastFourProducts)
    showProducts(yangi, novinkiFourProducts)
    showProducts(ommabop, populyarnostFourProducts)
}