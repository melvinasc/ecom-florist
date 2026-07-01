/* ============================================================
   BLOOM & CO. — Product Data
   Central product catalogue used across shop, home, product,
   occasions pages. Images are hotlinked from Unsplash (free to use).
   ============================================================ */

const PRODUCTS = [
  {
    id: "p1",
    name: "Rosalind Rose Bouquet",
    price: 79.95,
    occasion: ["romance", "birthday", "bestsellers"],
    flowerType: "rose",
    sameDay: true,
    rating: 4.9,
    reviews: 128,
    image: "https://images.unsplash.com/photo-1526047932273-341f2a7631f9?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1526047932273-341f2a7631f9?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1518895312237-a9e23508077d?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1455659817273-f96807779a8a?auto=format&fit=crop&w=900&q=80"
    ],
    description: "Two dozen hand-tied red roses wrapped in soft kraft and blush ribbon. A timeless gesture for the ones who mean the most — grown fresh, cut same morning, and delivered with care."
  },
  {
    id: "p2",
    name: "Golden Sunrise Bouquet",
    price: 64.5,
    occasion: ["birthday", "bestsellers", "corporate"],
    flowerType: "sunflower",
    sameDay: true,
    rating: 4.8,
    reviews: 94,
    image: "https://images.unsplash.com/photo-1470509037663-253afd7f0f51?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1470509037663-253afd7f0f51?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1597848212624-a19eb35e2651?auto=format&fit=crop&w=900&q=80"
    ],
    description: "Bright sunflowers paired with seasonal foliage bring instant warmth and joy — perfect for birthdays, congratulations, and cheering someone up."
  },
  {
    id: "p3",
    name: "Serenity White Lily Arrangement",
    price: 88.0,
    occasion: ["sympathy", "newbaby"],
    flowerType: "lily",
    sameDay: true,
    rating: 5.0,
    reviews: 61,
    image: "https://images.unsplash.com/photo-1509587584298-0f3b3a3a1797?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1509587584298-0f3b3a3a1797?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1502680390469-be75c86b636f?auto=format&fit=crop&w=900&q=80"
    ],
    description: "Elegant white lilies and eucalyptus arranged in a low ceramic bowl — a gentle, comforting tribute for sympathy or a peaceful welcome for new beginnings."
  },
  {
    id: "p4",
    name: "Blush Peony Garden Box",
    price: 95.0,
    occasion: ["romance", "anniversary", "bestsellers"],
    flowerType: "peony",
    sameDay: false,
    rating: 4.9,
    reviews: 152,
    image: "https://images.unsplash.com/photo-1520763185298-1b434c919102?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1520763185298-1b434c919102?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=900&q=80"
    ],
    description: "Full, romantic peonies nestled in a keepsake hat box. A show-stopping gift for anniversaries and grand romantic gestures."
  },
  {
    id: "p5",
    name: "Pastel Tulip Delight",
    price: 54.0,
    occasion: ["birthday", "newbaby"],
    flowerType: "tulip",
    sameDay: true,
    rating: 4.7,
    reviews: 73,
    image: "https://images.unsplash.com/photo-1462530260150-162092dbf011?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1462530260150-162092dbf011?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1487070183336-b863922373d4?auto=format&fit=crop&w=900&q=80"
    ],
    description: "Soft pastel tulips in pink, cream and lilac — light, playful and full of spring energy. A cheerful surprise for any happy occasion."
  },
  {
    id: "p6",
    name: "Orchid Elegance Plant",
    price: 69.0,
    occasion: ["corporate", "sympathy"],
    flowerType: "orchid",
    sameDay: true,
    rating: 4.8,
    reviews: 45,
    image: "https://images.unsplash.com/photo-1524598171353-e0e0d3f9e2b1?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1524598171353-e0e0d3f9e2b1?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?auto=format&fit=crop&w=900&q=80"
    ],
    description: "A single elegant white Phalaenopsis orchid in a ceramic pot — long-lasting, sophisticated, and ideal for offices or heartfelt condolences."
  },
  {
    id: "p7",
    name: "Wildflower Meadow Bunch",
    price: 49.5,
    occasion: ["birthday", "bestsellers"],
    flowerType: "mixed",
    sameDay: true,
    rating: 4.6,
    reviews: 88,
    image: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1526397751294-331021109fbd?auto=format&fit=crop&w=900&q=80"
    ],
    description: "A loose, garden-picked mix of seasonal wildflowers tied with linen twine. Effortlessly beautiful, exactly the way nature intended."
  },
  {
    id: "p8",
    name: "Crimson Anniversary Roses",
    price: 110.0,
    occasion: ["romance", "anniversary"],
    flowerType: "rose",
    sameDay: false,
    rating: 5.0,
    reviews: 201,
    image: "https://images.unsplash.com/photo-1455659817273-f96807779a8a?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1455659817273-f96807779a8a?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1526047932273-341f2a7631f9?auto=format&fit=crop&w=900&q=80"
    ],
    description: "Fifty premium long-stem crimson roses — our most luxurious arrangement, reserved for milestones worth celebrating in a big way."
  },
  {
    id: "p9",
    name: "Corporate Welcome Arrangement",
    price: 75.0,
    occasion: ["corporate"],
    flowerType: "mixed",
    sameDay: true,
    rating: 4.7,
    reviews: 33,
    image: "https://images.unsplash.com/photo-1487070183336-b863922373d4?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1487070183336-b863922373d4?auto=format&fit=crop&w=900&q=80"
    ],
    description: "A structured, modern arrangement designed for reception desks and office lobbies. Clean lines, seasonal blooms, lasting impression."
  },
  {
    id: "p10",
    name: "New Baby Blossom Basket",
    price: 72.0,
    occasion: ["newbaby"],
    flowerType: "mixed",
    sameDay: true,
    rating: 4.9,
    reviews: 40,
    image: "https://images.unsplash.com/photo-1518895312237-a9e23508077d?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1518895312237-a9e23508077d?auto=format&fit=crop&w=900&q=80"
    ],
    description: "Soft pinks and creams in a woven basket, welcoming the newest member of the family with warmth and softness."
  },
  {
    id: "p11",
    name: "Comfort & Peace Wreath",
    price: 98.0,
    occasion: ["sympathy"],
    flowerType: "lily",
    sameDay: false,
    rating: 4.9,
    reviews: 27,
    image: "https://images.unsplash.com/photo-1502680390469-be75c86b636f?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1502680390469-be75c86b636f?auto=format&fit=crop&w=900&q=80"
    ],
    description: "A graceful standing wreath of white lilies, roses and greenery — offered as a lasting tribute of comfort and remembrance."
  },
  {
    id: "p12",
    name: "Ever After Bridal Bouquet",
    price: 145.0,
    occasion: ["romance", "anniversary"],
    flowerType: "peony",
    sameDay: false,
    rating: 5.0,
    reviews: 19,
    image: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?auto=format&fit=crop&w=900&q=80"
    ],
    description: "A cascading bridal bouquet of peonies, garden roses and trailing greenery — designed for the walk that matters most."
  }
];

