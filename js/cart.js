let cartCards = document.getElementById("cart-Cards");
let cartProducts = JSON.parse(localStorage.getItem("carts") || "[]");
let allPrice = document.getElementById("all-price");
let allDiscount = document.getElementById("all-discounts");
let checkedProducts = [];
let checkedRemove = document.getElementById("checked-remove")
let checkedAll = document.getElementById("checked-all");
let paid = document.getElementById("paid");
let mahBadge = document.getElementById("mah-badge");
let sum = 0;
let discount = 0;
let paidSum = 0;



function countPrice() {
  sum = 0;
  discount = 0;
  paidSum = 0;
  cartProducts.forEach((el) => {
    sum += el.price * el.numbers;
    discount += (el.discount ? (el.price * el.discount / 100) : 0) * el.numbers;
  })
  allPrice.innerHTML = sum;
  allDiscount.innerHTML = discount;
  paidSum = sum - discount;
  paid.innerHTML = paidSum
  mahBadge.textContent = cartProducts.length
}
mahBadge.textContent = cartProducts.length
function showProducts(content, data) {
  countPrice()
  content.innerHTML = "";
  if (data.length === 0) {
    content.innerHTML = `<p class="text-center text-gray-600 text-lg"></p>`;
    localStorage.setItem("carts", JSON.stringify([]));
    document.getElementById("badge").textContent = 0;
    document.getElementById("bedgee").textContent = 0;
    return;
  }
  content.innerHTML = "";
  data.map((el) => {
    content.innerHTML += `
            <div class="flex flex-col sm:flex-row items-center w-full border-2 rounded-xl border-gray-300 bg-white 
            p-4 gap-4">

  <input
    onclick="checkProduct(this, ${el.id})"
    class="input w-5 h-5 self-start sm:self-center"
    type="checkbox"
  />

  <img 
    class="w-[80px] h-[80px] object-cover sm:w-[80px] sm:h-[80px] object-contain rounded-lg" 
    src="${el.images[0]}" 
    alt=""
  >

  <div class="flex flex-col w-full">
    <p class="text-[15px] font-medium">${el.description}</p>

    <div class="flex gap-1 items-center mt-1">
      <p class="font-bold text-[16px]">${el.price} ₽</p>
      <p class="text-gray-500">за шт.</p>
    </div>
  </div>

  <div class="flex items-center ml-auto">
    ${cartProducts.find(cart => cart.id === el.id)
        ?
        `
        <div class="grid grid-cols-3 w-[100px] h-[36px] rounded-md overflow-hidden bg-lime-600 text-white">
          <button onclick="decrease(${el.id})" class="flex items-center justify-center text-[20px]">-</button>
          <span class="flex items-center justify-center">${cartProducts.find(cart => cart.id === el.id).numbers}</span>
          <button onclick="increase(${el.id})" class="flex items-center justify-center text-[20px]">+</button>
        </div>
        `
        :
        `
        <button 
          onclick="addToCart(${el.id})" 
          class="border-2 border-lime-500 text-lime-600 rounded-md px-4 py-1 
                 hover:bg-orange-400 hover:text-white duration-300">
          В корзину
        </button>
        `
      }
  </div>

</div>


    `
  });
  document.getElementById("badge").textContent = data.length;
  document.getElementById("bedgee").textContent = data.length;
  mahBadge.textContent = cartProducts.length
}

showProducts(cartCards, cartProducts);

function increase(id) {
  cartProducts = cartProducts.map(el => {
    if (el.id === id) {
      el.numbers += 1;
    }
    return el;
  });

  localStorage.setItem("carts", JSON.stringify(cartProducts));
  showProducts(cartCards, cartProducts);
  mahBadge.textContent = cartProducts.length
}

function decrease(id) {
  let item = cartProducts.find(el => el.id === id);
  if (!item) return;

  if (item.numbers > 1) {
    item.numbers -= 1;
  } else {
    cartProducts = cartProducts.filter(el => el.id !== id);
  }

  localStorage.setItem("carts", JSON.stringify(cartProducts));
  showProducts(cartCards, cartProducts);
  mahBadge.textContent = cartProducts.length
}

function checkProduct(inputObject, id) {
  if (inputObject.checked === true) {
    checkedProducts.push(id);
  } else {
    checkedProducts = checkedProducts.filter((el) => el !== id);
  }
  if (cartProducts.length === checkedProducts.length) {
    checkedAll.checked = true;
  } else {
    checkedAll.checked = false;
  }
}

checkedRemove.addEventListener("click", function () {
  cartProducts = cartProducts.filter((el) => !checkedProducts.includes(el.id));
  localStorage.setItem("carts", JSON.stringify(cartProducts));
  badge.textContent = cartProducts.length;
  showProducts(cartCards, cartProducts);
  checkedAll.checked = false;
});

checkedAll.addEventListener("click", function () {
  let inputs = document.getElementsByClassName("input");
  if (checkedAll.checked === true) {
    for (let el of inputs) {
      el.checked = true;
    }
    cartProducts.map((el) => {
      checkedProducts.push(el.id);
    })
  } else {
    for (let el of inputs) {
      el.checked = false;
    }
    checkedProducts = [];
  }

})