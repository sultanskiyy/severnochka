let input = document.getElementById("input");
let inputline = document.getElementById("input-line");
let searchCards = document.getElementById("search-cards");


function searchProducts(value) {
  let searchValue = value.trim().toLowerCase();
  searchCards.innerHTML = "";
  if(searchValue){
    searchCards.classList.remove("hidden");
  }else{
    searchCards.classList.add("hidden");
  }
  if (searchValue === "") return;

  let searchedProducts = products.filter(el =>
    el.name.toLowerCase().includes(searchValue)
  );

  if (searchedProducts.length > 0) {
    searchedProducts.map(el => {
      searchCards.innerHTML += `
        <div class="flex border-[2px] border-lime-400 rounded-[5px] p-[10px] items-center gap-[10px] mb-[10px]">
          <img class="w-[40px] md:w-[100px] rounded-md" src="${el.images[0]}" alt="${el.name}" class="rounded-md">
          <div class="flex flex-col justify-between">
            <h1 class="font-semibold">${el.name}</h1>
            <p class="text-gray-600 text-sm">${el.description}</p>
          </div>
        </div>
      `;
    });
  } else {
    searchCards.innerHTML = `<p class="text-gray-500 text-center">Mahsulot topilmadi 😕</p>`;
  }
}

if (input) {
  input.addEventListener("input", e => {
    searchProducts(e.target.value);
  });
}

if (inputline) {
  inputline.addEventListener("input", e => {
    searchProducts(e.target.value);
  });
}else if(searchValue){
  searchCards.classList.remove("hidden");
}else{
  searchCards.classList.add("hidden");
}
