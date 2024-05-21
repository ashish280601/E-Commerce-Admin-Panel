import AdminRepository from "./admin.repository.js";
export default class AdminController {
  // creating an instance of an adminRepository
  constructor() {
    this.adminRepository = new AdminRepository();
  }

  async getProduct(req, res) {
    try {
      const allProducts = await this.adminRepository.getProduct();
      const responseData = { product: allProducts };
      return res.status(200).json({ data: responseData });
    } catch (error) {
      return res.status(500).send("Internal Server Error");
    }
  }

  async addProduct(req, res) {
    try {
      console.log(req.body);
      const { name, quantity } = req.body;
      const newProduct = await this.adminRepository.addProduct(name, quantity);
      const responseData = { product: newProduct }; // formate my repsone in object
      return res.status(200).json({ data: responseData });
    } catch (error) {
      return res.status(500).send("Internal Server Error");
    }
  }

  async updateProductQuantity(req, res) {
    try {
      const { id } = req.params;
      const number = req.query.number ;
      const updateProduct = await this.adminRepository.updateProductQuantity(
        id,
        number
      );
      if (!updateProduct) {
        return res.status(404).send("Product not found");
      }
      return res.status(200).json({
        data: {
          product: updateProduct,
          message: "Updated Successfully"
        },
      });
    } catch (error) {
      return res.status(500).send("Internal Server Error");
    }
  }

  async deleteProduct(req, res) {
    try {
      const { id } = req.params;
      console.log(id);
      await this.adminRepository.deleteProduct(id);
      return res.status(200).json({
        data: {
          message: "Product Deleted",
        },
      });
    } catch (error) {
      return res.status(500).send("Internal Server Error");
    }
  }
}
