// Burger button

var forEach = function (t, o, r) {
  if ("[object Object]" === Object.prototype.toString.call(t))
    for (var c in t)
      Object.prototype.hasOwnProperty.call(t, c) && o.call(r, t[c], c, t);
  else for (var e = 0, l = t.length; l > e; e++) o.call(r, t[e], e, t);
};

var hamburgers = document.querySelectorAll(".hamburger");
if (hamburgers.length > 0) {
  forEach(hamburgers, function (hamburger) {
    hamburger.addEventListener(
      "click",
      function () {
        this.classList.toggle("is-active");
      },
      false
    );
  });
}

// Slider

if (document.documentElement.clientWidth < 600) {
  var slideIndex = 1;
  showDivs(slideIndex);

  function plusDivs(n) {
    showDivs((slideIndex += n));
  }

  function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("slider");
    if (n > x.length) {
      slideIndex = 1;
    }
    if (n < 1) {
      slideIndex = x.length;
    }
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    x[slideIndex - 1].style.display = "block";
  }
}

// Menu en mobile

function changeClass() {
  let siteNav = document.getElementById("burger-menu");
  siteNav.classList.toggle("menu-open");
}

//modal

//VARIABLES
var span = document.getElementsByClassName("close")[0]; //Span
//Savings
var modalSavings = document.getElementById("modalSavings"); //Modal
var btnSavings = document.getElementById("modalSavingsButton"); //Button

//CC
var modalCC = document.getElementById("modalCC"); //Modal
var btnCC = document.getElementById("modalCCButton"); //Button

//Investing
var modalInvesting = document.getElementById("modalInvesting"); //Modal
var btnInvesting = document.getElementById("modalInvestingButton"); //Button

btnSavings.onclick = function () {
  // When the user clicks on the button, open the modal
  modalSavings.style.display = "block";
};

span.onclick = function () {
  // When the user clicks on <span> (x), close the modal
  modalSavings.style.display = "none";
  modalCC.style.display = "none";
  modalInvesting.style.display = "none";
};

window.onclick = function (event) {
  // When the user clicks anywhere outside of the modal, close it
  if (event.target == modalSavings) {
    modalSavings.style.display = "none";
  } else if (event.target == modalCC) {
    modalCC.style.display = "none";
  } else if (event.target == modalInvesting) {
    modalInvesting.style.display = "none";
  }
};
