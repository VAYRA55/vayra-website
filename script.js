<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>VAYRA — Wear Your Origin</title>

<style>
*{
  margin:0;
  padding:0;
  box-sizing:border-box;
}

body{
  font-family:Arial,Helvetica,sans-serif;
  background:#fff;
  color:#111;
}

header{
  background:#050505;
  color:white;
  padding:20px 6%;
  display:flex;
  justify-content:space-between;
  align-items:center;
  position:sticky;
  top:0;
  z-index:10;
}

.logo{
  font-size:32px;
  font-weight:800;
  letter-spacing:3px;
}

nav a{
  color:white;
  text-decoration:none;
  margin-left:25px;
  font-size:14px;
}

.hero{
  display:grid;
  grid-template-columns:1fr 1fr;
  gap:50px;
  padding:70px 7%;
  align-items:center;
}

.product-image{
  width:100%;
  max-height:650px;
  object-fit:cover;
  background:#f5f5f5;
}

.small-label{
  letter-spacing:4px;
  font-size:12px;
  color:#666;
  margin-bottom:15px;
}

h1{
  font-size:48px;
  letter-spacing:-1px;
  margin-bottom:15px;
}

.price{
  font-size:30px;
  font-weight:700;
  margin-bottom:20px;
}

.description{
  color:#555;
  line-height:1.7;
  max-width:520px;
  margin-bottom:30px;
}

.features{
  display:grid;
  grid-template-columns:repeat(3,1fr);
  gap:15px;
  margin:25px 0;
}

.feature{
  border-top:1px solid #ddd;
  padding-top:12px;
  font-size:13px;
}

.label{
  font-size:13px;
  font-weight:bold;
  margin:20px 0 10px;
}

.options{
  display:flex;
  flex-wrap:wrap;
  gap:8px;
}

.option{
  border:1px solid #ccc;
  background:white;
  padding:12px 17px;
  cursor:pointer;
}

.option.active{
  background:#111;
  color:#fff;
}

.buttons{
  margin-top:30px;
  display:flex;
  gap:10px;
}

button{
  border:none;
  padding:17px;
  cursor:pointer;
  font-weight:bold;
  font-size:14px;
}

.add{
  background:#050505;
  color:white;
  flex:1;
}

.buy{
  background:white;
  border:1px solid #111;
  flex:1;
}

.info-bar{
  display:grid;
  grid-template-columns:repeat(4,1fr);
  border-top:1px solid #ddd;
  border-bottom:1px solid #ddd;
  padding:30px 7%;
}

.info{
  text-align:center;
  font-size:13px;
  line-height:1.6;
}

.about{
  background:#090909;
  color:white;
  padding:90px 8%;
  text-align:center;
}

.about h2{
  font-family:Georgia,serif;
  font-size:50px;
  margin:15px 0 25px;
}

.about p{
  max-width:700px;
  margin:auto;
  color:#ccc;
  line-height:1.8;
}

.details{
  display:grid;
  grid-template-columns:repeat(3,1fr);
  gap:50px;
  padding:70px 8%;
}

.details h3{
  margin-bottom:20px;
}

.details ul{
  list-style:none;
  line-height:2;
  color:#555;
}

.contact{
  background:#050505;
  color:white;
  padding:50px 8%;
  display:grid;
  grid-template-columns:repeat(3,1fr);
  gap:30px;
}

.contact h3{
  margin-bottom:15px;
}

.contact p,.contact a{
  color:#bbb;
  line-height:2;
  text-decoration:none;
}

footer{
  background:#050505;
  color:#777;
  border-top:1px solid #222;
  text-align:center;
  padding:20px;
  font-size:12px;
}

@media(max-width:800px){
  nav{
    display:none;
  }

  .hero{
    grid-template-columns:1fr;
    padding:35px 5%;
  }

  h1{
    font-size:36px;
  }

  .features{
    grid-template-columns:1fr 1fr 1fr;
  }

  .info-bar{
    grid-template-columns:1fr 1fr;
    gap:25px;
  }

  .details{
    grid-template-columns:1fr;
    gap:35px;
  }

  .contact{
    grid-template-columns:1fr;
  }
}
</style>
</head>

<body>

<header>
  <div class="logo">VAYRA</div>

  <nav>
    <a href="#shop">SHOP</a>
    <a href="#about">ABOUT</a>
    <a href="#contact">CONTACT</a>
  </nav>
</header>


