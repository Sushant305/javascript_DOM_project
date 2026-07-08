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
        image: "./Images/Dry Cleaning.png"
    },

    {
        name: "Leather & Suede Cleaning",
        price: 150,
        image: "./Images/Leather and suits.png"
    },

    {
        name: "Steam Iron",
        price: 30,
        image: "./Images/Iron.png"
    },

    {
        name: "Weading Dress Cleaning",
        price: 2400,
        image: "./Images/Wedding.png"
    },

    {
        name: "Wash And Folds",
        price: 140,
        image: "./Images/Wash and Folds.png"
    },
    {
        name: "Stain Removal",
        price: 500,
        image: "./Images/stain remove.png"
    }
];
