import express  from "express";
import { addBrand, deleteBrand, editBrand, getBrands } from "../Controllers/BrandController";

const BrandRoutes = express.Router();

BrandRoutes.get("/", getBrands)
BrandRoutes.post("/addBrand", addBrand)
BrandRoutes.post("/editBrand", editBrand)
BrandRoutes.get("/delete/:id", deleteBrand)

export default BrandRoutes;