import express from "express";
import path from "path";
import fs from "fs";

const ImageValidator = (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  const { filename, width, height } = req.query;

  if (!filename) {
    return res.status(400).send("File Name Required !");
  }

  if (!width || !height) {
    return res.status(400).send("Width and Height Required !");
  }
  if (!fs.existsSync(`${path.resolve("./")}/assets/full/${filename}`)) {
    return res.status(404).send("File Not Found");
  }

  next();
};

export { ImageValidator };
