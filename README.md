# 🌸 Bloom & Co. — Florist E-Commerce Website

A complete, production-ready florist e-commerce website built with **pure HTML5, CSS3, and vanilla JavaScript** — no frameworks, no build tools, no dependencies. 100% free to host on GitHub Pages.

## Live Demo
Enable GitHub Pages: `Settings → Pages → Deploy from branch → main / root`.

## Pages
| Page | File |
|---|---|
| Home | `index.html` |
| Shop (with filters) | `shop.html` |
| Product Detail | `product.html?id=p1` |
| Occasions | `occasions.html` |
| Same-Day Delivery | `delivery.html` |
| Weddings & Events | `weddings.html` |
| About Us | `about.html` |
| Contact | `contact.html` |
| Cart | `cart.html` |

## Folder Structure
```
florist-site/
├── index.html
├── shop.html
├── product.html
├── occasions.html
├── delivery.html
├── weddings.html
├── about.html
├── contact.html
├── cart.html
├── css/
│   └── styles.css
├── js/
│   ├── products.js     # product catalogue & mock data
│   └── script.js       # nav, cart, forms, animations
└── README.md
```

## Features
- Responsive, mobile-first design with hamburger navigation
- Shop filtering by occasion, flower type, price range, same-day availability
- Product detail page: gallery, size options, add-ons, gift message, delivery date picker, same-day badge
- Cart powered by `localStorage` — quantity controls, remove items, order summary
- Mock checkout flow (no real payment)
- Contact & wedding enquiry forms with client-side validation
- Scroll-reveal animations, toast notifications
- Elegant floral design system: soft pink / cream / green palette, Playfair Display + Poppins typography

## Deploying to GitHub Pages
1. Create a new GitHub repository and push this folder's contents to the `main` branch.
2. Go to **Settings → Pages**.
3. Under **Source**, select `Deploy from a branch`, branch `main`, folder `/ (root)`.
4. Save — your site will be live at `https://<username>.github.io/<repo-name>/`.

## Notes
- All product images are hotlinked from Unsplash (free to use, no attribution required for demo purposes). Swap in your own images in `js/products.js` for production use.
- The checkout is a simulation — no payment gateway is integrated. Connect Stripe/PayPal or a backend of your choice for real transactions.
- No API keys, paid services, or server required — everything runs client-side.
