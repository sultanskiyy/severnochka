let cartCards = document.getElementById("cart-Cards");
let cartProducts = JSON.parse(localStorage.getItem("carts") || "[]");

function showProducts(content, data) {
  content.innerHTML = "";
  if (data.length === 0) {
    content.innerHTML = `<p class="text-center text-gray-600 text-lg"></p>`;
    localStorage.setItem("carts", JSON.stringify([]));
    document.getElementById("badge").textContent = 0;
    document.getElementById("bedgee").textContent = 0;
    return;
  }

  data.map((el) => {
    content.innerHTML += `
            <div class="flex w-[900px] border-[2px] rounded-[20px] border-gray-300 h-[100px] bg-[white] px-[15px] py-[10px] gap-[30px]">
          <img class="mix-blend-darken W-[100px] h-[70px]" src=${el.images[0]} alt="">
          <div class="flex flex-col gap-[5px] pt-[8px]">
            <p>${el.description}</p>
            <div class="flex gap-[5px]">
              <p class="font-bold text-[16px]">${el.price} ₽</p>
              <p>за шт.</p>
            </div>
          </div>
          ${carts.find((cart) => cart.id === el.id)
        ?
        `
          <div class="grid ml-[px] rounded-[7px] h-[40px] w-[100px] mt-[20px] border-[2px] border-lime-600 grid-cols-3">
            <button onClick="decrease()${el.id}"
              class="font-bold text-[20px] justify-center pb-[4px] flex items-center  justify-center bg-lime-600 text-white">-</button>
            <span class="flex items-center justify-center bg-lime-600 text-[16px] text-white">${carts.find((cart) => cart.id === el.id).numbers}</span>
            <button onClick="increase${el.id}"
              class="font-bold text-[20px] justify-center pb-[4px] flex items-center justify-center bg-lime-600 text-white">+</button>
          </div>
            ` :
        `
          <div>
            <button onClick="addToCart(${el.id})" class="border-2 border-lime-500 hover:border-orange-400 hover:bg-orange-400 hover:text-white duration-1000 text-lime-600 flex py-1 sm:py-2 px-3 sm:px-4 rounded-[6px] w-full justify-center mt-4">
            В корзину
            </button>
          </div>
            `
      }
    `
  });

  document.getElementById("badge").textContent = data.length;
  document.getElementById("bedgee").textContent = data.length;
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
}
