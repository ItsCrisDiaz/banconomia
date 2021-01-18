// Burger button

var forEach = function (t, o, r) {
  if ("[object Object]" === Object.prototype.toString.call(t))
    for (var c in t)
      Object.prototype.hasOwnProperty.call(t, c) && o.call(r, t[c], c, t);
  else for (var e = 0, l = t.length; l > e; e++) o.call(r, t[e], e, t);
};

var hamburgers = document.querySelectorAll(".hamburger");
var headerNav = document.querySelectorAll(".header__nav");
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

if (document.documentElement.clientWidth < 900) {
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
