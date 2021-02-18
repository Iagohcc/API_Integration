const mongoose = require("mongoose");

const OrdersSchema = new mongoose.Schema({
  id: Number,
  title: String,
  value: Number,
  currency: String,
  add_time: Date,
  update_time: Date,
  active: Boolean,
  deleted: Boolean,
  status: String,
  org_name: String,
});

module.exports = mongoose.model("orders", OrdersSchema);