<section class="hero" id="shop">

  <div>
    <img
      src="pluse-tee.png"
      alt="VAYRA PLUSE TEE"
      class="product-image">
  </div>

  <div>

    <div class="small-label">
      VAYRA &nbsp; | &nbsp; ORIGIN COLLECTION
    </div>

    <h1>VAYRA PLUSE TEE</h1>

    <div class="price">₹499</div>

    <p class="description">
      A statement piece made for those who wear their identity with confidence.
      The VAYRA PLUSE TEE combines a premium cotton feel with an oversized
      streetwear silhouette and bold front design.
    </p>

    <div class="features">
      <div class="feature">
        <b>Premium Cotton</b><br>
        240 GSM
      </div>

      <div class="feature">
        <b>Oversized Fit</b><br>
        Relaxed Comfort
      </div>

      <div class="feature">
        <b>Bold Print</b><br>
        Premium Finish
      </div>
    </div>


    <div class="label">COLOUR</div>

    <div class="options">
      <button class="option active">WHITE</button>
      <button class="option">BLACK</button>
    </div>


    <div class="label">SIZE</div>

    <div class="options">
      <button class="option">XS</button>
      <button class="option">S</button>
      <button class="option">M</button>
      <button class="option">L</button>
      <button class="option">XL</button>
      <button class="option">XXL</button>
    </div>


    <div class="buttons">
      <button class="add" onclick="addToCart()">
        ADD TO CART
      </button>

      <button class="buy" onclick="buyNow()">
        BUY NOW
      </button>
    </div>

  </div>

</section>


<section class="info-bar">

  <div class="info">
    🚚<br>
    <b>PAN INDIA DELIVERY</b><br>
    All India Shipping
  </div>

  <div class="info">
    💵<br>
    <b>CASH ON DELIVERY</b><br>
    Pay at your doorstep
  </div>

  <div class="info">
    UPI<br>
    <b>UPI PAYMENT</b><br>
    Google Pay / PhonePe / Paytm
  </div>

  <div class="info">
    ✓<br>
    <b>SECURE ORDER</b><br>
    Safe & Simple Checkout
  </div>

</section>


<section class="about" id="about">

  <div class="small-label">ABOUT VAYRA</div>

  <h2>Wear Your Origin.</h2>

  <p>
    VAYRA is more than a clothing brand — it's a mindset.
    Born from individuality, confidence and street culture,
    VAYRA creates premium everyday pieces for people who
    choose to stand out.
  </p>

</section>


<section class="details">

  <div>
    <h3>PRODUCT DETAILS</h3>

    <ul>
      <li>✓ Premium Cotton Fabric</li>
      <li>✓ 240 GSM</li>
      <li>✓ Oversized Fit</li>
      <li>✓ Unisex</li>
      <li>✓ Soft & Comfortable</li>
      <li>✓ Durable Print</li>
      <li>✓ Made for Indian Streetwear</li>
    </ul>
  </div>


  <div>
    <h3>WASH CARE</h3>

    <ul>
      <li>Cold machine wash</li>
      <li>Do not bleach</li>
      <li>Turn inside out before washing</li>
      <li>Do not iron directly on print</li>
      <li>Dry in shade</li>
    </ul>
  </div>


  <div>
    <h3>SHIPPING & EXCHANGE</h3>

    <ul>
      <li>🚚 Delivery: 3–7 business days</li>
      <li>📦 Pan India shipping</li>
      <li>↩ Size exchange available within 7 days</li>
      <li>Product must be unused and unwashed</li>
      <li>Return/exchange subject to product condition</li>
    </ul>
  </div>

</section>


<section class="contact" id="contact">

  <div>
    <h3>VAYRA</h3>
    <p>WEAR YOUR ORIGIN.</p>
  </div>

  <div>
    <h3>GET IN TOUCH</h3>

    <p>
      📞 <a href="tel:+918445478251">+91 8445478251</a>
    </p>

    <p>
      ✉ <a href="mailto:wearvayra@gmail.com">
      wearvayra@gmail.com
      </a>
    </p>
  </div>

  <div>
    <h3>FOLLOW VAYRA</h3>

    <p>
      Instagram:
      <a href="https://instagram.com/wearvayra_" target="_blank">
        @wearvayra_
      </a>
    </p>

    <p>UPI + Cash on Delivery</p>
  </div>

</section>


<footer>
  © 2026 VAYRA. All Rights Reserved. &nbsp; | &nbsp; WEAR YOUR ORIGIN.
</footer>


<script>

function addToCart(){

  alert(
    "VAYRA PLUSE TEE added to cart.\n\n" +
    "Price: ₹499\n" +
    "COD available across India."
  );

}


function buyNow(){

  const message =
    "Hello VAYRA! I want to order the VAYRA PLUSE TEE for ₹499. " +
    "Please share the order details.";

  const whatsapp =
    "https://wa.me/918445478251?text=" +
    encodeURIComponent(message);

  window.open(whatsapp,"_blank");

}


const options = document.querySelectorAll(".option");

options.forEach(option => {

  option.addEventListener("click",function(){

    const group = this.parentElement;

    group.querySelectorAll(".option")
      .forEach(x => x.classList.remove("active"));

    this.classList.add("active");

  });

});

</script>

</body>
</html>
