import express from "express";
import * as controller from "../controller/controller.js";
const router = express.Router();

router.get('/', controller.getAllProduct);
router.get('/:id', controller.getSingleProduct);
router.post('/', controller.createProduct);
router.patch('/:id', controller.updateProduct);
router.delete('/:id', controller.deleteProduct)

// console.log(router);


export default router;