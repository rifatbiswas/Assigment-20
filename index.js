const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/Ecoomarce', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const User = require('./userModel');
const Product = require('./productModel');
const CartItem = require('./cartItemModel');
const Order = require('./orderModel');

// Set up relationships
User.hasMany(CartItem, { onDelete: 'cascade' });
User.hasMany(Order, { onDelete: 'cascade' });

module.exports = { User, Product, CartItem, Order };
