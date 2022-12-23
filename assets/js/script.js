
//funcion
document.querySelector(".inicio").click(function (e) {
  e.preventDefault();
  const href = this.getAttribute("#inicio");
  const offsetTop = document.querySelector(href).offsetTop;
  scroll({
    top: offsetTop,
    behavior: "smooth"
  });
  });