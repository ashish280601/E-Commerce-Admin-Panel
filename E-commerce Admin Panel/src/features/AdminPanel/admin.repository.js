import mongoose, { model } from "mongoose";
import adminSchema from "./admin.schema.js";

const AdminModel = model("Products", adminSchema);

class AdminRepository {
  async getProduct() {
    try {
      const allProducts = await AdminModel.find();
      return allProducts;
    } catch (error) {
      throw new Error("Something went wrong with database", 500);
    }
  }

  async addProduct(name, quantity) {
    try {
      const newProduct = new AdminModel({ name, quantity });
      await newProduct.save();
      return newProduct;
    } catch (error) {
      throw new Error("Something went wrong with database", 500);
    }
  }

  async updateProductQuantity(id, quantity) {
    try {
      const updateProduct = await AdminModel.findByIdAndUpdate(
        id,
        { quantity: quantity },
        { new: true }
      );
      if (!updateProduct) {
        throw new Error("Product not found", 500);
      }
      return updateProduct;
    } catch (error) {
      throw new Error("Something went wrong with database", 500);
    }
  }

  async deleteProduct(id) {
    try {
      const deletedProduct = await AdminModel.findByIdAndDelete(id);
      if (!deletedProduct) {
        throw new Error("Product not found", 404);
      }
      return deletedProduct;
    } catch (error) {
      throw new Error("Something went wrong with database", 500);
    }
  }
}

export default AdminRepository;
