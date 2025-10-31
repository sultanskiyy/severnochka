let aksiya = document.getElementById("aksiya")
let yangi = document.getElementById("novinki")
let ommabop = document.getElementById("populyarnost")

let aksiyaProducts = products.filter((el) => el.discount > 0);
let aksiyaLastFourProducts = aksiyaProducts.slice(aksiyaProducts.length - 4 , aksiyaProducts.length);
let novinkiFourProducts = products.slice(products.length - 4 , products.length )
let populyarnostFourProducts =products.slice(7 , 11)


function showProducts(content, data){
    data.map((el) => {
    content.innerHTML += `
    <div class="bg-gray-50 p-3 sm:p-4 hover:shadow-[0_0_20px_4px_rgba(255,165,0,0.7)]  duration-1000 rounded-[6px] flex flex-col">
      <img class="h-[200px] object-cover py-2 sm:py-3" src=${el.images[0]} alt="">
      <h3 class="text-base sm:text-[18px] mb-[10px] font-semibold line-clamp-2">${el.name}</h3>
      <div class="flex justify-between py-1 sm:py-2">
        <p class="text-lg sm:text-[22px] font-bold">${el.price -el.price * el.discount /100} ₽</p>
        <p class="text-lg sm:text-[22px]">${el.price} ₽</p>
      </div>
      <div class="flex justify-between text-sm sm:text-[14px]">
        <p class="text-gray-500">Скидка</p>
        <p>Обычная</p>
      </div>
      <div class="py-2 sm:py-3 flex flex-col">
        <p class="line-clamp-2 mb-[16px] text-base sm:text-[18px]">${el.description}</p>
        ${
            el.rating === 5 ? `
        <div class="flex gap-[5px]">
          <img src="./assets/yulduzlar/yulduz.svg" alt="">
          <img src="./assets/yulduzlar/yulduz.svg" alt="">
          <img src="./assets/yulduzlar/yulduz.svg" alt="">
          <img src="./assets/yulduzlar/yulduz.svg" alt="">
          <img src="./assets/yulduzlar/yulduz.svg" alt="">
        </div>` : el.rating === 4.5 ? `
        <div class="flex gap-[5px]">
          <img src="./assets/yulduzlar/yulduz.svg" alt="">
          <img src="./assets/yulduzlar/yulduz.svg" alt="">
          <img src="./assets/yulduzlar/yulduz.svg" alt="">
          <img src="./assets/yulduzlar/yulduz.svg" alt="">
          <img src="./assets/yulduzlar/yulduz-yarim.svg" alt="">
        </div>
        ` : el.rating === 4 ? `
        <div class="flex gap-[5px]">
          <img src="./assets/yulduzlar/yulduz.svg" alt="">
          <img src="./assets/yulduzlar/yulduz.svg" alt="">
          <img src="./assets/yulduzlar/yulduz.svg" alt="">
          <img src="./assets/yulduzlar/yulduz.svg" alt="">
          <img src="./assets/yulduzlar/bosh-yulduz.svg" alt="">
        </div>` : el.rating === 3.5 ? `
        <div class="flex gap-[5px]">
          <img src="./assets/yulduzlar/yulduz.svg" alt="">
          <img src="./assets/yulduzlar/yulduz.svg" alt="">
          <img src="./assets/yulduzlar/yulduz.svg" alt="">
          <img src="./assets/yulduzlar/yulduz-yarim.svg" alt="">
          <img src="./assets/yulduzlar/bosh-yulduz.svg" alt="">
        </div>
        ` : el.rating === 3 ? `
        <div class="flex gap-[5px]">
          <img src="./assets/yulduzlar/yulduz.svg" alt="">
          <img src="./assets/yulduzlar/yulduz.svg" alt="">
          <img src="./assets/yulduzlar/yulduz.svg" alt="">
          <img src="./assets/yulduzlar/bosh-yulduz.svg" alt="">
          <img src="./assets/yulduzlar/bosh-yulduz.svg" alt="">
        </div>
        ` : el.rating === 2.5 ? `
        <div class="flex gap-[5px]">
          <img src="./assets/yulduzlar/yulduz.svg" alt="">
          <img src="./assets/yulduzlar/yulduz.svg" alt="">
          <img src="./assets/yulduzlar/yulduz-yarim.svg" alt="">
          <img src="./assets/yulduzlar/bosh-yulduz.svg" alt="">
          <img src="./assets/yulduzlar/bosh-yulduz.svg" alt="">
        </div>
        ` : el.rating === 2 ? `
        <div class="flex gap-[5px]">
          <img src="./assets/yulduzlar/yulduz.svg" alt="">
          <img src="./assets/yulduzlar/yulduz.svg" alt="">
          <img src="./assets/yulduzlar/bosh-yulduz.svg" alt="">
          <img src="./assets/yulduzlar/bosh-yulduz.svg" alt="">
          <img src="./assets/yulduzlar/bosh-yulduz.svg" alt="">
        </div>
        ` : el.rating === 1.5 ? `
        <div class="flex gap-[5px]">
          <img src="./assets/yulduzlar/yulduz.svg" alt="">
          <img src="./assets/yulduzlar/yulduz-yarim.svg" alt="">
          <img src="./assets/yulduzlar/bosh-yulduz.svg" alt="">
          <img src="./assets/yulduzlar/bosh-yulduz.svg" alt="">
          <img src="./assets/yulduzlar/bosh-yulduz.svg" alt="">
        </div>
        ` : el.rating === 1 ? `
        <div class="flex gap-[5px]">
          <img src="./assets/yulduzlar/yulduz.svg" alt="">
          <img src="./assets/yulduzlar/bosh-yulduz.svg" alt="">
          <img src="./assets/yulduzlar/bosh-yulduz.svg" alt="">
          <img src="./assets/yulduzlar/bosh-yulduz.svg" alt="">
          <img src="./assets/yulduzlar/bosh-yulduz.svg" alt="">
        </div>
        ` : el.rating === 0.5 ? `
        <div class="flex gap-[5px]">
          <img src="./assets/yulduzlar/yulduz-yarim.svg" alt="">
          <img src="./assets/yulduzlar/bosh-yulduz.svg" alt="">
          <img src="./assets/yulduzlar/bosh-yulduz.svg" alt="">
          <img src="./assets/yulduzlar/bosh-yulduz.svg" alt="">
          <img src="./assets/yulduzlar/bosh-yulduz.svg" alt="">
        </div>`: ""
        }
        <button class="border-2 border-lime-500 hover:border-orange-400 hover:bg-orange-400 hover:text-white duration-1000 text-lime-600 flex py-1 sm:py-2 px-3 sm:px-4 rounded-[6px] w-full justify-center mt-4">
          В корзину
        </button>
      </div>
    </div>
    `
})
}
showProducts(aksiya, aksiyaLastFourProducts)
showProducts(yangi, novinkiFourProducts)
showProducts(ommabop, populyarnostFourProducts)