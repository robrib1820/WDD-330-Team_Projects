// wrapper for querySelector...returns matching element
export function qs(selector, parent = document) {
  return parent.querySelector(selector);
}
// or a more concise version if you are into that sort of thing:
// export const qs = (selector, parent = document) => parent.querySelector(selector);

// retrieve data from localstorage
export function getLocalStorage(key) {
  return JSON.parse(localStorage.getItem(key));
}
// save data to local storage
export function setLocalStorage(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}
// set a listener for both touchend and click
export function setClick(selector, callback) {
  qs(selector).addEventListener("touchend", (event) => {
    event.preventDefault();
    callback();
  });
  qs(selector).addEventListener("click", callback);
}

export function getParam(param) {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const product = urlParams.get("product");
  // console.log(urlParams.get(param));
  // console.log(param);
  return urlParams.get(param);
}

export function renderListWithTemplate(
  templateFn,
  parentElement,
  list,
  position = "afterbegin",
  clear = true
) {
  if (clear === true) {
    while (parentElement.lastElementChild) {
      parentElement.removeChild(parentElement.lastElementChild);
    }
    const cards = list.map(templateFn);
    parentElement.insertAdjacentHTML(position, cards);
  } else {
    const cards = list.map(templateFn);
    parentElement.insertAdjacentHTML(position, cards);
  }
}

export async function renderWithTemplate(
  templateFn,
  parentElement,
  data,
  position = "afterbegin",
  clear = true,
  callback
) {
  if (clear) {
    parentElement.innerhtml = "";
  }

  const htmlString = await templateFn(data);
  // console.log(htmlString);
  parentElement.insertAdjacentHTML(position, htmlString);
  if (callback) {
    callback(data);
  }
}

function loadTemplate(path) {
  return async function () {
    const response = await fetch(path);
    if (response.ok) {
      const text = await response.text();
      // console.log(text);
      return text;
    }
  };
}

export function loadHeaderFooter() {
  const headerTemplateFn = loadTemplate("/partials/header.html");
  const footerTemplateFn = loadTemplate("/partials/footer.html");
  const headerId = document.querySelector("#main-header");
  const footerID = document.querySelector("#main-footer");
  renderWithTemplate(headerTemplateFn, headerId);
  renderWithTemplate(footerTemplateFn, footerID);
}

// we should have a function that is gonna handle then category issue
// that fucntion needs to give us a behavor of getting the category according to
// the selected category by the user

// export function setCategory() {
//   return
// }
