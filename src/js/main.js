import productList from "./productList.mjs";
import { loadHeaderFooter } from "./utils.mjs";

let selector = document.querySelector(".product-list");
// selector.appendChild(productList("tents"));

productList(selector, "tents");

loadHeaderFooter();