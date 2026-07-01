/* ============================================================
   BLOOM & CO. — Core Site Script
   Handles: navigation injection, mobile menu, cart (localStorage),
   toast notifications, footer injection, misc UI helpers.
   ============================================================ */

/* ---------- Cart Storage Helpers ---------- */
const CART_KEY = "bloomco_cart";

function getCart() {
  try {
    return JSON.parse(localStorage.getItem(CART_KEY)) || [];
  } catch (e) {
    return [];
  }
}

function saveCart(cart) {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
  updateCartCount();
}

function addToCart(item) {
  const cart = getCart();
  // item: {id, name, price, size, qty, image, addons:[], giftMessage, deliveryDate}
  const existingIndex = cart.findIndex(
    (c) => c.id === item.id && c.size === item.size && JSON.stringify(c.addons) === JSON.stringify(item.addons)
  );
  if (existingIndex > -1) {
    cart[existingIndex].qty += item.qty;
  } else {
    cart.push(item);
  }
  saveCart(cart);
  showToast(`${item.name} added to your cart`);
}

function removeFromCart(index) {
  const cart = getCart();
  cart.splice(index, 1);
  saveCart(cart);
}

function updateCartQty(index, qty) {
  const cart = getCart();
  if (!cart[index]) return;
  cart[index].qty = Math.max(1, qty);
  saveCart(cart);
}

function cartTotal() {
  return getCart().reduce((sum, item) => {
    const addonsTotal = (item.addons || []).reduce((a, b) => a + b.price, 0);
    return sum + (item.price + addonsTotal) * item.qty;
  }, 0);
}

function cartCount() {
  return getCart().reduce((sum, item) => sum + item.qty, 0);
}

function updateCartCount() {
  document.querySelectorAll(".cart-count").forEach((el) => {
    const count = cartCount();
    el.textContent = count;
    el.style.display = count > 0 ? "inline-flex" : "none";
  });
}

/* ---------- Toast Notification ---------- */
function showToast(message) {
  let toast = document.querySelector(".toast");
  if (!toast) {
    toast = document.createElement("div");
    toast.className = "toast";
    document.body.appendChild(toast);
  }
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(window._toastTimeout);
  window._toastTimeout = setTimeout(() => toast.classList.remove("show"), 2600);
}

/* ---------- Header / Nav Injection ---------- */
const NAV_LINKS = [
  { href: "index.html", label: "Home" },
  { href: "shop.html", label: "Shop" },
  { href: "occasions.html", label: "Occasions" },
  { href: "delivery.html", label: "Same-Day Delivery" },
  { href: "weddings.html", label: "Weddings & Events" },
  { href: "about.html", label: "About" },
  { href: "contact.html", label: "Contact" }
];

function currentPage() {
  const path = window.location.pathname.split("/").pop();
  return path === "" ? "index.html" : path;
}

function renderHeader() {
  const mount = document.getElementById("site-header");
  if (!mount) return;
  const page = currentPage();
  const links = NAV_LINKS.map(
    (l) => `<li><a href="${l.href}" class="${page === l.href ? "active" : ""}">${l.label}</a></li>`
  ).join("");

  mount.innerHTML = `
    <div class="topbar">
      <div class="container topbar-inner">
        <span>🌸 Free same-day delivery on orders before 2:00 PM</span>
        <span class="topbar-links"><a href="tel:+61200000000">Call (02) 0000 0000</a></span>
      </div>
    </div>
    <header class="site-header">
      <div class="container header-inner">
        <a href="index.html" class="logo">Bloom&nbsp;&amp;&nbsp;Co<span>.</span></a>
        <nav class="main-nav" id="main-nav">
          <ul>${links}</ul>
        </nav>
        <div class="header-actions">
          <a href="cart.html" class="icon-btn cart-btn" aria-label="View cart">
            🛒 <span class="cart-count">0</span>
          </a>
          <button class="hamburger" id="hamburger" aria-label="Toggle menu">
            <span></span><span></span><span></span>
          </button>
        </div>
      </div>
    </header>
  `;

  const hamburger = document.getElementById("hamburger");
  const nav = document.getElementById("main-nav");
  hamburger.addEventListener("click", () => {
    nav.classList.toggle("open");
    hamburger.classList.toggle("active");
  });

  updateCartCount();
}

