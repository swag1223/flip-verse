let data = localStorage.getItem("cart");
if (data) {
  cart = JSON.parse(data);
}

let cartContainer = document.getElementById("cart-container");
cart.forEach((item) => {
  const newPrice = item.newPrice ? item.newPrice : item.price;
  const img = item.img ? item.img : item.img1;
  const param = encodeURIComponent(JSON.stringify(item));
  const htmlToAdd = `<div class="showcase">
    <div class="showcase-banner showcase-banner-cart">
      <img
        src="./assets/images/products/${img}.jpg"
        alt=${item.name}
        width="300"
        class="product-img-cart"
      />
    </div>
  
    <div class="showcase-content">
      
  
      <a href="#">
        <h3 class="showcase-title">${item.name}</h3>
      </a>
  
      <div class="showcase-rating">
        <ion-icon name="star"></ion-icon>
        <ion-icon name="star"></ion-icon>
        <ion-icon name="star"></ion-icon>
        <ion-icon name="star-outline"></ion-icon>
        <ion-icon name="star-outline"></ion-icon>
      </div>
  
      <div class="price-box">
        <p class="price">Rs.${newPrice}</p>
      </div>
      <div class="add-cart-btn-container"><button class="add-cart-btn" onclick="removeFromCart(this)" data-item=${param}>remove from cart</button></div>
    </div>
    
  </div>`;

  cartContainer.insertAdjacentHTML("beforeend", htmlToAdd);
});

function removeFromCart(event) {
  const str = event.getAttribute("data-item");
  const productObj = JSON.parse(decodeURIComponent(str));

  cart = cart.filter((item) => item.name != productObj.name);
  localStorage.setItem("cart", JSON.stringify(cart));

  Toastify({
    text: "Item removed from cart",
    duration: 3000,
    close: true,
    gravity: "top",
    position: "center",
    stopOnFocus: true,
    style: {
      background: "green",
      display: "flex",
      width: "max-content",
    },
    callback: function () {
      location.reload();
    },
  }).showToast();
}

function gotoHome() {
  window.location = window.location.origin;
}
