window.bootstrap=require("bootstrap/dist/js/bootstrap.bundle.js");import"bootstrap/dist/css/bootstrap.min.css";import"./css/style.css";import"@fortawesome/fontawesome-free/js/all.min";const tooltipTriggerList=document.querySelectorAll('[data-bs-toggle="tooltip"]'),tooltipList=[...tooltipTriggerList].map((e=>new bootstrap.Tooltip(e)));function calculateTotalPreice(){let e=0;document.querySelectorAll("[data-product-info]").forEach((t=>{const o=t.getAttribute("data-product-price"),r=t.querySelector(".quantity").value;e+=o*r})),document.getElementById("total-price-for-all-product").innerHTML=e+"$"}document.querySelectorAll(".add-to-cart-btn").forEach((e=>{e.addEventListener("click",(()=>{alert("أضيف المنتج الى عربة الشراء")}))})),document.querySelectorAll(".size-option input[type='radio']").forEach((e=>{e.addEventListener("change",(()=>{document.querySelectorAll(".size-option").forEach((e=>{e.classList.remove("active")})),e.parentNode.parentNode.classList.add("active")}))})),document.querySelectorAll(".color-option input[type='radio']").forEach((e=>{e.addEventListener("change",(()=>{document.querySelectorAll(".color-option").forEach((e=>{e.classList.remove("active")})),e.parentNode.parentNode.classList.add("active")}))})),document.querySelectorAll(".quantity").forEach((e=>{e.addEventListener("change",(()=>{const t=e.value,o=e.closest("[data-product-info]"),r=t*o.getAttribute("data-product-price");o.querySelector(".total-price-for-product").innerHTML=r+"$",calculateTotalPreice()}))})),document.querySelectorAll("[data-remove-from-card]").forEach((e=>{e.addEventListener("click",(()=>{e.closest("[data-product-info]").remove(),calculateTotalPreice()}))})),document.getElementById("copyright").innerHTML=" جميع الحقوق محفوظة للمتجر سنة"+(new Date).getFullYear();const cityByCountry={sa:["جدة","الرياض"],om:["صلالة","مسقط"],pal:["معسكر الشاطئ","غزة"],leb:["صور","بيروت"]};document.querySelectorAll("select[name='country']").forEach((e=>{e.addEventListener("change",(()=>{const t=e.value,o=cityByCountry[t]||[],r=document.getElementById("payment-city");r.innerHTML="";const c=document.createElement("option"),a=document.createTextNode("اختر المدينة");c.appendChild(a),c.setAttribute("value",""),c.setAttribute("disabled","true"),c.setAttribute("selected","true"),r.appendChild(c),o.forEach((e=>{const t=document.createElement("option"),o=document.createTextNode(e);t.appendChild(o),t.setAttribute("value",e),r.appendChild(t)}))}))})),document.querySelectorAll("#form-checkout input[name='payment-method']").forEach((e=>{e.addEventListener("change",(()=>{const t=e.value,o=document.querySelectorAll("#credit-card-info input");"COD"===t?o.forEach((e=>{e.style.display="none"})):o.forEach((e=>{e.style.display="block"}))}))}));