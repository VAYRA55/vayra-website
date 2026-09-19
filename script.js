const WHATSAPP_NUMBER = "91XXXXXXXXXX"; // Replace with your WhatsApp number, e.g. 919876543210

const products = [
 {id:1,name:"VAYRA Signature",price:1299,cat:"signature",desc:"The core VAYRA identity — oversized premium cotton with a clean signature mark.",dark:false},
 {id:2,name:"ORIGIN Tee",price:1499,cat:"limited",desc:"The first chapter of VAYRA. Minimal, bold and built for everyday rotation.",dark:true},
 {id:3,name:"VAYRA Essential",price:999,cat:"essential",desc:"A refined everyday essential with the VAYRA wordmark.",dark:false},
 {id:4,name:"VY-01",price:1399,cat:"signature",desc:"A numbered streetwear piece inspired by the beginning of the label.",dark:true},
 {id:5,name:"VAYRA Script",price:1199,cat:"essential",desc:"Soft minimal branding for a quieter expression of VAYRA.",dark:false},
 {id:6,name:"ORIGIN Black",price:1599,cat:"limited",desc:"A limited monochrome statement from ORIGIN 01.",dark:true}
];

let cart = JSON.parse(localStorage.getItem("vayraCart") || "[]");
let current = null;
let selectedColor = "Black";
let selectedSize = "M";

const productsEl=document.getElementById("products");
function money(n){return "₹"+n.toLocaleString("en-IN")}
function renderProducts(filter="all"){
 productsEl.innerHTML="";
 products.filter(p=>filter==="all"||p.cat===filter).forEach(p=>{
  const el=document.createElement("article"); el.className="product";
  el.innerHTML=`<div class="product-visual ${p.dark?"darkvis":""}"><div class="tee"><span>${p.name.includes("ORIGIN")?"V":"VAYRA"}</span></div></div><div class="product-info"><div><h3>${p.name}</h3><p>${p.cat}</p></div><span class="price">${money(p.price)}</span></div>`;
  el.onclick=()=>openProduct(p); productsEl.appendChild(el);
 });
}
renderProducts();

document.querySelectorAll(".filter").forEach(b=>b.onclick=()=>{document.querySelectorAll(".filter").forEach(x=>x.classList.remove("active"));b.classList.add("active");renderProducts(b.dataset.filter)});

function openProduct(p){
 current=p; selectedColor="Black"; selectedSize="M";
 document.getElementById("modalCategory").textContent=p.cat+" / ORIGIN 01";
 document.getElementById("modalName").textContent=p.name;
 document.getElementById("modalPrice").textContent=money(p.price);
 document.getElementById("modalDesc").textContent=p.desc;
 document.getElementById("modalArt").innerHTML=`<div class="tee ${p.dark?"darkvis":""}"><span>${p.name.includes("ORIGIN")?"V":"VAYRA"}</span></div>`;
 renderOptions();
 document.getElementById("productModal").classList.add("show"); document.getElementById("overlay").classList.add("show");
}
function renderOptions(){
 document.getElementById("colorOptions").innerHTML=["Black","Off White","Stone"].map(c=>`<button class="${c===selectedColor?"selected":""}" onclick="selectColor('${c}')">${c}</button>`).join("");
 document.getElementById("sizeOptions").innerHTML=["S","M","L","XL"].map(s=>`<button class="${s===selectedSize?"selected":""}" onclick="selectSize('${s}')">${s}</button>`).join("");
}
function selectColor(c){selectedColor=c;renderOptions()}
function selectSize(s){selectedSize=s;renderOptions()}
document.getElementById("addModal").onclick=()=>{cart.push({...current,color:selectedColor,size:selectedSize});saveCart();closeModal();openCart()};
function saveCart(){localStorage.setItem("vayraCart",JSON.stringify(cart));renderCart()}
function renderCart(){
 document.getElementById("cartCount").textContent=cart.length;
 const el=document.getElementById("cartItems");
 if(!cart.length){el.innerHTML='<p class="tiny" style="padding:30px 0">Your bag is empty.</p>';document.getElementById("cartTotal").textContent="₹0";return}
 el.innerHTML=cart.map((p,i)=>`<div class="cart-row"><div class="cart-thumb"><div class="tee"><span>V</span></div></div><div><h4>${p.name}</h4><p>${p.color} / ${p.size} · ${money(p.price)}</p></div><button class="remove" onclick="removeItem(${i})">Remove</button></div>`).join("");
 document.getElementById("cartTotal").textContent=money(cart.reduce((a,p)=>a+p.price,0));
}
function removeItem(i){cart.splice(i,1);saveCart()}
function openCart(){renderCart();document.getElementById("drawer").classList.add("open");document.getElementById("overlay").classList.add("show")}
function closeCart(){document.getElementById("drawer").classList.remove("open");document.getElementById("overlay").classList.remove("show")}
function closeModal(){document.getElementById("productModal").classList.remove("show");document.getElementById("overlay").classList.remove("show")}
document.getElementById("cartBtn").onclick=openCart;
document.getElementById("closeCart").onclick=closeCart;
document.getElementById("modalClose").onclick=closeModal;
document.getElementById("overlay").onclick=()=>{closeCart();closeModal()};
document.getElementById("checkoutBtn").onclick=()=>{
 if(!cart.length){alert("Your bag is empty.");return}
 const lines=cart.map(p=>`${p.name} | ${p.color} | ${p.size} | ${money(p.price)}`).join("%0A");
 const total=money(cart.reduce((a,p)=>a+p.price,0));
 if(WHATSAPP_NUMBER.includes("X")) alert("First replace WHATSAPP_NUMBER in script.js with your real WhatsApp number.");
 else window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=Hi VAYRA,%20I%20want%20to%20order:%0A${lines}%0ATotal:%20${total}`,"_blank");
};
document.getElementById("newsletterForm").onsubmit=e=>{e.preventDefault();document.getElementById("newsletterMsg").textContent="You're on the VAYRA list.";e.target.reset()};
renderCart();