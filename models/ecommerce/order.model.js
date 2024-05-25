import mongoose from "mongoose";

const orderProductSchema = new mongoose.Schema({
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
  },
  quantity: {
    type: "Number",
    required: true,
    default: 1,
  },
});

const orderSchema = new mongoose.Schema(
  {
    customer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    paymentType: {
      type: String,
    },
    orderItems: {
      type: [orderProductSchema],
    },
    orderPrice: {
      type: Number,
      required: true,
    },
    address: {
      type: String,
      required: true
    },
    status: {
      type: String,
      enum: ["Pending","Cancelled","Delivered"],
      default: "Pending"
    }
  },
  {
    timestamps: true,
  }
);

export const Order = mongoose.model("Order", orderSchema);
