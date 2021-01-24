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
//Savings
var modalSavings = document.getElementById("modalSavings"); //Modal
var btnSavings = document.getElementById("modalSavingsButton"); //Button
var modalSavingsSpan = document.getElementsByClassName("close")[0]; //Span

//CC
var modalCC = document.getElementById("modalCC"); //Modal
var btnCC = document.getElementById("modalCCButton"); //Button
var modalCCSpan = document.getElementsByClassName("close")[1]; //Span

//Investing
var modalInvesting = document.getElementById("modalInvesting"); //Modal
var btnInvesting = document.getElementById("modalInvestingButton"); //Button
var modalInvestingSpan = document.getElementsByClassName("close")[2]; //Span

btnSavings.onclick = function () {
  // When the user clicks on the button, open the modal
  modalSavings.style.display = "block";
};

btnCC.onclick = function () {
  // When the user clicks on the button, open the modal
  modalCC.style.display = "block";
};

btnInvesting.onclick = function () {
  // When the user clicks on the button, open the modal
  modalInvesting.style.display = "block";
};

modalSavingsSpan.onclick = function () {
  // When the user clicks on <span> (x), close the modal
  modalSavings.style.display = "none";
};

modalCCSpan.onclick = function () {
  // When the user clicks on <span> (x), close the modal
  modalCC.style.display = "none";
};

modalInvestingSpan.onclick = function () {
  // When the user clicks on <span> (x), close the modal
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

//collapsible

var coll = document.getElementsByClassName("main__modal--collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function () {
    this.classList.toggle(".collapsible-active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}
