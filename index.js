// button accessibility from the HTML Document:

let homePage = document.getElementById("home_page");
let cartPage = document.getElementById("cart_page");
let sortByPrice = document.getElementById("sort_by_price");
let sortByCategory = document.getElementById("filter_by_category");


//-----------Fetch API Function: ---------------

async function createFetchRequest() {
  try {
    let request = await fetch("https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products");
    let response = await request.json();
    return response.data;
  } catch(err) {
    console.log(err);
  }
}



//----------------------- function that serve different purposes :------------------- 

// -----------------Card Creating function ------------------------
async function createCards() {
  try {
    let dataforCards = await createFetchRequest();

    dataforCards.forEach((item) => {
      let card = document.createElement("div");
      card.id = "card";

      let cardImgbox = document.createElement("div");
      cardImgbox.id = "cardImg";

      let cardImg = document.createElement("img");
      cardImg.src = item.image;
      cardImg.setAttribute("style", "width:90%; height:60%;margin-left:5%; margin-top:5%");
      cardImgbox.appendChild(cardImg);

      let cardTitle = document.createElement("p");
      cardTitle.className = "cardTitle";
      cardTitle.innerText = item.title;

      let category = document.createElement("p");
      category.className = "category";
      category.innerText = "Category : "+item.category;

      let brand = document.createElement("p");
      brand.className = "brand";
      brand.innerText = "Brand : "+item.brand;

      let price = document.createElement("p");
      price.className = "price";
      price.innerText ="Price : "+ item.price;

      let button = document.createElement("button"); 
      button.id = "cartButton";
      button.className = "cartButton";
      button.innerText = "Add to Favorite";

      card.append(cardImgbox, cardTitle, category, brand, price, button);
      homePage.appendChild(card);
    })
    
  } catch (error) {
    console.log(error);
  }
}


// //--------------------------- sort by price : --------------------------
// async function cardSortByPrice(){
//     let sortFetch = await fetch("https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products   "
// }

// let cartButton = document.getElementById("cartButton");
// async function addItems(){
//     try{
//         let dataforcart = await createFetchRequest();
//         dataforcart.forEach((item) => {
//             let cart= document.createElement("div");
//             cart.id = "cart";
      
//             let cartImgbox = document.createElement("div");
//             cartImgbox.id = "cartImg";
      
//             let cartImg = document.createElement("img");
//             cartImg.src = item.image;
//             cartImg.setAttribute("style", "width:90%; height:60%;margin-left:5%; margin-top:5%");
//             cartImgbox.appendChild(cartImg);
      
//             let cartTitle = document.createElement("p");
//             cartTitle.className = "cartTitle";
//             cartTitle.innerText = item.title;
      
//             let cartCategory = document.createElement("p");
//             cartCategory.className = "cartCategory";
//             cartCategory.innerText = "Category : "+item.category;
      
//             let cartBrand = document.createElement("p");
//             cartBrand.className = "cartBrand";
//             cartBrand.innerText = item.brand;
      
//             let cartPrice = document.createElement("p");
//             cartPrice.className = "cartPrice";
//             cartPrice.innerText ="Price : "+ item.price;      
      
      
//             cart.append(cartImgbox, cartTitle, cartCategory, cartBrand, cartPrice);
//             cartPage.appendChild(cart);            
//         })
//     }
//     catch(err){
//         console.log(err);
//     }
// }




// // // --------Event Listeners -----------------------------

// // // sortByPrice.addEventListener("click", cardSortByPrice);
// // cartButton.addEventListener("click", addItems);







// //------------------------Function calls of various functions: ------------------

createCards();







