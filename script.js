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

const services = [
  {
    name: "Dry Cleaning",
    price: 200,
    image: "./Images/Dry Cleaning.jpg",
  },

  {
    name: "Leather & Suede Cleaning",
    price: 150,
    image: "./Images/Leather and suits.jpg",
  },

  {
    name: "Steam Iron",
    price: 30,
    image: "./Images/Iron.jpg",
  },

  {
    name: "Weading Dress Cleaning",
    price: 2400,
    image: "./Images/Wedding.jpg",
  },

  {
    name: "Wash And Folds",
    price: 140,
    image: "./Images/Wash and Folds.jpg",
  },
  {
    name: "Stain Removal",
    price: 500,
    image: "./Images/stain remove.jpg",
  }
];


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
