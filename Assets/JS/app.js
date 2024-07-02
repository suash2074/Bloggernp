var swiper = new Swiper(".mySwiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var emailField = document.getElementById("email__field");
var emailError = document.getElementById("email__error");

function validateEmail() {
  emailError.style.display = 'flex';

  if (!emailField.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
    emailError.innerHTML = "Please enter a valid email";
    emailField.style.backgroundColor = "#d4a270a2";
    return false;
  }

  emailError.innerHTML = "";
  emailField.style.backgroundColor = "#81d470a2";
  return true;
}

/* -------------------
    Preloader
    ---------------------*/
(function ($) {
  $(window).load(function () {
    // Preloader 
    $('#loader').fadeOut('slow');
    $('.spinner').fadeOut('slow');
  }); // End Window Load
})(jQuery, window, document);

// $(document).ready(function () {
//   $(".heart__btn").click(function () {
//     $(".heart__btn").toggleClass("heart__active")
//     $('.number').toggleClass("heart__active")
//     $('.heart').toggleClass("heart__active")
//   });
// });

$(document).ready(function () {
  $(".heart__btn").click(function () {
      let numberElement = $(this).find('.number');
      let currentNumber = parseInt(numberElement.text());

      // Check if currentNumber is a valid number
      if (isNaN(currentNumber)) {
          currentNumber = 0; // Default to 0 if parsing fails
      }

      if ($(this).hasClass("heart__active")) {
          numberElement.text(currentNumber - 1);
      } else {
          numberElement.text(currentNumber + 1);
      }

      $(this).toggleClass("heart__active");
      $(this).find('.heart').toggleClass("heart__active");
  });
});
