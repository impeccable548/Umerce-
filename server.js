const express = require('express');
const path = require('path');

const app = express();
const PORT = 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

const menuItems = [
  { id: 1, name: 'Classic Burger', price: 9.99, category: 'Burgers', description: 'Juicy beef patty with lettuce, tomato, and special sauce', emoji: '🍔' },
  { id: 2, name: 'Cheese Burger', price: 11.99, category: 'Burgers', description: 'Classic burger topped with melted cheddar cheese', emoji: '🍔' },
  { id: 3, name: 'Margherita Pizza', price: 13.99, category: 'Pizza', description: 'Fresh tomato sauce, mozzarella, and basil', emoji: '🍕' },
  { id: 4, name: 'Pepperoni Pizza', price: 15.99, category: 'Pizza', description: 'Loaded with pepperoni and mozzarella cheese', emoji: '🍕' },
  { id: 5, name: 'Caesar Salad', price: 8.99, category: 'Salads', description: 'Crisp romaine, parmesan, croutons, and caesar dressing', emoji: '🥗' },
  { id: 6, name: 'Greek Salad', price: 9.99, category: 'Salads', description: 'Cucumber, tomato, olives, and feta cheese', emoji: '🥗' },
  { id: 7, name: 'Lemonade', price: 3.49, category: 'Drinks', description: 'Freshly squeezed lemonade', emoji: '🍋' },
  { id: 8, name: 'Iced Coffee', price: 4.49, category: 'Drinks', description: 'Cold brew over ice with your choice of milk', emoji: '☕' },
];

const orders = [];

app.get('/api/menu', (req, res) => {
  res.json(menuItems);
});

app.post('/api/orders', (req, res) => {
  const { items, customerName } = req.body;
  if (!items || items.length === 0) {
    return res.status(400).json({ error: 'No items in order' });
  }
  const order = {
    id: orders.length + 1,
    customerName: customerName || 'Guest',
    items,
    total: items.reduce((sum, item) => sum + item.price * item.quantity, 0).toFixed(2),
    status: 'Received',
    createdAt: new Date().toISOString(),
  };
  orders.push(order);
  res.status(201).json(order);
});

app.get('/api/orders', (req, res) => {
  res.json(orders);
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Umerce server running on port ${PORT}`);
});
