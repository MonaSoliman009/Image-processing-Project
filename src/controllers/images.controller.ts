import express from "express";

import sharp from "sharp";
import path from "path";

function resizeImage(req: express.Request, res: express.Response) {
  const { filename, width, height } = req.query;

  sharp(`${path.resolve("./")}/assets/full/${filename}`)
    .resize({
      width: Number(width),
      height: Number(height),
    })
    .toFile(`${path.resolve("./")}/assets/thumb/${filename}`, (err) => {
      if (err) {
        res.json(err);
      } else {
        // console.log("File has successfully resized.");

        res.sendFile(`${path.resolve("./")}/assets/thumb/${filename}`);
      }
    });
}

export { resizeImage };
