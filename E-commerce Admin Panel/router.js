import express from "express";
import adminRouter from "./src/features/AdminPanel/admin.router.js";

const router = express.Router();

router.get('/', (req, res) => {
    return res.status(200).json({
        message: "E-commerce APIs Admin Pannel",
        status: true
    })
})
// parent router
router.use('/products', adminRouter);



export default router
//  now lets see postman output for this crud api