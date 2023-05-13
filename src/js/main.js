import productList from "./productList.mjs";

let selector = document.querySelector(".product-list");
// selector.appendChild(productList("tents"));

productList(selector, "tents");
