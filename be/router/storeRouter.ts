import { Router } from "express";
import {
  createProduct,
  getAllProduct,
  getOneProduct,
  getProductByCategory,
  getProductByName,
  getProductByPrice,
  getProductByPriceName,
} from "../controller/storeController";

const router: Router = Router();

router.route("/create-product").post(createProduct);

router.route("/get-product-price").get(getProductByPrice);

router.route("/get-product-name").get(getProductByName);
router.route("/get-product-price-name").get(getProductByPriceName);

router.route("/get-product-category").get(getProductByCategory);

router.route("/get-products").get(getAllProduct);
router.route("/get-one-product/:productID").get(getOneProduct);

export default router;
