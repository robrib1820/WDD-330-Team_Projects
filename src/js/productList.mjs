import { getData } from "./productData.mjs";
import { renderListWithTemplate } from "./utils.mjs";

function productCardTemplate(product) {
  return `<li class="product-card">
    <a href="product_pages/index.html?product=${product.Id}">
    <img
      src="${product.Image}"
      alt="${product.Name}"
    />
    <h3 class="card__brand">${product.Name}</h3>
    <h2 class="card__name">${product.NameWithoutBrand}</h2>
    <p class="product-card__price">${product.FinalPrice}</p></a>
  </li>`;
}

// THIS IS THE PREVIOUS WAY USED TO RENDER THE PRODUCTS

// function renderList(products, selector) {
//   products.forEach((product) => {
//     let card = productCardTemplate(product);
//     selector.insertAdjacentHTML("beforeend", card);
//   });
//   // console.log(cards);
// }

export default async function productList(selector, category) {
  let list = [];
  let allProducts = await getData(category);
  let products = allProducts.filter((product) => {
    if (product.FinalPrice != 179.99) {
      list.push(product);
    }
  });
  console.log(list); // This was used to test the if the function is working
  renderListWithTemplate(productCardTemplate, selector, list);
}
