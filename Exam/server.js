const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.static('public'));
app.use(express.json());

// Simulated DB
let phonesForSale = [
  { id: 1, model: 'iPhone 13', price: 750 },
  { id: 2, model: 'Samsung S22', price: 690 },
  { id: 3, model: 'OnePlus 9', price: 620 },
  { id: 4, model: 'iPhone 14 Pro', price: 999 },
  { id: 5, model: 'Samsung S23 Ultra', price: 1199 },
  { id: 6, model: 'OnePlus 11R', price: 580 },
  { id: 7, model: 'Pixel 8 Pro', price: 899 },
  { id: 8, model: 'iPhone SE 2022', price: 429 },
  { id: 9, model: 'Samsung A54', price: 450 },
  { id: 10, model: 'OnePlus Nord CE 3', price: 400 },
  { id: 11, model: 'Pixel 7', price: 599 },
  { id: 12, model: 'iPhone 15', price: 799 },
  { id: 13, model: 'Samsung Z Flip 5', price: 999 },
  { id: 14, model: 'OnePlus 12', price: 720 },
  { id: 15, model: 'Pixel 6a', price: 349 },
  { id: 16, model: 'iPhone XR', price: 350 },
  { id: 17, model: 'Samsung S21 FE', price: 599 },
  { id: 18, model: 'OnePlus 8T', price: 490 }
];

let phonesToBuy = [
  { id: 1, model: 'Pixel 6', price: 500 },
  { id: 2, model: 'iPhone 12', price: 550 },
  { id: 3, model: 'Samsung A72', price: 400 },
  { id: 4, model: 'OnePlus Nord N200', price: 250 },
  { id: 5, model: 'iPhone 11', price: 450 },
  { id: 6, model: 'Samsung S20', price: 500 },
  { id: 7, model: 'Pixel 5', price: 350 },
  { id: 8, model: 'iPhone XS', price: 300 },
  { id: 9, model: 'Samsung A32', price: 270 },
  { id: 10, model: 'OnePlus 7T', price: 320 },
  { id: 11, model: 'Pixel 4 XL', price: 290 },
  { id: 12, model: 'iPhone 8 Plus', price: 230 },
  { id: 13, model: 'Samsung Note 10', price: 420 },
  { id: 14, model: 'OnePlus 6T', price: 280 },
  { id: 15, model: 'Pixel 3a', price: 180 },
  { id: 16, model: 'iPhone 7', price: 200 },
  { id: 17, model: 'Samsung J7 Prime', price: 150 },
  { id: 18, model: 'OnePlus X', price: 160 }
];

app.get('/api/sell', (req, res) => {
  res.json(phonesForSale);
});

app.get('/api/buy', (req, res) => {
  res.json(phonesToBuy);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});