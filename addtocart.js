function cartridge() {
  const product = [
    {
      id: 0,
      image: "image/gg-1.jpg",
      title: "Z Flip Foldable Mobile",
      price: 120,
    },
    {
      id: 1,
      image: "image/hh-2.jpg",
      title: "Air Pods Pro",
      price: 60,
    },
    {
      id: 2,
      image: "image/ee-3.jpg",
      title: "250D DSLR Camera",
      price: 230,
    },
    {
      id: 3,
      image: "image/aa-1.jpg",
      title: "Head Phones",
      price: 100,
    },
  ];
  const categories = [
    ...new Set(
      product.map((item) => {
        return item;
      })
    ),
  ];
  let i = 0;
  document.getElementById("root").innerHTML = categories
    .map((item) => {
      var { image, title, price } = item;
      return (
        `<div class='box'>
            <div class='img-box'>
                <img class='images' src=${image}></img>
            </div>
        <div class='bottom'>
        <p>${title}</p>
        <h2>$ ${price}.00</h2>` +
        "<button onclick='addtocart(" +
        i++ +
        ")'>Add to cart</button>" +
        `</div>
        </div>`
      );
    })
    .join(""); //.join('') is a method used to combine the element in an array into a single string...
  //
  var cart = [];
  //
  function addtocart(a) {
    cart.push({ ...categories[a] });
    displaycart();
  }
  function delElement(a) {
    cart.splice(a, 1);
    displaycart();
  }
  //
  function displaycart() {
    let j = 0,
      total = 0;
    document.getElementById("count").innerHTML = cart.length;
    if (cart.length == 0) {
      document.getElementById("cartItem").innerHTML = "Your cart is empty";
      document.getElementById("total").innerHTML = "$ " + 0 + ".00";
    } else {
      document.getElementById("cartItem").innerHTML = cart
        .map((items) => {
          var { image, title, price } = items;
          total = total + price;
          document.getElementById("total").innerHTML = "$ " + total + ".00";
          return (
            `<div class='cart-item'>
                <div class='row-img'>
                    <img class='rowimg' src=${image}>
                </div>
                <p style='font-size:12px;'>${title}</p>
                <h2 style='font-size: 15px;'>$ ${price}.00</h2>` +
            "<i class='fa-solid fa-trash' onclick='delElement(" +
            j++ +
            ")'></i></div>"
          );
        })
        .join("");
    }
  }
}
// cartridge()

const products = [
  {
    id: 0,
    image: "image/gg-1.jpg",
    title: "Z Flip Foldable Mobile",
    price: 120,
  },
  { id: 1, image: "image/hh-2.jpg", title: "Air Pods Pro", price: 60 },
  { id: 2, image: "image/ee-3.jpg", title: "250D DSLR Camera", price: 230 },
  { id: 3, image: "image/aa-1.jpg", title: "Head Phones", price: 100 },
];
let cart = [];

function renderProducts() {
  const root = document.getElementById("root");
  root.innerHTML = "";
  products.forEach((product, index) => {
    const productDiv = document.createElement("div");
    productDiv.className = "box";
    productDiv.innerHTML = `
            <div class='img-box'>
                <img class='images' src="${product.image}" alt="${product.title}">
            </div>
            <div class='bottom'>
                <p>${product.title}</p>
                <h2>$ ${product.price}.00</h2>
                <button onclick='addToCart(${index})'>Add to cart</button>
            </div>`;
    root.appendChild(productDiv);
  });
}

function addToCart(index) {
  cart.push(products[index]);
  displayCart();
}

function removeFromCart(index) {
  cart.splice(index, 1);
  displayCart();
}

function displayCart() {
  const cartContainer = document.getElementById("cartItem");
  const totalElement = document.getElementById("total");
  const countElement = document.getElementById("count");

  countElement.innerHTML = cart.length;

  if (cart.length === 0) {
    cartContainer.innerHTML = "Your cart is empty";
    totalElement.innerHTML = `$ 0.00`;
  } else {
    let total = 0;
    cartContainer.innerHTML = "";
    cart.forEach((item, index) => {
      total += item.price;
      const itemDiv = document.createElement("div");
      itemDiv.className = "cart-item";
      itemDiv.innerHTML = `
            <div class='row-img'>
                <img class='rowimg' src="${item.image}" alt="${item.title}">
            </div>
            <p style='font-size:12px;'>${item.title}</p>
            <h2 style='font-size: 15px;'>$ ${item.price}.00</h2>
            <i class='fa-solid fa-trash' onclick='removeFromCart(${index})'></i>
        `;
      cartContainer.appendChild(itemDiv);
      totalElement.innerHTML = `$ ${total}.00`;
    });
  }
}
renderProducts();