const OCCASION_LABELS = {
  birthday: "Birthday",
  romance: "Love & Romance",
  sympathy: "Sympathy",
  bestsellers: "Best Sellers",
  anniversary: "Anniversary",
  newbaby: "New Baby",
  corporate: "Corporate Gifts"
};

const REVIEWS = [
  { name: "Emily R.", text: "The bouquet was even more beautiful in person. Delivered same day as promised, right on time for my mum's birthday.", rating: 5 },
  { name: "James T.", text: "Ordered at 11am for a same-day sympathy arrangement — flawless, fresh, and handled with such care.", rating: 5 },
  { name: "Priya S.", text: "The gift message feature made it feel so personal. My partner still talks about the roses two weeks later.", rating: 5 },
  { name: "Michael B.", text: "Reliable, gorgeous flowers every single time. Our office orders from Bloom & Co. for every event.", rating: 4 }
];

const GALLERY_IMAGES = [
  "https://images.unsplash.com/photo-1526047932273-341f2a7631f9?auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1470509037663-253afd7f0f51?auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1520763185298-1b434c919102?auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1462530260150-162092dbf011?auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1509587584298-0f3b3a3a1797?auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1455659817273-f96807779a8a?auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1524598171353-e0e0d3f9e2b1?auto=format&fit=crop&w=500&q=60"
];
