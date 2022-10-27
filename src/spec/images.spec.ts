import app from "../index";
import supertest from "supertest";

const req = supertest(app);

describe("Image Resizing Route", () => {
  it("It should work well with filename , height and width", async () => {
    const res = await req.get(
      "/api/images?filename=1.jpg&width=300&height=300"
    );
    expect(res.status).toEqual(200);

    expect(res.body).toBeTruthy();
  });
  it("It should not work with filename not exist", async () => {
    const res = await req.get(
      "/api/images?filename=test.jpg&width=300&height=300"
    );
    expect(res.status).toEqual(404);
  });
  it("It should not work without filename", async () => {
    const res = await req.get("/api/images");
    expect(res.status).toEqual(400);
  });

  it("It should not work without height", async () => {
    const res = await req.get("/api/images?filename=1.jpg&width=200");
    expect(res.status).toEqual(400);

    expect(res.text).toEqual("Width and Height Required !");
  });
  it("It should not work without width", async () => {
    const res = await req.get("/api/images?filename=1.jpg");
    expect(res.status).toEqual(400);
    expect(res.text).toEqual("Width and Height Required !");
  });
});
