let formBtn = document.querySelector(".book-btn");
let message = document.querySelector(".message");

formBtn.addEventListener("click", () => {
  let inputMeaage = document.querySelectorAll(".input-group input");
  let isvalid = true;

  inputMeaage.forEach((input) => {
    if (input.value === "") {
      isvalid = false;
    }
  });

  if (!isvalid) {
    message.textContent = "Please enter all the fields.";
    message.style.color = "red";
  } else {
    message.textContent = "Booking successful!";
    message.style.color = "green";
  }
});


const serviceImage = document.getElementById("serviceImage");
const serviceName = document.getElementById("serviceName");
const servicePrice = document.getElementById("servicePrice");

let serviceCounter = 0;

const displayImages = (Index) => {
  serviceImage.src = services[Index].image;
  serviceName.innerText = services[Index].name;
  servicePrice.innerText = services[Index].price;
};

displayImages(serviceCounter);

const skipBtn = document.getElementById("skipBtn");

skipBtn.addEventListener("click", function () {
  serviceCounter++;

   if (serviceCounter >= services.length) {
        serviceCounter = 0;
    }

  displayImages(serviceCounter);
});

const addBtn = document.getElementById("addBtn");

const cartItems = document.getElementById("cartItems");

const cart = [];

const total = document.getElementById("total");

addBtn.addEventListener("click", function () {
  const currentServices = services[serviceCounter];

  const row = document.createElement("tr");

  row.innerHTML = `
        <td>${cartItems.children.length + 1}</td>
        <td>${currentServices.name}</td>
        <td>₹${currentServices.price}</td>
    `;

  cartItems.appendChild(row);

  cart.push(currentServices);
  const totalAmount = cart.reduce((sum, items) => {
    return sum + items.price;
  }, 0);
  total.innerText = totalAmount
});
