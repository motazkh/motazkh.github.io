window.bootstrap=require("bootstrap/dist/js/bootstrap.bundle.js");import"bootstrap/dist/css/bootstrap.min.css";import"./css/style.css";import"@fortawesome/fontawesome-free/js/all.min";const tooltipTriggerList=document.querySelectorAll('[data-bs-toggle="tooltip"]'),tooltipList=[...tooltipTriggerList].map((t=>new bootstrap.Tooltip(t)));document.querySelectorAll(".add-to-cart-btn").forEach((t=>{t.addEventListener("click",(()=>{alert("أضيف المنتج الى عربة الشراء")}))})),document.querySelectorAll(".size-option input[type='radio']").forEach((t=>{t.addEventListener("change",(()=>{document.querySelectorAll(".size-option").forEach((t=>{t.classList.remove("active")})),t.parentNode.parentNode.classList.add("active")}))})),document.querySelectorAll(".color-option input[type='radio']").forEach((t=>{t.addEventListener("change",(()=>{document.querySelectorAll(".color-option").forEach((t=>{t.classList.remove("active")})),t.parentNode.parentNode.classList.add("active")}))})),document.querySelectorAll(".quantity").forEach((t=>{t.addEventListener("change",(()=>{const e=t.value,o=t.closest("[data-product-info]"),r=e*o.getAttribute("data-product-price");o.querySelector(".total-price-for-product").innerHTML=r+"$";let a=0;document.querySelectorAll("[data-product-info]").forEach((t=>{const e=t.getAttribute("data-product-price"),o=t.querySelector(".quantity").value;a+=e*o})),document.getElementById("total-price-for-all-product").innerHTML=a+"$"}))})),document.getElementById("copyright").innerHTML=" جميع الحقوق محفوظة للمتجر سنة"+(new Date).getFullYear();