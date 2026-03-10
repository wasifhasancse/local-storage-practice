// const setValue = () => {
//   const user = {
//     name: "wasif",
//     age: 23,
//     code: "js"
//   }
//   localStorage.setItem('user', JSON.stringify(user))
// }
// const getValue = () => {
//   const getData = JSON.parse(localStorage.getItem("user"))
//   console.log(getData)
// }
// -----------------------------------------------------------------------------------------
// get value of input field
const getInputValue = () => {
  const nameInput = document.getElementById("name");
  const name = nameInput.value;
  const priceInput = document.getElementById("price");
  const price = parseInt(priceInput.value);

  // console.log(name, price);
  setDataToLs(name, price);
  displayDataInDocument(name, price);
  nameInput.value = "";
  priceInput.value = "";
};

// get data from local storage
const getObjectFromLs = () => {
  let cart = {};
  const getLsObj = localStorage.getItem("cart");
  // if the local storage has no data, then it return the empty object
  if (getLsObj) {
    // if the local storage has any data, then it return the local storage data
    cart = JSON.parse(getLsObj);
  }
  return cart;
};

// receiving the input field data and set it into local storage
const setDataToLs = (name, price) => {
  console.log("getcart", name, price);
  // receiving an object of if local storage has data or an empty object by default from the getObject function
  const cart = getObjectFromLs();

  if (cart[name]) {
    // if the cart item is already in the data, then it update the item value
    cart[name] += price;
  } else {
    // if the cart item not exit in local storage it set 'new data' in the object
    cart[name] = price;
  }
  console.log("after object", cart);
  // store the object in the local storage
  localStorage.setItem("cart", JSON.stringify(cart));
};

// get the latest local storage data
const getLsDataToDisplay = () => {
  // get the latest local storage data of Object
  const getLsData = getObjectFromLs();
  // loop the object for getting each data
  for (const LsData in getLsData) {
    // const quantity = getLsData[LsData];
    // console.log(LsData, quantity);
    // set the each data to display in html
    displayDataInDocument(LsData, getLsData[LsData]);
  }
};

// it display the data in the html page
const displayDataInDocument = (name, price) => {
  const createLi = document.createElement("li");
  createLi.innerHTML = `${name} : ${price}`;
  document.getElementById("ul").append(createLi);
};
// call to get the latest local storage data
getLsDataToDisplay();
