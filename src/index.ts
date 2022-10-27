import express from "express";
import cors from "cors";
import router from "./routes/images.router";

const app: express.Application = express();
const port = 3333;
app.use(cors());
app.use(express.json());

app.use(router);

app.listen(port, () => {
  console.log("server listening on port" + port);
});
export default app;
