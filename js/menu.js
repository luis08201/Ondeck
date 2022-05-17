let menuBtn = document.getElementById("menuBtn");
let dropdown = document.getElementById("dropdown");
let btnClose = document.getElementById("btnClose");

menuBtn.addEventListener("click", ()=>{
  menuBtn.classList.toggle("active");
  let nav = document.getElementById("nav");
  nav.classList.toggle("active");

  /* DROPDOWN */

  let product = document.getElementById("product");

  product.addEventListener("click", () => {
    product.classList.toggle("active");
    dropdown.classList.remove("inactive");
    dropdown.classList.add("active");
  });

 if (!menuBtn.classList.contains("active")) {
   dropdown.classList.remove("active");
   dropdown.classList.add("inactive");
 }

 btnClose.addEventListener("click", ()=>{
       dropdown.classList.add("inactive");
 })
})


/* DESKTOP */
let producto = document.getElementById("producto");

producto.addEventListener("click", () => {
    producto.classList.toggle("active");
    let dropdownDesktop = document.getElementById("dropdownDesktop");
    dropdownDesktop.classList.toggle("active");
});


