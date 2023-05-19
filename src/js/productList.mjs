import { getData } from "./productData.mjs";
import { renderListWithTemplate } from "./utils.mjs";

function productCardTemplate(product) {
    return `<li class="product-card">
    <a href="product_pages/index.html?product=">
    <img
      src=""
      alt="Image of "
    />
    <h3 class="card__brand"></h3>
    <h2 class="card__name"></h2>
    <p class="product-card__price">$</p></a>
  </li>`
}

export default async function productList(selector, category) {
    const element = document.querySelector(selector);
    const products = await getData(category);
    console.log(products);
    renderListWithTemplate(productCardTemplate, el, products);
}
// function renderList(list, el) {
//   const htmlStrings = list.map(productCardTemplate);
//   el.insertAdjacentHTML("afterbegin", htmlStrings.join(""));
// }
