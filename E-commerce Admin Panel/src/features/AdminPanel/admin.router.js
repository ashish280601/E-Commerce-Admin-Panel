import express from "express";
import AdminController from "./admin.controller.js";

const adminRouter = express.Router();
// creating an instance of an admin controller
const adminController = new AdminController();

adminRouter.get('/', (req, res) => {
    adminController.getProduct(req, res);
});

adminRouter.post('/create', (req, res) => {
    adminController.addProduct(req, res);
});

adminRouter.post('/:id/update_quantity', (req, res) => {
    adminController.updateProductQuantity(req, res);
});

adminRouter.delete('/:id', (req, res) => {
    adminController.deleteProduct(req, res);
})

export default adminRouter;