function renderFooter() {
  const mount = document.getElementById("site-footer");
  if (!mount) return;
  mount.innerHTML = `
    <footer class="site-footer">
      <div class="container footer-grid">
        <div class="footer-col">
          <a href="index.html" class="logo light">Bloom&nbsp;&amp;&nbsp;Co<span>.</span></a>
          <p>Fresh, hand-tied flowers delivered with love — same-day, every day. Family-run, sustainably grown, beautifully arranged.</p>
          <div class="trust-badges">
            <span>🌿 Sustainably Sourced</span>
            <span>🚚 Same-Day Delivery</span>
            <span>💯 Freshness Guarantee</span>
          </div>
        </div>
        <div class="footer-col">
          <h4>Shop</h4>
          <ul>
            <li><a href="shop.html">All Flowers</a></li>
            <li><a href="occasions.html">Occasions</a></li>
            <li><a href="delivery.html">Same-Day Delivery</a></li>
            <li><a href="weddings.html">Weddings &amp; Events</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>Company</h4>
          <ul>
            <li><a href="about.html">About Us</a></li>
            <li><a href="contact.html">Contact</a></li>
            <li><a href="cart.html">Your Cart</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>Get in touch</h4>
          <ul>
            <li><a href="tel:+61200000000">(02) 0000 0000</a></li>
            <li><a href="mailto:hello@bloomandco.com">hello@bloomandco.com</a></li>
            <li>123 Blossom Street, Sydney NSW</li>
          </ul>
        </div>
      </div>
      <div class="container footer-bottom">
        <p>&copy; ${new Date().getFullYear()} Bloom &amp; Co. All rights reserved. Built with love, HTML, CSS &amp; JS.</p>
      </div>
    </footer>
  `;
}

/* ---------- Star Rating Renderer ---------- */
function renderStars(rating) {
  const full = Math.round(rating);
  let stars = "";
  for (let i = 0; i < 5; i++) stars += i < full ? "★" : "☆";
  return stars;
}

/* ---------- Same-Day Delivery Cutoff Helper ---------- */
function isSameDayAvailable() {
  const now = new Date();
  const cutoffHour = 14; // 2:00 PM cutoff
  return now.getHours() < cutoffHour;
}

function minDeliveryDate() {
  const d = new Date();
  if (!isSameDayAvailable()) d.setDate(d.getDate() + 1);
  return d.toISOString().split("T")[0];
}

/* ---------- Scroll Reveal Animation ---------- */
function initScrollReveal() {
  const items = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window)) {
    items.forEach((el) => el.classList.add("visible"));
    return;
  }
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );
  items.forEach((el) => observer.observe(el));
}

/* ---------- Generic Form Validation ---------- */
function validateForm(form) {
  let valid = true;
  form.querySelectorAll("[required]").forEach((field) => {
    const errorEl = form.querySelector(`.error-msg[data-for="${field.name}"]`);
    let message = "";
    if (!field.value.trim()) {
      message = "This field is required.";
    } else if (field.type === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(field.value)) {
      message = "Please enter a valid email address.";
    } else if (field.type === "tel" && field.value.trim().length < 6) {
      message = "Please enter a valid phone number.";
    }
    if (message) {
      valid = false;
      field.classList.add("invalid");
      if (errorEl) errorEl.textContent = message;
    } else {
      field.classList.remove("invalid");
      if (errorEl) errorEl.textContent = "";
    }
  });
  return valid;
}

/* ---------- Init on every page ---------- */
document.addEventListener("DOMContentLoaded", () => {
  renderHeader();
  renderFooter();
  initScrollReveal();
  updateCartCount();
});
