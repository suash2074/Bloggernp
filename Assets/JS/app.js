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

