import express from "express";
import { resizeImage } from "../controllers/images.controller";
import { ImageValidator } from "../validators/images.validator";

const router = express.Router();

router.get("/api/images", ImageValidator, resizeImage);

export default router;
