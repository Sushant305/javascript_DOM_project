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
        image: "https://cdn-icons-png.flaticon.com/512/1046/1046857.png"
    },

    {
        name: "Wash & Fold",
        price: 150,
        image: "https://cdn-icons-png.flaticon.com/512/3082/3082037.png"
    },

    {
        name: "Steam Iron",
        price: 100,
        image: "https://cdn-icons-png.flaticon.com/512/3081/3081559.png"
    },

    {
        name: "Premium Laundry",
        price: 350,
        image: "https://cdn-icons-png.flaticon.com/512/2965/2965567.png"
    }

];